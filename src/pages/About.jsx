import { Link } from 'react-router-dom';
import { Monitor, Target, Eye, Users, Award, Clock, MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t.about.customerFirst, desc: t.about.customerFirstDesc },
    { icon: Award, title: t.about.qualityService, desc: t.about.qualityServiceDesc },
    { icon: Clock, title: t.about.quickTurnaround, desc: t.about.quickTurnaroundDesc },
    { icon: Users, title: t.about.communityFocus, desc: t.about.communityFocusDesc },
  ];

  return (
    <>
      <SEO 
        title="About Us - 10+ Years Trusted Service in Sidhi"
        description="Real Computer & Stationary has been serving Sidhi, MP since 2014. Trusted by 10,000+ customers for MP Online services, PAN cards, land documents & stationary. Government authorized center."
        keywords="Real Computer Sidhi, about Real Computer, trusted service center Sidhi, MP Online center Sidhi, government authorized Sidhi"
        path="/about"
      />
      <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">{t.about.aboutUs}</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.about.pageTitle}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 px-2 lg:px-0">{t.about.pageDesc}</p>
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center lg:justify-start">
              <div className="text-center"><h3 className="text-2xl sm:text-3xl font-bold">10+</h3><p className="text-gray-300 text-xs sm:text-sm">{t.about.years}</p></div>
              <div className="text-center"><h3 className="text-2xl sm:text-3xl font-bold">10K+</h3><p className="text-gray-300 text-xs sm:text-sm">{t.about.customers}</p></div>
              <div className="text-center"><h3 className="text-2xl sm:text-3xl font-bold">50K+</h3><p className="text-gray-300 text-xs sm:text-sm">{t.about.servicesCount}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-linear-to-br from-primary-50 to-purple-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-primary-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t.about.ourMission}</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t.about.missionDesc}</p>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-amber-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t.about.ourVision}</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t.about.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{t.about.coreValues}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">{t.about.findShop}</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div><h4 className="font-semibold text-sm sm:text-base">{t.about.address}</h4><p className="text-gray-600 text-xs sm:text-sm">{t.about.addressValue}</p></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div><h4 className="font-semibold text-sm sm:text-base">{t.about.hours}</h4><p className="text-gray-600 text-xs sm:text-sm">{t.about.hoursValue}</p></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div><h4 className="font-semibold text-sm sm:text-base">{t.about.phone}</h4><a href="tel:+917879376949" className="text-primary-600 text-xs sm:text-sm">+91 78793 76949</a></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div><h4 className="font-semibold text-sm sm:text-base">{t.about.email}</h4><a href="mailto:pariharrishabh55@gmail.com" className="text-primary-600 text-xs sm:text-sm">pariharrishabh55@gmail.com</a></div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">{t.about.readyToExperience}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
            {t.common.getInTouch} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
