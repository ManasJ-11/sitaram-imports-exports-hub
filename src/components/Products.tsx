
import { Package, Star, Eye } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Indian Spices",
      category: "Export",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400",
      description: "Authentic spices including turmeric, cardamom, and garam masala",
      rating: 4.9,
      inStock: true
    },
    {
      id: 2,
      name: "Traditional Textiles",
      category: "Export",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      description: "Handwoven fabrics, silk sarees, and traditional garments",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Ayurvedic Products",
      category: "Export",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      description: "Natural ayurvedic medicines and wellness products",
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: "Indian Handicrafts",
      category: "Export",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      description: "Handcrafted items, pottery, and traditional artwork",
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: "Organic Food Products",
      category: "Export",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      description: "Organic rice, pulses, and traditional food items",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Indian Tea & Coffee",
      category: "Export",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      description: "Premium Darjeeling tea, Assam tea, and Indian coffee",
      rating: 4.9,
      inStock: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of authentic Indian products for global export
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-black rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border border-gray-800">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-black/80 text-white p-2 rounded-full shadow-lg hover:bg-black">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-amber-400 fill-current" size={16} />
                    <span className="text-sm text-gray-400 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-green-400">
                      Available for Export
                    </span>
                  </div>
                  <button className="bg-amber-600 text-black px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors duration-200 text-sm font-medium">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-black px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-200 font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
