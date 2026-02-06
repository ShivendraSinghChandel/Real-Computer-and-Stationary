import { createContext, useContext, useState, useEffect } from 'react';
import { locales, languageNames, languageFlags } from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem('language');
    return saved && locales[saved] ? saved : 'en';
  });

  const t = locales[language] || locales.en;

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update document lang attribute
    document.documentElement.lang = language === 'bgl' ? 'hi' : language;
  }, [language]);

  const changeLanguage = (lang) => {
    if (locales[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage, 
      t,
      languageNames,
      languageFlags,
      availableLanguages: Object.keys(locales)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
