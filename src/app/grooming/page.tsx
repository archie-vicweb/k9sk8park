import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

export default function Grooming() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageHeader 
        title="Parkway Grooming" 
        subtitle="Professional pet grooming with a gentle approach"
      />

      {/* Contact Info Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-6">Grooming</h2>
          <h3 className="text-2xl font-semibold mb-4">Call us to book appointment:</h3>
          <a href="tel:778-265-2002" className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors">
            1-778-265-2002
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Pricing Info */}
            <div className="bg-gray-50 p-6 rounded-lg text-center mb-12">
              <p className="text-lg">
                Nail clipping is $15 for an easy dog and $15-50 for a difficult dog.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              
              {/* Before/After Images */}
              <div className="text-center">
                <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-600">Before/After Slideshow</p>
                </div>
              </div>

              {/* Services Description */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  <span className="text-purple-500 italic">Quality over quantity</span>
                </h3>
                
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    We believe in showing the same kindness and care to each animal that we work with that we would want shown towards our own four legged children. A gentle and calm approach, combined with the highest in ethics and standards is what we thrive for. We groom cats and dogs and offer pet and show clips, as well as hand stripping.
                  </p>

                  <p>
                    If maintenance at home is a problem, we offer <span className="text-purple-600 italic font-semibold">brushing schedules</span> at a discounted price. We also offer face, feet or bum trims, and anal gland expression in between full grooms, by appointment.
                  </p>

                  <p>
                    <span className="text-purple-600 italic font-semibold">De-matting</span> is a service we offer on a limited basis. Even with the correct equipment and techniques, de-matting can be very uncomfortable for your pet. We want all of our clients (four legs and two) to be happy coming in and happy going home.
                  </p>

                  <p>
                    We use tearless shampoos. We offer a wide variety, including hypo-allergenic, medicated (for relief of seborrheic dermatitis), flea & tick, whitening, darkening, colour enhancing, coat texturizing (for wiry coats) and super concentrated (for oily coats and extra dirty dogs). Our shampoos are biodegradable and environmentally-friendly. We also use detanglers and conditioners with UV protection. Non-scented products are available as well.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-lg mb-2">
                    *Feel free to speak with our groomer if you have further questions about grooming.
                  </p>
                  <p className="text-red-600 font-semibold mb-2">
                    *Please allow 24 hours notice for cancellations to avoid a possible missed appointment fee *
                  </p>
                  <p className="font-semibold">
                    Please be advised that it is always flea season in Victoria!<br/>
                    Please ensure that your pet is on a flea control regime.
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                      <p className="text-gray-600 text-xs">Grooming {item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Double Coated Dogs Section */}
            <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-lg">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 underline">
                    Double Coated Dogs
                  </h2>
                  
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p>
                      <strong>Please note</strong>, that unless it is absolutely necessary and you provide a written recommendation by a veterinarian, <span className="text-purple-600 italic font-semibold">we do not clip double coated breeds of dogs</span>.
                    </p>

                    <p>
                      Double coated dogs are dogs that have a heavy undercoat (the lighter softer coat that sheds) and a protective outer layer of guard hairs (the hair that doesn&apos;t shed, provides protection against the rays of the sun and actually helps regulate the dog&apos;s temperature). Collies, labs, golden retrievers, shelties and Pomeranians are just a few examples of double coated dogs.
                    </p>

                    <p>
                      These dogs should <strong>not</strong> be shaved. Shaving or cutting the guard hair off short will not stop shedding.
                    </p>

                    <p>
                      If the guard hairs are shaved or cut short there is a very strong likelihood that they will not grow back. The undercoat will grow back and will often overgrow and suffocate the guard hairs. This can cause the guard hairs to become stuck inside the undercoat and poke the dog&apos;s skin. It is very uncomfortable for your dog. This can result in a patchy, scruffy appearance along with losing the natural protection and temperature regulation the guard hairs are meant to provide.
                    </p>

                    <p>
                      The older the dog, the less likely the guard hairs are to regrow. Skin that has been exposed to UV rays can take a long time to heal, and the dog may have scaling and dandruff for quite some time after the hair has regrown.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <div className="bg-gray-200 w-full max-w-sm h-80 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Double Coated Dog Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Full Grooming</h3>
                <p className="text-gray-600">Complete grooming service with bath, cut, and styling</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💅</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Nail Clipping</h3>
                <p className="text-gray-600">Professional nail trimming service</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧴</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Specialized Shampoos</h3>
                <p className="text-gray-600">Hypo-allergenic, medicated, and specialty shampoos available</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪥</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Brushing Schedules</h3>
                <p className="text-gray-600">Regular maintenance brushing at discounted rates</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐱</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Cats & Dogs</h3>
                <p className="text-gray-600">Professional grooming for both cats and dogs</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎀</span>
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">Show Clips</h3>
                <p className="text-gray-600">Professional show and pet clips available</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Pamper Your Pet?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your grooming appointment today and give your furry friend the care they deserve!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:778-265-2002" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: 778-265-2002
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 