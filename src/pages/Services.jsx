import { Link } from 'react-router-dom';
import { 
  FileText, CreditCard, Building2, GraduationCap, Wallet, Car,
  UserCheck, FileSearch, ClipboardList, FileCheck, Baby, Home,
  ArrowRight, CheckCircle, Phone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      title: t.services.mpOnline,
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      services: [
        { name: t.services.characterCert, desc: "Police Clearance Certificate", icon: UserCheck },
        { name: t.services.eFIR, desc: "Online First Information Report", icon: FileSearch },
        { name: t.services.tenantVerify, desc: "Online tenant verification", icon: ClipboardList },
        { name: "Income Certificate", desc: "Proof of income", icon: FileCheck },
        { name: "Caste Certificate", desc: "Official caste certificate", icon: FileText },
        { name: "Domicile Certificate", desc: "Proof of residence in MP", icon: Home },
        { name: "Birth Certificate", desc: "Birth registration", icon: Baby },
        { name: "Ration Card Services", desc: "New ration card, corrections", icon: ClipboardList },
      ]
    },
    {
      title: t.services.panCard,
      icon: CreditCard,
      color: "from-green-500 to-emerald-600",
      services: [
        { name: t.services.newPAN, desc: "Fresh PAN application", icon: CreditCard },
        { name: t.services.corrections, desc: "Name, DOB corrections", icon: FileCheck },
        { name: t.services.ePAN, desc: "Digital PAN within minutes", icon: FileText },
        { name: "Aadhaar Update", desc: "Update mobile, address", icon: UserCheck },
      ]
    },
    {
      title: t.services.landDocs,
      icon: Building2,
      color: "from-amber-500 to-orange-600",
      services: [
        { name: t.services.landRegistry, desc: "Property registration help", icon: Building2 },
        { name: t.services.khasra, desc: "Land ownership records", icon: FileText },
        { name: "Bhu-Naksha", desc: "Digital land maps", icon: FileSearch },
        { name: t.services.mutation, desc: "Transfer of ownership", icon: ClipboardList },
      ]
    },
    {
      title: t.services.collegeForms,
      icon: GraduationCap,
      color: "from-purple-500 to-violet-600",
      services: [
        { name: t.services.sgsForms, desc: "SGS admission assistance", icon: GraduationCap },
        { name: t.services.examForms, desc: "All university exams", icon: FileText },
        { name: "Scholarship Applications", desc: "Government scholarships", icon: ClipboardList },
        { name: "Competitive Exam Forms", desc: "MPPSC, MPTET, Vyapam", icon: FileSearch },
      ]
    },
    {
      title: "Transport Services",
      icon: Car,
      color: "from-cyan-500 to-teal-600",
      services: [
        { name: "Driving License", desc: "New DL, renewal", icon: CreditCard },
        { name: "Vehicle Registration", desc: "RC transfer, duplicate RC", icon: Car },
        { name: "Road Tax Payment", desc: "Online road tax", icon: ClipboardList },
      ]
    },
    {
      title: t.services.moneyWithdrawal,
      icon: Wallet,
      color: "from-rose-500 to-pink-600",
      services: [
        { name: t.services.aeps, desc: "Aadhaar-enabled cash", icon: Wallet },
        { name: t.services.balanceEnquiry, desc: "Check bank balance", icon: FileSearch },
        { name: "Money Transfer", desc: "Domestic transfers", icon: ClipboardList },
      ]
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.services.serviceCatalog}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.services.servicesPageTitle}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed px-4">
              {t.services.servicesPageDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10 sm:mb-14 lg:mb-16 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${category.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">{category.services.length} {t.services.servicesAvailable}</p>
                </div>
              </div>
              
              {/* Services List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors flex-shrink-0">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-primary-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500" />
                        {t.common.available}
                      </span>
                      <Link to="/contact" className="text-primary-600 text-xs sm:text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        {t.common.enquire} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t.services.transparentPricing}
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
              {t.services.transparentPricingDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="tel:+917879376949" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> {t.common.callForPricing}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors text-sm sm:text-base">
                {t.common.getQuoteOnline}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            {t.services.needHelp}
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            {t.services.needHelpDesc}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
            {t.common.contactUs} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
