import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHeader 
        title="Transparent Pricing" 
        subtitle="Professional dog fitness services with clear, fair pricing. No hidden fees, no surprises."
      />

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Flexible options to fit your schedule and budget
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Single Session */}
            <div className="card bg-base-100 shadow-xl border-2 border-transparent">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🐕</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Single Session</h3>
                <div className="text-5xl font-bold text-blue-600 mb-4">$75</div>
                <p className="text-gray-600 mb-6">Perfect for trying our service or occasional exercise needs</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">30-minute slatmill session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Fitness assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Potty break included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Post-session report</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Mobile service at your location</span>
                  </div>
                </div>
                
                <Link href="/book" className="btn btn-primary btn-block">Book Single Session</Link>
              </div>
            </div>

            {/* Package Deal - Most Popular */}
            <div className="card bg-base-100 shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">4-Session Package</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$260</div>
                <div className="text-sm text-gray-500 mb-4">Save $40! ($65 per session)</div>
                <p className="text-gray-600 mb-6">Great for establishing a routine and seeing real results</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Four 30-45 minute sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Comprehensive fitness plan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Progress tracking & reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Nutrition consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">24/7 text support</span>
                  </div>
                </div>
                
                <Link href="/book" className="btn btn-primary btn-block">Choose Package</Link>
              </div>
            </div>

            {/* Monthly Membership */}
            <div className="card bg-base-100 shadow-xl border-2 border-transparent">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Monthly Unlimited</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$399</div>
                <div className="text-sm text-gray-500 mb-4">Up to 12 sessions per month</div>
                <p className="text-gray-600 mb-6">Maximum results for high-energy dogs or serious fitness goals</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Up to 12 sessions monthly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Priority booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Advanced fitness programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Monthly vet consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Custom meal planning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Emergency sessions available</span>
                  </div>
                </div>
                
                <Link href="/book" className="btn btn-primary btn-block">Start Membership</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-600">
              Enhance your dog&apos;s fitness experience with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "💦",
                title: "Hydrotherapy Session",
                price: "$45",
                desc: "20-minute water therapy add-on"
              },
              {
                icon: "🎾",
                title: "Interactive Play",
                price: "$25",
                desc: "15-minute mental stimulation games"
              },
              {
                icon: "📊",
                title: "Detailed Health Report",
                price: "$35",
                desc: "Comprehensive fitness analysis"
              },
              {
                icon: "🏠",
                title: "Extended Session",
                price: "$30",
                desc: "Additional 15 minutes of exercise"
              }
            ].map((addon, index) => (
              <div key={index} className="card bg-white shadow-lg">
                <div className="card-body text-center">
                  <div className="text-3xl mb-3">{addon.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{addon.title}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{addon.price}</div>
                  <p className="text-gray-600 text-sm">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and policies
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Are there any hidden fees or charges?",
                  answer: "No! Our pricing is completely transparent. The only additional costs would be optional add-on services that you specifically request."
                },
                {
                  question: "Do you charge extra for travel within your service area?",
                  answer: "No, mobile service is included in all our pricing. We come to you at no additional charge within our standard service area."
                },
                {
                  question: "What is your cancellation policy?",
                  answer: "We require 24-hour notice for cancellations. Same-day cancellations are subject to a 50% fee. Weather-related cancellations are always free."
                },
                {
                  question: "Can I pause my monthly membership?",
                  answer: "Yes! Monthly memberships can be paused for up to 2 months per year for vacations, illness, or other circumstances."
                },
                {
                  question: "Do you offer discounts for multiple dogs?",
                  answer: "Yes! We offer 15% off for the second dog and 25% off for three or more dogs from the same household when booked together."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, Venmo, and can set up automatic billing for packages and memberships."
                }
              ].map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-base-100 shadow-lg">
                  <input type="radio" name="pricing-accordion" defaultChecked={index === 0} />
                  <div className="collapse-title text-lg font-medium text-gray-800">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-6">100% Satisfaction Guarantee</h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re so confident in our service that if you&apos;re not completely satisfied with your first session, 
              we&apos;ll refund your money, no questions asked. Your dog&apos;s happiness is our priority.
            </p>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">What Our Guarantee Covers:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Service quality and professionalism</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Equipment safety and cleanliness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Staff expertise and care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Overall experience satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Choose the plan that works best for you and your dog. Start building a healthier, happier lifestyle today!"
        primaryButton={{ text: "Book Now", href: "/book" }}
        secondaryButton={{ text: "Ask Questions", href: "/contact" }}
      />

      <Footer />
    </div>
  );
} 