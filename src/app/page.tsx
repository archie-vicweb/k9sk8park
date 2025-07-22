import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-purple-600 mb-6 leading-tight">
            A Fun place for your dog to play
          </h1>
          <p className="text-2xl text-purple-500 font-semibold mb-8">
            - - - Dog Daycare - - - Dog Grooming - - -
          </p>
          
          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">K9SK8park Main Image</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            __ Providing the highest quality of care __
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
            <h3 className="font-bold text-lg mb-4">Hours of operation</h3>
            <p className="mb-2">Monday to Friday 6:30 am - 6:00 pm</p>
            <p className="mb-4">CLOSED Saturdays, Sundays & Stat holidays</p>
            <p className="text-sm text-gray-600">*Please check our Facebook page for Holiday hours *</p>
          </div>

          <Link 
            href="https://www.facebook.com/k9sk8park" 
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
          >
            Check us out on facebook
          </Link>

          <div className="text-2xl font-bold text-purple-600 mb-8">
            &ldquo; Our goal is to create a safe, fully supervised environment for your dog to be a dog! &rdquo;
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Some of our K9SK8 Park Family having fun!</h2>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-xs">Photo {item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mb-8">
            *All Picture Credit on this site goes to Paulina Szajek with Paulina Szajek Photography *
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive dog daycare and professional grooming services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">🐕</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Dog Daycare</h3>
              <p className="text-gray-600 mb-4">
                Indoor off-leash dog park featuring ramps, tunnels and slides for your dog to build confidence while having fun!
              </p>
              <Link 
                href="/services" 
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">✂️</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Parkway Grooming</h3>
              <p className="text-gray-600 mb-4">
                Professional grooming services with a gentle approach. We groom cats and dogs with the highest ethics and standards.
              </p>
              <Link 
                href="/grooming" 
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Give Your Dog the Ultimate Experience?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to schedule an assessment for daycare or book a grooming appointment. Your dog deserves the best care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="tel:778-265-2002" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call: 778-265-2002
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
