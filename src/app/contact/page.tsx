import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHeader 
        title="Get In Touch" 
        subtitle="Ready to give your dog the fitness experience they deserve? We'd love to hear from you!"
      />

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="card bg-base-100 shadow-xl text-center">
              <div className="card-body">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team for immediate assistance
                </p>
                <a href="tel:+15551234567" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                  (555) 123-DOGS
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Available during business hours
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="card bg-base-100 shadow-xl text-center">
              <div className="card-body">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us a message and we&apos;ll get back to you within 2 hours
                </p>
                <a href="mailto:hello@k9sk8park.com" className="text-xl font-bold text-blue-600 hover:text-blue-800">
                  hello@k9sk8park.com
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  We respond quickly!
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="card bg-base-100 shadow-xl text-center">
              <div className="card-body">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Text Us</h3>
                <p className="text-gray-600 mb-4">
                  Quick questions? Send us a text message anytime
                </p>
                <a href="sms:+15551234567" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                  (555) 123-DOGS
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  24/7 text support available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card bg-white shadow-xl">
                              <div className="card-body">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  <form>
                    <fieldset className="fieldset space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="w-full">
                      <span className="label font-medium text-gray-700 block pb-2">First Name *</span>
                      <input type="text" placeholder="John" className="input input-bordered w-full" required />
                    </div>
                    <div className="w-full">
                      <span className="label font-medium text-gray-700 block pb-2">Last Name *</span>
                      <input type="text" placeholder="Doe" className="input input-bordered w-full" required />
                    </div>
                  </div>

                  <div className="w-full">
                    <span className="label font-medium text-gray-700 block pb-2">Email Address *</span>
                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full" required />
                  </div>

                  <div className="w-full">
                    <span className="label font-medium text-gray-700 block pb-2">Phone Number</span>
                    <input type="tel" placeholder="(555) 123-4567" className="input input-bordered w-full" />
                  </div>

                  <div className="w-full">
                    <span className="label font-medium text-gray-700 block pb-2">Dog&apos;s Name</span>
                    <input type="text" placeholder="Buddy" className="input input-bordered w-full" />
                  </div>

                  <div className="w-full">
                    <span className="label font-medium text-gray-700 block pb-2">Service Interest</span>
                    <select className="select select-bordered w-full">
                      <option disabled selected>Choose a service...</option>
                      <option>Single Session</option>
                      <option>4-Session Package</option>
                      <option>Monthly Membership</option>
                      <option>Hydrotherapy Add-On</option>
                      <option>General Questions</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <span className="label font-medium text-gray-700 block pb-2">Message *</span>
                    <textarea 
                      className="textarea textarea-bordered h-32 w-full" 
                      placeholder="Tell us about your dog and what you'd like to know..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3 py-4">
                    <input type="checkbox" className="checkbox checkbox-primary mt-1" />
                    <span className="text-sm">
                      I&apos;d like to receive updates about K9 SK8 Park services and promotions
                    </span>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    Send Message
                  </button>
                </fieldset>
              </form>
              </div>
            </div>

            {/* Business Hours & Info */}
            <div className="space-y-8">
              {/* Hours */}
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
                      { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
                      { day: "Sunday", hours: "9:00 AM - 5:00 PM" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-blue-600 font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="alert alert-info mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm">Emergency sessions available 24/7 for existing clients</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve the greater metropolitan area and surrounding communities within a 25-mile radius.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Downtown & Urban Core",
                      "Suburban Communities",
                      "Surrounding Counties",
                      "Special Events (Additional Fee)"
                    ].map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="text-green-500">✓</div>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/contact" className="link link-primary">
                      Not sure if we serve your area? Ask us!
                    </Link>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card bg-red-50 border-2 border-red-200">
                <div className="card-body">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Contact</h3>
                  <p className="text-red-700 text-sm mb-4">
                    For existing clients with urgent fitness needs or health concerns during sessions:
                  </p>
                  <a href="tel:+15551234911" className="text-xl font-bold text-red-600 hover:text-red-800">
                    (555) 123-4911
                  </a>
                  <p className="text-xs text-red-600 mt-2">
                    Emergency line - existing clients only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our service
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "How quickly can I book a session?",
                  answer: "We typically have availability within 24-48 hours. Same-day bookings are sometimes possible, especially for existing clients. Peak times (weekends and evenings) may require more advance notice."
                },
                {
                  question: "What should I have ready for the mobile visit?",
                  answer: "Just a flat, accessible area for our mobile unit (like a driveway or street parking) and your dog! We bring all equipment, cleaning supplies, and even water. Your dog should be up-to-date on vaccinations."
                },
                {
                  question: "Do you work with aggressive or fearful dogs?",
                  answer: "Yes! We have extensive experience with dogs of all temperaments. We use positive reinforcement techniques and take extra time to help nervous dogs feel comfortable. We may recommend a consultation first for dogs with serious behavioral issues."
                },
                {
                  question: "What if the weather is bad?",
                  answer: "Our mobile units are fully weather-proof! Rain, snow, or extreme temperatures won&apos;t affect your dog&apos;s workout. That&apos;s the beauty of our climate-controlled mobile gym."
                },
                {
                  question: "Can I watch my dog&apos;s session?",
                  answer: "Absolutely! Many owners enjoy watching their dogs exercise. We also provide live updates via text and can send photos/videos during the session if requested."
                }
              ].map((faq, index) => (
                <div key={index} className="collapse collapse-plus bg-base-100 shadow-lg">
                  <input type="radio" name="contact-accordion" defaultChecked={index === 0} />
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

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Follow Our Pack</h2>
            <p className="text-xl text-gray-600">
              See happy dogs, success stories, and fitness tips on our social media
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { name: "Instagram", icon: "📷", handle: "@k9sk8park" },
              { name: "Facebook", icon: "👥", handle: "K9 SK8 Park" },
              { name: "TikTok", icon: "🎵", handle: "@k9sk8park" }
            ].map((social, index) => (
              <a key={index} href="#" className="text-center hover:scale-105 transition-transform">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-2 shadow-lg hover:shadow-xl">
                  {social.icon}
                </div>
                <div className="font-medium text-gray-800">{social.name}</div>
                <div className="text-sm text-gray-600">{social.handle}</div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Share your dog&apos;s fitness journey with #K9SK8Park for a chance to be featured!
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Session?"
        subtitle="Don't wait - give your dog the professional fitness experience they deserve. Book now or get a custom quote!"
        primaryButton={{ text: "Book Session Now", href: "/book" }}
        secondaryButton={{ text: "See Pricing", href: "/pricing" }}
      />

      <Footer />
    </div>
  );
} 