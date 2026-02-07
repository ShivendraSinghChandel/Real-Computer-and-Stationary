import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    { icon: Phone, title: t.contact.phone, value: "+91 78793 76949", link: "tel:+917879376949", desc: t.contact.hoursValue },
    { icon: Mail, title: t.contact.emailTitle, value: "pariharrishabh55@gmail.com", link: "mailto:pariharrishabh55@gmail.com", desc: t.contact.weReply },
    { icon: MapPin, title: t.contact.visitUs, value: "Padainiya Khurd, Sidhi", link: "#map", desc: "MP - 486661" },
    { icon: Clock, title: t.contact.hoursTitle, value: t.contact.hoursValue, link: null, desc: t.contact.openAllWeek },
  ];

  const faqs = [
    { q: t.contact.faq1q, a: t.contact.faq1a },
    { q: t.contact.faq2q, a: t.contact.faq2a },
    { q: t.contact.faq3q, a: t.contact.faq3a },
    { q: t.contact.faq4q, a: t.contact.faq4a },
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Visit Our Shop in Padainiya Khurd, Sidhi"
        description="Contact Real Computer & Stationary in Sidhi, MP. Address: Padainiya Khurd, Sidhi, MP 486661. Phone: +91 78793 76949. Open Mon-Sun 9AM-9PM. Get directions and inquire about our services."
        keywords="Real Computer contact, Sidhi MP shop location, Padainiya Khurd Sidhi, MP Online center near me, stationary shop near Sidhi"
        path="/contact"
      />
      <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" /> {t.common.getInTouch}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.contact.pageTitle}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">{t.contact.pageDesc}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <method.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="text-primary-600 font-medium text-xs sm:text-sm hover:underline block truncate">{method.value}</a>
                ) : (
                  <span className="text-gray-900 font-medium text-xs sm:text-sm block">{method.value}</span>
                )}
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{t.contact.sendUsMessage}</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">{t.contact.sendUsMessageDesc}</p>
              <ContactForm />
            </div>

            {/* Map */}
            <div id="map">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{t.contact.ourLocation}</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">{t.contact.ourLocationDesc}</p>
              <div className="h-64 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.1012205394877!2d81.89547895243778!3d24.410205005157145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985967104659659%3A0x47651f2277598724!2sREAL%20COMPUTER%20%26%20STATIONARY!5e0!3m2!1sen!2sin!4v1770381998868!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Real Computer & Stationary Location"
                ></iframe>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{t.contact.shopName}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{t.about.addressValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">{t.contact.faq}</h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
