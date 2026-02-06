const ProductCard = ({ image, name, category, price, inStock = true, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-30">📦</div>
          </div>
        )}
        
        {/* Stock Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          inStock 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary-600/90 text-white rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">
              ₹{price}
            </span>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
              Enquire
            </button>
          </div>
        )}
        
        {!price && (
          <button className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
            Get Price
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
