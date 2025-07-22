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
        title="Daycare Pricing" 
        subtitle="Transparent and affordable pricing for your dog's daycare needs. Quality care with no hidden fees."
      />

      {/* Hourly Rates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hourly Rates</h2>
            <p className="text-xl text-gray-600">
              Flexible pricing based on the time your dog spends with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hourly Rate */}
            <div className="card bg-base-100 shadow-xl border-2 border-transparent">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">First 3 Hours</h3>
                <div className="text-5xl font-bold text-blue-600 mb-4">$6.50</div>
                <p className="text-sm text-gray-500 mb-4">per hour</p>
                <p className="text-gray-600 mb-6">Perfect for short visits and socialization</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Supervised play time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Socialization with other dogs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Potty breaks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Fresh water available</span>
                  </div>
                </div>
                
                <Link href="/contact" className="btn btn-primary btn-block">Book Hourly Care</Link>
              </div>
            </div>

            {/* Half Day Rate */}
            <div className="card bg-base-100 shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🌅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Half Day</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$26</div>
                <div className="text-sm text-gray-500 mb-4">Hours 4-5</div>
                <p className="text-gray-600 mb-6">Great for working parents and extended socialization</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">4-5 hours of care</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Multiple play sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Rest periods included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Lunch/snack time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Individual attention</span>
                  </div>
                </div>
                
                <Link href="/contact" className="btn btn-primary btn-block">Choose Half Day</Link>
              </div>
            </div>

            {/* Full Day Rate */}
            <div className="card bg-base-100 shadow-xl border-2 border-transparent">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Day</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$36</div>
                <div className="text-sm text-gray-500 mb-4">Over 5 hours</div>
                <p className="text-gray-600 mb-6">Complete day care for busy schedules and maximum socialization</p>
                
                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Full day supervision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Structured activities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Meal service available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Nap time & quiet periods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-500">✓</div>
                    <span className="text-gray-700">Daily report card</span>
                  </div>
                </div>
                
                <Link href="/contact" className="btn btn-primary btn-block">Book Full Day</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Punch Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Punch Cards</h2>
            <p className="text-xl text-gray-600">
              Save money with our prepaid punch card options
            </p>
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-6 max-w-2xl mx-auto rounded">
              <p className="font-bold">Important: All punch cards are NON-REFUNDABLE and must be paid in advance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Drop-in Punch Card */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🎫</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Drop-In Card</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$53</div>
                <div className="text-lg text-gray-600 mb-4">10 one-hour visits</div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-yellow-800">Can be used up to 3 times in one day</p>
                </div>
                
                <div className="space-y-2 text-left mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Per visit cost:</span>
                    <span className="font-bold">$5.30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">You save:</span>
                    <span className="font-bold text-green-600">$12</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-4">Pre-paid & non-refundable</p>
                <Link href="/contact" className="btn btn-primary btn-block">Buy Drop-In Card</Link>
              </div>
            </div>

            {/* Half Day Punch Card */}
            <div className="card bg-white shadow-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold">BEST VALUE</span>
              </div>
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Half Day Card</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$232</div>
                <div className="text-lg text-gray-600 mb-4">10 half-day visits</div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-green-800">Most cost-effective for regular care</p>
                </div>
                
                <div className="space-y-2 text-left mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Per visit cost:</span>
                    <span className="font-bold">$23.20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">You save:</span>
                    <span className="font-bold text-green-600">$28</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-4">Pre-paid & non-refundable</p>
                <Link href="/contact" className="btn btn-primary btn-block">Buy Half Day Card</Link>
              </div>
            </div>

            {/* Full Day Punch Card */}
            <div className="card bg-white shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Day Card</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$325</div>
                <div className="text-lg text-gray-600 mb-4">10 full-day visits</div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-blue-800">Perfect for working professionals</p>
                </div>
                
                <div className="space-y-2 text-left mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Per visit cost:</span>
                    <span className="font-bold">$32.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">You save:</span>
                    <span className="font-bold text-green-600">$35</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-4">Pre-paid & non-refundable</p>
                <Link href="/contact" className="btn btn-primary btn-block">Buy Full Day Card</Link>
              </div>
            </div>
          </div>

          {/* Multi-dog discount note */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Multiple Dog Discount</h3>
              <p className="text-blue-700">
                <em>For customers with 2 or more dogs, the punch card still provides the most cost-effective option.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600">
              Common questions about our daycare pricing and policies
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Are punch cards really non-refundable?",
                  answer: "Yes, all punch cards are non-refundable and must be paid in advance. This policy helps us maintain our low pricing and ensure commitment to regular daycare attendance."
                },
                {
                  question: "Can I use multiple punch card visits in one day?",
                  answer: "The drop-in punch card can be used up to 3 times in one day. Half-day and full-day punch cards are designed for single-day use."
                },
                {
                  question: "Do you offer discounts for multiple dogs?",
                  answer: "For customers with 2 or more dogs, the punch card options still provide the most cost-effective solution compared to daily rates."
                },
                {
                  question: "What happens if my dog stays longer than expected?",
                  answer: "If you're running late, we understand! Extended stays will be charged at our hourly rate. We always prioritize your dog's safety and comfort."
                },
                {
                  question: "Do punch cards expire?",
                  answer: "Punch cards do not have an expiration date, but they are non-refundable and non-transferable. Use them at your own pace."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, all major credit cards, and electronic payments. Punch cards must be paid in full at the time of purchase."
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

      {/* Care Commitment */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">💖</div>
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Your Dog</h2>
            <p className="text-xl mb-8 opacity-90">
              At K9 Sk8 Park, we believe every dog deserves exceptional care, love, and attention. 
              Our transparent pricing reflects our commitment to providing quality daycare services 
              that you can trust and afford.
            </p>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">What Your Payment Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Professional supervision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Safe, clean environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Socialization opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-yellow-300">✓</div>
                  <span>Individual attention and care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Daycare?"
        subtitle="Give your dog the socialization and care they deserve. Contact us to learn more about our daycare services!"
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Learn More", href: "/daycare" }}
      />

      <Footer />
    </div>
  );
} 