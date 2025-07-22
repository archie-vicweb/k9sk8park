import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Professional mobile dog fitness solutions tailored to your pet's unique needs"
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Mobile Slatmill Sessions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship service features state-of-the-art self-propelled slatmills in our climate-controlled mobile unit. 
                These sessions provide controlled, safe exercise that&apos;s perfect for dogs of all sizes and fitness levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold">Personalized Pace</h3>
                    <p className="text-gray-600">From gentle walks to energetic sprints - we match your dog&apos;s ability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold">Weather Independent</h3>
                    <p className="text-gray-600">Rain or shine, hot or cold - consistent exercise year-round</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h3 className="font-semibold">Professional Supervision</h3>
                    <p className="text-gray-600">Trained staff ensures safety and proper technique throughout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏃‍♂️</div>
              <h3 className="text-2xl font-bold mb-4">Session Duration</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">15-45 min</p>
              <p className="text-gray-600">Customized to your dog&apos;s fitness level</p>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🎾</div>
                <h3 className="card-title justify-center text-xl mb-4">Interactive Play Sessions</h3>
                <p className="text-gray-600 mb-6">
                  Engaging games and activities that combine physical exercise with mental stimulation.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Puzzle toys and treat dispensers</li>
                  <li>• Agility obstacles</li>
                  <li>• Socialization activities</li>
                  <li>• Confidence building exercises</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">💦</div>
                <h3 className="card-title justify-center text-xl mb-4">Hydrotherapy Add-On</h3>
                <p className="text-gray-600 mb-6">
                  Low-impact water exercise for rehabilitation, senior dogs, or joint-friendly workouts.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Heated water therapy</li>
                  <li>• Joint rehabilitation</li>
                  <li>• Post-surgery recovery</li>
                  <li>• Arthritis management</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="card-title justify-center text-xl mb-4">Fitness Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive evaluation of your dog&apos;s current fitness level and customized improvement plan.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li>• Body condition scoring</li>
                  <li>• Endurance testing</li>
                  <li>• Gait analysis</li>
                  <li>• Custom exercise plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Equipment</h2>
            <p className="text-xl text-gray-600">
              We use only the highest quality, veterinarian-approved fitness equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🏃", 
                title: "Slatmill Treadmills", 
                desc: "Self-propelled, curved treadmills designed specifically for dogs" 
              },
              { 
                icon: "🌡️", 
                title: "Climate Control", 
                desc: "Heating and cooling systems maintain optimal temperature year-round" 
              },
              { 
                icon: "📹", 
                title: "Safety Monitoring", 
                desc: "Multiple camera angles and safety sensors for maximum protection" 
              },
              { 
                icon: "🧘", 
                title: "Calming Environment", 
                desc: "Soft lighting, aromatherapy, and calming music reduce stress" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple, stress-free process from booking to workout completion
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Book Online", 
                  desc: "Schedule your preferred time slot through our easy booking system" 
                },
                { 
                  step: "2", 
                  title: "We Come to You", 
                  desc: "Our mobile gym arrives at your location at the scheduled time" 
                },
                { 
                  step: "3", 
                  title: "Assessment", 
                  desc: "Quick fitness evaluation to customize the session for your dog" 
                },
                { 
                  step: "4", 
                  title: "Workout Time", 
                  desc: "Supervised exercise session tailored to your dog&apos;s needs" 
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Give your dog the professional fitness experience they deserve. Book your first session today!"
        primaryButton={{ text: "Book Session", href: "/book" }}
        secondaryButton={{ text: "View Pricing", href: "/pricing" }}
      />

      <Footer />
    </div>
  );
} 