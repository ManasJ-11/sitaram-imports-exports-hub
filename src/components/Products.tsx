
import { Package, Star, Eye } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
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
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-orange-200">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Our Product Collection</h2>
            <p className="text-xl text-red-600">Failed to load products. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Our Product Collection</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Discover our collection of authentic Indian products for global export
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border-2 border-orange-200 hover:-translate-y-2 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image_url || "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400"} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 animate-bounce">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-fade-in">
                  <button className="bg-white/90 text-orange-600 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-orange-900">{product.name}</h3>
                  <div className="flex items-center animate-pulse">
                    <Star className="text-orange-500 fill-current" size={16} />
                    <span className="text-sm text-orange-700 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-orange-800 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package size={16} className="text-orange-600 mr-2 animate-bounce" />
                    <span className="text-sm font-medium text-orange-700">
                      {product.in_stock ? "Available for Export" : "Out of Stock"}
                    </span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-500 hover:scale-105 transition-all duration-200 text-sm font-medium shadow-lg">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-500 hover:scale-105 transition-all duration-200 font-semibold shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
