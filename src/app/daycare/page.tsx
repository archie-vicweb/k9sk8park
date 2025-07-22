import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function Daycare() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHeader 
        title="Daycare" 
        subtitle="Assessments are done Monday to Friday from 11 am to 2 pm by appointment. Must provide Proof of Vaccination records."
      />

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b-4 border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-lg text-yellow-800 mb-4">
              <strong>📞 For daycare inquiries, call our daycare department at <a href="tel:778-265-2002" className="text-blue-600 hover:text-blue-800 underline">778-265-2002</a></strong>
            </div>
            <p className="text-gray-700 font-medium">
              <strong>We ask that you please let your dog relieve him or herself before arriving at K9SK8 Park!</strong> There are some green spaces around the facility - please clean up after your four legged friend! If in need of a poop bag, we have LOTS! Ask a staff member.
            </p>
          </div>
        </div>
      </section>

      {/* Daycare Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">K9SK8 Park Daycare</h2>
              <p className="text-lg text-gray-600 mb-6">
                Daycare is a wonderful way to keep your dog entertained while you&apos;re busy, or at work. Daycare is also a great way to socialize puppies and to build confidence in dogs of all ages.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our goal at <strong className="text-purple-600">K9SK8 Park</strong> is to provide physical activity and mental stimulation for your dog! Dogs are pack animals, and daycare is a safe and fun way to allow your dog to experience the benefits of pack structure.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Special Services - No Extra Charge!</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Feed your dog lunch (if supplied)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Administer medications throughout the day</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Accommodate special bathroom needs</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Just let a staff member know ahead of time!
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🐕</div>
              <h3 className="text-2xl font-bold mb-4">Assessment Required</h3>
              <p className="text-lg text-purple-600 mb-4 font-semibold">Monday - Friday</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">11 AM - 2 PM</p>
              <p className="text-gray-600">By appointment only</p>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  All new dogs must come in for an assessment before becoming part of our K9 family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our K9 SK8 Park Family</h2>
            <p className="text-xl text-gray-600">
              Some of our furry friends having fun at daycare!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 18 }, (_, index) => (
              <div 
                key={index}
                className="aspect-square bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  🐕
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-700 mb-4">
              <strong>Some of our K9 SK8 Park Family having fun!</strong>
            </p>
            <p className="text-gray-600">
              Your dog could be next to join our happy, active daycare community!
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Daycare Requirements</h2>
            <p className="text-xl text-gray-600">
              Safety and health are our top priorities for all our K9 family members
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vaccination Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">💉</div>
              <h3 className="text-2xl font-bold text-center mb-6">Vaccination Requirements</h3>
              <p className="text-gray-600 mb-6 text-center">All dogs must be up to date with their vaccinations:</p>
              <ul className="space-y-3">
                {[
                  "Bordetella",
                  "Distemper", 
                  "Canine Parvovirus",
                  "Canine Parainfluenza",
                  "Canine Adenovirus",
                  "Rabies"
                ].map((vaccine, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">{vaccine}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Age & Gender Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-2xl font-bold text-center mb-6">Age & Gender Requirements</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Male Dogs</h4>
                  <p className="text-gray-700">Must be neutered if over 6 months of age</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-bold text-pink-800 mb-2">Female Dogs</h4>
                  <p className="text-gray-700">Unspayed females must stay home for the entire duration of their heat</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Licensing</h4>
                  <p className="text-gray-700">All dogs must be licensed in order to go for walks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Rules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Safety Rules & Regulations</h2>
            <p className="text-xl text-gray-600">
              Safety is our main concern - please follow these important guidelines
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Triple Gate System */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-800 mb-3">🚪 Triple Gate System</h3>
              <p className="text-gray-700">
                Please refrain from trying to open any gates yourself. This shop is equipped with a triple gate system. 
                Our staff will open gates for you when it is safe to do so.
              </p>
            </div>

            {/* Walking Policy */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">🦮 Walking & Leash Policy</h3>
              <p className="text-gray-700 mb-3">
                When walking dogs, we use our own leashes and collars for maximum safety. Your dog will learn to walk on a loose lead. 
                Training collars will always be used, as this is the only type of collar that cannot break open.
              </p>
                             <p className="text-gray-600 text-sm">
                 We&apos;re happy to use your own harness if you prefer, but will have our leash and collar on as a backup.
               </p>
            </div>

            {/* Barking Policy */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">🔕 Barking Policy</h3>
              <p className="text-gray-700">
                Nuisance barking is not permitted, as it can agitate and greatly alter the mood of other dogs. 
                We use citronella collars and spray water bottles as training aids to address this issue.
              </p>
            </div>

            {/* Payment */}
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">💳 Payment Policy</h3>
              <div className="text-gray-700">
                <p className="mb-2"><strong>Payment is due at time of service.</strong></p>
                <p className="text-sm">Ask about our pre-paid punch cards for added convenience!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Assessment Process</h2>
            <p className="text-xl text-gray-600">
              What to expect during your dog&apos;s meet &amp; greet
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Evaluate</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                                             <h4 className="font-semibold text-gray-800">Dominance Level</h4>
                       <p className="text-gray-600">Assessment of your dog&apos;s personality and social hierarchy preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Canine Body Language</h4>
                      <p className="text-gray-600">Ability to read and express appropriate canine communication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety Assessment</h4>
                      <p className="text-gray-600">Ensuring your dog can interact safely in our environment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Vaccination Check</h4>
                      <p className="text-gray-600">Review of all required vaccination records</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-2xl font-bold mb-4">Schedule Your Assessment</h3>
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-purple-800 mb-2">Monday - Friday</p>
                  <p className="text-3xl font-bold text-gray-800 mb-2">11 AM - 2 PM</p>
                  <p className="text-gray-600">By appointment only</p>
                </div>
                                 <p className="text-gray-600 mb-6">
                   Meet &amp; Greets are required before your dog can join our daycare family. 
                   This ensures the safety and happiness of all our furry friends!
                 </p>
                <a href="tel:778-265-2002" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-block">
                  Call 778-265-2002
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join Our K9 Family?"
        subtitle="Give your dog the socialization and exercise they need in a safe, supervised environment!"
        primaryButton={{ text: "Call For Assessment", href: "tel:778-265-2002" }}
        secondaryButton={{ text: "View Pricing", href: "/pricing" }}
      />

      <Footer />
    </div>
  );
} 