import { Link } from 'react-router-dom';
import { 
  FileText, CreditCard, Building2, GraduationCap, Wallet, ShoppingBag,
  ArrowRight, CheckCircle, Users, Clock, Shield, Star
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    { icon: FileText, title: t.services.mpOnline, description: t.services.mpOnlineDesc, features: [t.services.characterCert, t.services.eFIR, t.services.tenantVerify] },
    { icon: CreditCard, title: t.services.panCard, description: t.services.panCardDesc, features: [t.services.newPAN, t.services.corrections, t.services.ePAN] },
    { icon: Building2, title: t.services.landDocs, description: t.services.landDocsDesc, features: [t.services.landRegistry, t.services.khasra, t.services.mutation] },
    { icon: GraduationCap, title: t.services.collegeForms, description: t.services.collegeFormsDesc, features: [t.services.sgsForms, t.services.examForms, t.services.universityApps] },
    { icon: Wallet, title: t.services.moneyWithdrawal, description: t.services.moneyWithdrawalDesc, features: [t.services.aeps, t.services.cashWithdrawal, t.services.balanceEnquiry] },
    { icon: ShoppingBag, title: t.services.stationary, description: t.services.stationaryDesc, features: [t.services.pens, t.services.notebooks, t.services.officeSupplies] }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: t.home.happyCustomers },
    { icon: FileText, value: "50,000+", label: t.home.documentsProcessed },
    { icon: Clock, value: "10+", label: t.home.yearsExperience },
    { icon: Star, value: "4.9", label: t.home.customerRating }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-5 w-48 h-48 sm:w-72 sm:h-72 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-5 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium">{t.home.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.home.heroTitle1}
                <span className="block text-transparent bg-gradient-to-r from-primary-300 to-purple-400 bg-clip-text">{t.home.heroTitle2}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.home.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/services" className="px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                  {t.common.exploreServices} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center">
                  {t.common.contactUs}
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm text-gray-300">{t.home.govtAuthorized}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm text-gray-300">{t.home.trustedService}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 lg:mt-0">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center lg:text-left hover:bg-white/15 transition-all">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-300 mb-2 sm:mb-4 mx-auto lg:mx-0" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{t.home.ourServices}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{t.home.servicesTitle}</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">{t.home.servicesDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 overflow-hidden">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>{feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm hover:gap-3 transition-all">{t.common.learnMore} <ArrowRight className="w-4 h-4" /></Link>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group">
              {t.common.viewAllServices} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{t.home.whyChooseUs}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{t.home.trustedByThousands}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">{t.home.whyChooseDesc}</p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: t.home.quickProcessing, desc: t.home.quickProcessingDesc },
                  { title: t.home.affordableRates, desc: t.home.affordableRatesDesc },
                  { title: t.home.expertAssistance, desc: t.home.expertAssistanceDesc },
                  { title: t.home.oneStopSolution, desc: t.home.oneStopSolutionDesc }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-6 lg:mt-0">
              <div className="bg-gradient-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.home.getStartedToday}</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">{t.home.getStartedDesc}</p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300 flex-shrink-0" />
                    <span>{t.home.workingHours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300 flex-shrink-0" />
                    <span>{t.home.genuineService}</span>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
                  {t.common.contactNow} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl rotate-12 animate-float">
                <div className="text-white text-center -rotate-12">
                  <span className="text-lg sm:text-2xl font-bold">10+</span>
                  <span className="text-[10px] sm:text-xs block">{t.home.years}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">{t.home.readyToStart}</h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">{t.home.readyToStartDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+917879376949" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Call: +91 78793 76949
            </a>
            <Link to="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base">
              {t.common.getDirections}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
