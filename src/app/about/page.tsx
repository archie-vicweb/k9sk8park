import Link from 'next/link';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHeader 
        title="About K9 SK8 Park" 
        subtitle="Pioneering mobile dog fitness with passion, expertise, and love for our four-legged friends"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                K9 SK8 Park was born from a simple observation: many dogs weren&apos;t getting the quality exercise they needed to thrive. 
                Weather constraints, busy schedules, and limited safe spaces were preventing our furry friends from reaching their 
                full potential for health and happiness.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Problem We Solved</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-red-500 text-xl">⚡</div>
                    <p className="text-gray-600">High-energy dogs destroying homes due to lack of adequate exercise</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-red-500 text-xl">🌧️</div>
                    <p className="text-gray-600">Weather preventing consistent outdoor exercise routines</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-red-500 text-xl">⏰</div>
                    <p className="text-gray-600">Busy pet parents unable to provide adequate daily exercise</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-red-500 text-xl">🏙️</div>
                    <p className="text-gray-600">Urban environments lacking safe, spacious exercise areas</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Our Solution</h3>
                <div className="text-center">
                  <div className="text-6xl mb-4">🚐✨</div>
                  <p className="text-gray-700 text-lg">
                    A fully equipped, climate-controlled mobile gym that brings professional dog fitness directly to your door, 
                    ensuring consistent, safe, and effective exercise regardless of weather or location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every dog deserves access to professional fitness services that enhance their physical health, 
              mental well-being, and overall quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize dog fitness by making professional exercise services accessible, convenient, and enjoyable 
                for dogs and their families.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
              <div className="text-gray-600 text-left">
                <ul className="space-y-2">
                  <li>• Safety first, always</li>
                  <li>• Compassionate care</li>
                  <li>• Professional excellence</li>
                  <li>• Innovation in pet wellness</li>
                  <li>• Transparent communication</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-6">
                🌟
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Promise</h3>
              <p className="text-gray-600">
                Every session is tailored to your dog&apos;s unique needs, delivered with expertise, and designed to create 
                positive, lasting impacts on their health and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your dog&apos;s health and happiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Certified Canine Fitness Trainer",
                bio: "With 8+ years in veterinary rehabilitation and canine fitness, Sarah pioneered the mobile dog gym concept.",
                credentials: "• Certified Canine Rehabilitation Practitioner\n• Animal Physical Therapy Certification\n• Dog Training Professional"
              },
              {
                name: "Mike Rodriguez",
                role: "Lead Fitness Specialist",
                bio: "Former veterinary technician turned canine fitness expert, specializing in high-energy breeds and behavioral training.",
                credentials: "• Veterinary Technician License\n• Canine Behavior Specialist\n• First Aid & CPR Certified"
              },
              {
                name: "Dr. Emma Chen",
                role: "Consulting Veterinarian",
                bio: "Board-certified veterinarian providing medical oversight and specialized programs for dogs with health conditions.",
                credentials: "• DVM, University of Pennsylvania\n• Sports Medicine Specialization\n• 12+ years clinical experience"
              }
            ].map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <div className="avatar placeholder mb-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full w-20 h-20">
                      <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 mb-2">Credentials:</h4>
                    <div className="text-xs text-gray-600">
                      {member.credentials.split('\n').map((cred, i) => (
                        <div key={i}>{cred}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Safety & Certifications</h2>
            <p className="text-xl text-gray-600">
              Your trust is earned through transparency, training, and rigorous safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🛡️",
                title: "Fully Insured",
                desc: "Comprehensive liability and equipment insurance"
              },
              {
                icon: "🏥",
                title: "Vet Approved",
                desc: "All programs designed with veterinary consultation"
              },
              {
                icon: "📋",
                title: "Background Checked",
                desc: "All team members undergo thorough background screening"
              },
              {
                icon: "🎓",
                title: "Certified Professionals",
                desc: "Ongoing education in canine fitness and safety"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Community Impact</h2>
            <p className="text-xl text-gray-600">
              Making a difference in our community, one dog at a time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Happy Dogs Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-700 font-medium">Rescue Dogs Helped (Pro Bono)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-700 font-medium">Emergency Consultation Available</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Partnerships</h3>
            <p className="text-gray-600 mb-6">
              We proudly partner with local animal shelters, rescue organizations, and veterinary clinics to support 
              dogs in need and advance canine wellness in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="badge badge-outline">Local Animal Shelters</span>
              <span className="badge badge-outline">Rescue Organizations</span>
              <span className="badge badge-outline">Veterinary Clinics</span>
              <span className="badge badge-outline">Dog Training Centers</span>
              <span className="badge badge-outline">Pet Supply Stores</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join the K9 SK8 Park Family"
        subtitle="Experience the difference that professional, caring, and convenient dog fitness can make. Your dog deserves the best!"
        primaryButton={{ text: "Book Your First Session", href: "/book" }}
        secondaryButton={{ text: "Get in Touch", href: "/contact" }}
      />

      <Footer />
    </div>
  );
} 