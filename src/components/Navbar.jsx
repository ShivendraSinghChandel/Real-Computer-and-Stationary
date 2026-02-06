import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);
  const location = useLocation();
  const { language, setLanguage, t, languageNames, languageFlags, availableLanguages } = useLanguage();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDesktop = desktopLangRef.current && !desktopLangRef.current.contains(event.target);
      const isOutsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(event.target);
      if (isOutsideDesktop && isOutsideMobile) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.common.home, path: '/' },
    { name: t.common.services, path: '/services' },
    { name: t.common.products, path: '/products' },
    { name: t.common.about, path: '/about' },
    { name: t.common.contact, path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const showWhiteBg = scrolled || !isHomePage;
  const showDarkText = scrolled || !isHomePage;

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  const toggleLangDropdown = (e) => {
    e.stopPropagation();
    setLangDropdownOpen(prev => !prev);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showWhiteBg ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <img 
              src="/logo.png" 
              alt="Real Computer & Stationary" 
              className="h-14 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive(link.path) ? 'bg-primary-600 text-white' : showDarkText ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Contact (Desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Language Selector Desktop */}
            <div className="relative" ref={desktopLangRef}>
              <button 
                type="button"
                onClick={toggleLangDropdown}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg cursor-pointer transition-all ${showDarkText ? 'text-gray-600 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'}`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg leading-none">{languageFlags[language]}</span>
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-[100]">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 cursor-pointer transition-colors ${language === lang ? 'bg-primary-100 text-primary-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="text-lg leading-none">{languageFlags[lang]}</span>
                      <span>{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="tel:+917879376949" className={`flex items-center gap-1 lg:gap-2 ${showDarkText ? 'text-gray-600' : 'text-white/80'}`}>
              <Phone className="w-4 h-4" />
              <span className="text-xs lg:text-sm font-medium">+91 78793 76949</span>
            </a>
            <Link to="/contact" className="px-3 lg:px-5 py-2 lg:py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              {t.common.getQuote}
            </Link>
          </div>

          {/* Mobile - Language & Menu */}
          <div className="flex md:hidden items-center gap-1">
            {/* Language Selector Mobile */}
            <div className="relative" ref={mobileLangRef}>
              <button 
                type="button"
                onClick={toggleLangDropdown}
                className={`flex items-center gap-1 p-2 rounded-lg cursor-pointer ${showDarkText ? 'text-gray-600' : 'text-white'}`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg leading-none">{languageFlags[language]}</span>
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-2xl border border-gray-200 py-1 z-[100]">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 cursor-pointer transition-colors ${language === lang ? 'bg-primary-100 text-primary-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="text-lg leading-none">{languageFlags[lang]}</span>
                      <span>{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button type="button" onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${showDarkText ? 'text-gray-900' : 'text-white'}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t shadow-lg px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.path) ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              {link.name}
            </Link>
          ))}
          <a href="tel:+917879376949" className="flex items-center gap-2 px-4 py-3 text-primary-600 font-medium">
            <Phone className="w-5 h-5" /> +91 78793 76949
          </a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 bg-accent-500 text-white text-center font-semibold rounded-lg">
            {t.common.getQuote}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
