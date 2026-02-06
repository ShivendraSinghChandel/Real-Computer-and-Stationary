import { FileText, AlertTriangle, CreditCard, Clock, RefreshCw, Ban, Scale, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: FileText, title: t.terms.servicesProvided, items: t.terms.servicesProvidedItems },
    { icon: CreditCard, title: t.terms.pricing, items: t.terms.pricingItems },
    { icon: Clock, title: t.terms.processingTime, items: t.terms.processingTimeItems },
    { icon: AlertTriangle, title: t.terms.customerResp, items: t.terms.customerRespItems },
    { icon: RefreshCw, title: t.terms.refund, items: t.terms.refundItems },
    { icon: Ban, title: t.terms.limitations, items: t.terms.limitationsItems },
    { icon: Scale, title: t.terms.disputes, items: t.terms.disputesItems },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary-300" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t.terms.title}</h1>
          <p className="text-gray-300 text-sm sm:text-base">{t.terms.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {t.terms.intro}
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

          {/* Agreement Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t.terms.agreement}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t.terms.agreementDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8 border border-primary-100">
            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t.terms.questionsTitle}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  {t.terms.questionsDesc}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>{t.contact.phone}:</strong> <a href="tel:+917879376949" className="text-primary-600">+91 78793 76949</a><br />
                  <strong>{t.contact.emailTitle}:</strong> <a href="mailto:pariharrishabh55@gmail.com" className="text-primary-600">pariharrishabh55@gmail.com</a><br />
                  <strong>{t.contact.hoursTitle}:</strong> {t.contact.hoursValue}
                </p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link to="/" className="text-primary-600 font-medium hover:underline text-sm sm:text-base">
              {t.terms.backToHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
