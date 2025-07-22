import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Mobile Dog Fitness
              <span className="block text-yellow-300">At Your Doorstep</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Professional dog exercise using state-of-the-art equipment in our climate-controlled mobile gym. 
              Give your furry friend the workout they deserve, wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn btn-primary btn-lg text-white px-8">
                Book a Session
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-blue-600 px-8">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose K9 SK8 Park?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring professional dog fitness directly to you with our innovative mobile gym solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🚐</div>
                <h3 className="card-title justify-center text-2xl mb-4">Mobile Convenience</h3>
                <p className="text-gray-600">
                  Our fully equipped mobile gym comes to your location. No more stressful car rides or unfamiliar environments.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🌡️</div>
                <h3 className="card-title justify-center text-2xl mb-4">Climate Controlled</h3>
                <p className="text-gray-600">
                  Weather-proof workouts in our temperature-controlled environment, perfect for year-round fitness.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🏃</div>
                <h3 className="card-title justify-center text-2xl mb-4">Professional Equipment</h3>
                <p className="text-gray-600">
                  State-of-the-art slatmills and fitness equipment designed specifically for canine exercise and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits for Your Dog</h2>
            <p className="text-xl text-gray-600">
                             Professional exercise sessions tailored to your dog&apos;s needs and fitness level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💪", title: "Builds Muscle & Strength", desc: "Targeted exercise for optimal physical development" },
                             { icon: "❤️", title: "Heart & Joint Health", desc: "Low-impact cardio that&apos;s easy on joints" },
              { icon: "🧘", title: "Reduces Anxiety", desc: "Physical exercise helps calm nervous energy" },
              { icon: "⚖️", title: "Weight Management", desc: "Effective calorie burning for healthy weight" },
              { icon: "🧠", title: "Mental Stimulation", desc: "Engaging activities that challenge the mind" },
              { icon: "😊", title: "Confidence Building", desc: "Success-based training builds self-assurance" }
            ].map((benefit, index) => (
              <div key={index} className="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-center">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600">
              Our mobile dog fitness service is ideal for various situations and dog owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Busy pet parents with demanding schedules",
              "Dogs with high energy that need extra exercise",
              "Apartment dwellers with limited exercise space",
              "Dogs recovering from injury (with vet approval)",
              "Anxious dogs who prefer familiar environments",
              "Dogs with behavioral issues from lack of exercise",
              "Senior dogs needing gentle, controlled exercise",
              "Dogs preparing for competitions or events"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Give Your Dog the Best Workout?"
        subtitle="Book your first session today and see the difference professional dog fitness can make. Your dog will thank you!"
        primaryButton={{ text: "Book Now", href: "/book" }}
        secondaryButton={{ text: "Get Quote", href: "/contact" }}
      />

      <Footer />
    </div>
  );
}
