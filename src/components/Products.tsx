
import { Package, Star, Eye } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Indian Spices",
      category: "Quality Export",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400",
      description: "Premium spices including turmeric, cardamom, and garam masala from traditional sources",
      rating: 4.9,
      inStock: true
    },
    {
      id: 2,
      name: "Traditional Textiles",
      category: "Heritage Export",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      description: "Handwoven fabrics, silk sarees, and traditional garments with authentic craftsmanship",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Ayurvedic Products",
      category: "Wellness Export",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      description: "Traditional ayurvedic medicines and wellness products from ancient wisdom",
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: "Indian Handicrafts",
      category: "Artisan Crafts",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      description: "Handcrafted items, pottery, and traditional artwork from skilled artisans",
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: "Organic Food Products",
      category: "Premium Nutrition",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      description: "Organic rice, pulses, and traditional food items with authentic taste",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Indian Tea & Coffee",
      category: "Premium Beverages",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      description: "Premium Darjeeling tea, Assam tea, and traditional Indian coffee",
      rating: 4.9,
      inStock: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Our Product Collection</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Discover our collection of authentic Indian products for global export
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border-2 border-orange-200">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 text-orange-600 p-2 rounded-full shadow-lg hover:bg-white">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-orange-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-orange-500 fill-current" size={16} />
                    <span className="text-sm text-orange-700 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-orange-800 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={16} className="text-orange-600 mr-2" />
                    <span className="text-sm font-medium text-orange-700">
                      Available for Export
                    </span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors duration-200 text-sm font-medium shadow-lg">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-200 font-semibold shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
