
import { Package, Star, Eye } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Agricultural Products",
      category: "Export",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400",
      description: "Premium quality grains, spices, and organic produce",
      rating: 4.9,
      inStock: true
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      category: "Export",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      description: "Traditional and modern textile products",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Industrial Machinery",
      category: "Import",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      description: "Advanced manufacturing equipment and tools",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Electronics Components",
      category: "Import",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      description: "High-tech electronic components and devices",
      rating: 4.9,
      inStock: false
    },
    {
      id: 5,
      name: "Pharmaceuticals",
      category: "Export",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      description: "Quality pharmaceutical products and supplements",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Automotive Parts",
      category: "Import",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      description: "Genuine automotive components and accessories",
      rating: 4.6,
      inStock: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of high-quality products for import and export
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.category === 'Export' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={16} className="text-gray-400 mr-2" />
                    <span className={`text-sm font-medium ${
                      product.inStock ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
