const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ServiceCard;
