import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

export default function Photos() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHeader 
        title="Photos" 
        subtitle="Some of our daycare dogs in action!"
      />

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {Array.from({length: 20}, (_, i) => i + 1).map((item) => (
                <div 
                  key={item} 
                  className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group"
                >
                  <div className="text-center">
                    <p className="text-gray-600 text-sm group-hover:text-gray-700">Photo {item}</p>
                    <p className="text-gray-500 text-xs mt-1">Click to view</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐕</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Daycare Fun</h3>
                <p className="text-gray-600">Dogs playing, socializing, and having a blast in our indoor park</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏰</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Equipment & Facilities</h3>
                <p className="text-gray-600">Ramps, tunnels, and play equipment in our unique indoor facility</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Grooming Before & After</h3>
                <p className="text-gray-600">Amazing transformations from our professional grooming services</p>
              </div>
            </div>

            {/* Gallery Description */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our K9SK8 Park Family!</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These photos capture the joy, energy, and happiness of our four-legged family members as they play, 
                learn, and socialize in our safe and supervised environment. Every photo tells a story of a dog 
                living their best life!
              </p>
            </div>

            {/* What You'll See Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">What You&apos;ll See in Our Gallery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dogs at Play</h4>
                    <p className="text-gray-600 text-sm">Action shots of dogs running, jumping, and playing with friends</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">🏃</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Equipment Adventures</h4>
                    <p className="text-gray-600 text-sm">Dogs navigating ramps, tunnels, and building confidence</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Social Interactions</h4>
                    <p className="text-gray-600 text-sm">Dogs making friends and learning proper social behavior</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grooming Transformations</h4>
                    <p className="text-gray-600 text-sm">Before and after shots showcasing our grooming expertise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">😊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Happy Moments</h4>
                    <p className="text-gray-600 text-sm">Pure joy and contentment captured in every photo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Training Sessions</h4>
                    <p className="text-gray-600 text-sm">Dogs learning new skills and building confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Credit */}
            <div className="text-center mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
              <p className="text-gray-700 font-medium">
                *All Picture Credit on this site goes to Paulina Szajek with Paulina Szajek Photography *
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Professional pet photography capturing the essence of our K9SK8 Park family
              </p>
            </div>

            {/* Visit Us CTA */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to See Your Dog Here?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Schedule an assessment today and let your dog join our happy family!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Schedule Assessment
                </a>
                <a 
                  href="tel:778-265-2002" 
                  className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Call: 778-265-2002
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 