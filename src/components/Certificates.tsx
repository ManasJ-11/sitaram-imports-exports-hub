
import { Award, Calendar, FileText, Shield, CheckCircle } from "lucide-react";
import { useCertificates } from "@/hooks/useCertificates";
import { Skeleton } from "@/components/ui/skeleton";

const Certificates = () => {
  const { data: certificates, isLoading, error } = useCertificates();

  if (isLoading) {
    return (
      <section id="certificates" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified excellence and compliance for trusted global export operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-16"></div>
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-1/2 mb-4 bg-gray-700" />
                  <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-full mb-4 bg-gray-700" />
                  <Skeleton className="h-10 w-full bg-gray-700" />
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
      <section id="certificates" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-xl text-red-400">Failed to load certificates. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified excellence and compliance for trusted global export operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates?.map((certificate) => (
            <div key={certificate.id} className="bg-gray-900 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border border-gray-800">
              <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 h-16 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle size={12} />
                    {certificate.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-amber-600/20 p-2 rounded-lg mr-3">
                      <Award className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{certificate.name}</h3>
                      <p className="text-sm text-amber-400 font-medium">{certificate.type}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Shield size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Issuer:</span>
                    <span className="ml-1 truncate">{certificate.issuer}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">Valid:</span>
                    <span className="ml-1">
                      {new Date(certificate.issue_date).toLocaleDateString()} - {new Date(certificate.expiry_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-amber-600 text-black py-2 rounded-lg hover:bg-amber-500 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-2">
                  <FileText size={16} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 text-black px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors duration-200 font-semibold">
            Download All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
