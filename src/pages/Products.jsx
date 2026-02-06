import { useState } from 'react';
import { Search, Package, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t.products.all },
    { id: 'writing', name: t.products.writing },
    { id: 'notebooks', name: t.products.notebooks },
    { id: 'office', name: t.products.office },
    { id: 'art', name: t.products.art },
  ];

  const products = [
    { name: "Reynolds Pen (Blue)", price: 10, category: "writing", inStock: true },
    { name: "Cello Gripper Pen", price: 15, category: "writing", inStock: true },
    { name: "Natraj Pencil (Pack of 10)", price: 30, category: "writing", inStock: true },
    { name: "Apsara Glass Marking Pencil", price: 10, category: "writing", inStock: true },
    { name: "Camlin Kokuyo Pen", price: 20, category: "writing", inStock: true },
    { name: "Classmate Long Notebook", price: 40, category: "notebooks", inStock: true },
    { name: "Classmate Short Notebook", price: 30, category: "notebooks", inStock: true },
    { name: "Graph Paper Notebook", price: 25, category: "notebooks", inStock: true },
    { name: "Drawing Book A4", price: 35, category: "notebooks", inStock: true },
    { name: "Register 200 Pages", price: 80, category: "notebooks", inStock: true },
    { name: "Stapler Machine", price: 60, category: "office", inStock: true },
    { name: "Stapler Pins (Pack)", price: 15, category: "office", inStock: true },
    { name: "White Correction Pen", price: 25, category: "office", inStock: true },
    { name: "Scissors", price: 30, category: "office", inStock: true },
    { name: "Paper Clips (100 pcs)", price: 20, category: "office", inStock: true },
    { name: "Fevicol 50g", price: 20, category: "office", inStock: true },
    { name: "Camlin Water Colors", price: 45, category: "art", inStock: true },
    { name: "Sketch Pens (12 colors)", price: 60, category: "art", inStock: true },
    { name: "Crayons (24 colors)", price: 50, category: "art", inStock: true },
    { name: "Oil Pastels", price: 70, category: "art", inStock: true },
    { name: "A4 White Paper (100 sheets)", price: 120, category: "office", inStock: true },
    { name: "Carbon Paper", price: 5, category: "office", inStock: true },
    { name: "Scale 30cm", price: 10, category: "office", inStock: true },
    { name: "Geometry Box", price: 80, category: "office", inStock: true },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Package className="w-3 h-3 sm:w-4 sm:h-4" /> {t.products.qualityProducts}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.products.pageTitle}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-4">{t.products.pageDesc}</p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 sm:py-8 bg-white border-b sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.products.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{t.products.showingProducts} {filteredProducts.length} {t.products.productsText}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all group border border-gray-100">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg mb-3 flex items-center justify-center">
                      <Package className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-primary-600 font-bold text-sm sm:text-base">₹{product.price}</span>
                      <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded ${product.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {product.inStock ? t.common.inStock : t.common.outOfStock}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-sm sm:text-base">{t.products.noProducts}</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('all'); }} className="mt-4 text-primary-600 font-medium text-sm hover:underline">
                {t.common.clearFilters}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">{t.products.bulkOrders}</h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">{t.products.bulkOrdersDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+917879376949" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> {t.products.callBulkPricing}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base">
              {t.products.sendEnquiry} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
