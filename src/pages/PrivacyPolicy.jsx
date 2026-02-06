import { Shield, Eye, Lock, Database, Cookie, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: Database, title: t.privacy.infoCollect, items: t.privacy.infoCollectItems },
    { icon: Eye, title: t.privacy.howUse, items: t.privacy.howUseItems },
    { icon: Shield, title: t.privacy.dataProtection, items: t.privacy.dataProtectionItems },
    { icon: Lock, title: t.privacy.dataSecurity, items: t.privacy.dataSecurityItems },
    { icon: Cookie, title: t.privacy.thirdParty, items: t.privacy.thirdPartyItems },
    { icon: Clock, title: t.privacy.dataRetention, items: t.privacy.dataRetentionItems },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary-300" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t.privacy.title}</h1>
          <p className="text-gray-300 text-sm sm:text-base">{t.privacy.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {t.privacy.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 sm:mt-2">{section.title}</h2>
                </div>
                <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-14">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8 border border-primary-100">
            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t.privacy.questions}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  {t.privacy.questionsDesc}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>{t.contact.phone}:</strong> <a href="tel:+917879376949" className="text-primary-600">+91 78793 76949</a><br />
                  <strong>{t.contact.emailTitle}:</strong> <a href="mailto:pariharrishabh55@gmail.com" className="text-primary-600">pariharrishabh55@gmail.com</a><br />
                  <strong>{t.contact.visitUs}:</strong> Padainiya Khurd, Sidhi, MP - 486661
                </p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link to="/" className="text-primary-600 font-medium hover:underline text-sm sm:text-base">
              {t.privacy.backToHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
