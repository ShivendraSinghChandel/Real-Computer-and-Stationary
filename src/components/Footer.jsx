import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t.common.home, path: '/' },
    { name: t.common.services, path: '/services' },
    { name: t.common.products, path: '/products' },
    { name: t.common.about, path: '/about' },
    { name: t.common.contact, path: '/contact' },
  ];

  const services = [t.services.mpOnline, t.services.panCard, t.services.landDocs, t.services.collegeForms, t.services.moneyWithdrawal];

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <img 
                src="/logo.png" 
                alt="Real Computer & Stationary" 
                className="h-20 sm:h-24 w-auto object-contain bg-white/10 rounded-xl p-2"
              />
            </Link>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"><Facebook className="w-4 h-4 sm:w-5 sm:h-5" /></a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"><Instagram className="w-4 h-4 sm:w-5 sm:h-5" /></a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"><Twitter className="w-4 h-4 sm:w-5 sm:h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2"><div className="w-1 h-5 sm:h-6 bg-accent-500 rounded-full"></div>{t.footer.quickLinks}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}><Link to={link.path} className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors text-sm sm:text-base"><ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2"><div className="w-1 h-5 sm:h-6 bg-accent-500 rounded-full"></div>{t.footer.ourServices}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}><span className="text-gray-300 flex items-center gap-2 text-sm sm:text-base"><ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />{service}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2"><div className="w-1 h-5 sm:h-6 bg-accent-500 rounded-full"></div>{t.footer.contactUs}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">Padainiya Khurd,<br />Sidhi, MP - 486661</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+917879376949" className="text-gray-300 hover:text-white text-xs sm:text-sm">+91 78793 76949</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:pariharrishabh55@gmail.com" className="text-gray-300 hover:text-white text-xs sm:text-sm">pariharrishabh55@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">{t.contact.hoursValue}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© {currentYear} Real Computer & Stationary. {t.footer.allRightsReserved}</p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">{t.footer.termsOfService}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
