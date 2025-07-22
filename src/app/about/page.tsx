import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHeader 
        title="The Idea" 
        subtitle="The philosophy behind K9SK8 Park"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-center text-lg leading-relaxed mb-8">
                The idea behind K9SK8 Park is to create a place of total fun and recreation! Think of it as an indoor, off leash, dog park featuring ramps, tunnels and slides (coming soon) for your dog to build confidence, while having fun! All dogs must come in for an assessment before becoming a member of K9SK8 Park. This takes away the uncertainty of how a dog may react in a social situation, creating a safe and controlled environment where your dog can be a dog! This is a doggy day care your pet will love!
              </p>

              <p className="text-center text-lg leading-relaxed mb-12">
                The staff behind K9SK8 Park is a collection of some of the most qualified local individuals at any of the dog daycares on Vancouver island. With over 40 years combined experience (including 15 years of veterinary experience) and certifications ranging from Professional Groomer to Certified Master Trainer and Pet First Aid certified, your pet will truly receive the ultimate in care.
              </p>

              <p className="text-center text-lg leading-relaxed mb-12">
                We also double as a pet grooming studio!
              </p>
            </div>

            {/* Philosophy Section */}
            <div className="bg-purple-50 p-8 rounded-lg text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-lg">
                <p className="font-semibold text-gray-800">
                  A tired dog, both physically and mentally, is a happy and well behaved dog.
                </p>
                <p className="font-semibold text-gray-800">
                  A happy, well behaved dog, has a happy owner.
                </p>
                <p className="font-semibold text-gray-800">
                  A dogs mind is a terrible thing to waste.
                </p>
                <p className="font-semibold text-gray-800">
                  Never underestimate your dogs potential.
                </p>
              </div>
            </div>

            {/* Staff Qualifications */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">40+ Years Experience</h3>
                <p className="text-gray-600">Combined experience across our entire staff team</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">15 Years Veterinary</h3>
                <p className="text-gray-600">Veterinary experience on our team</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Certified Professionals</h3>
                <p className="text-gray-600">Professional Groomer to Certified Master Trainer and Pet First Aid certified</p>
              </div>
            </div>

            {/* What Makes Us Special */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">What Makes K9SK8 Park Special</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Indoor Off-Leash Dog Park</h4>
                    <p className="text-gray-600 text-sm">Safe, controlled environment with ramps, tunnels, and slides</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mandatory Assessment</h4>
                    <p className="text-gray-600 text-sm">Every dog assessed before joining to ensure safety and compatibility</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Qualified Staff</h4>
                    <p className="text-gray-600 text-sm">Most qualified team of any dog daycare on Vancouver Island</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grooming Studio</h4>
                    <p className="text-gray-600 text-sm">Professional pet grooming services available on-site</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Credit */}
            <p className="text-center text-sm text-gray-500 mt-12">
              *All Picture Credit on this site goes to Paulina Szajek with Paulina Szajek Photography *
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 