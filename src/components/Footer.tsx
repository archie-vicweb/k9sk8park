import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">K9SK8park</h3>
            <p className="mb-4">
              A fun place for your dog to play! We provide dog daycare and grooming services in Langford, BC.
            </p>
            <p className="text-sm text-gray-300">
              &ldquo;Our goal is to create a safe, fully supervised environment for your dog to be a dog!&rdquo;
            </p>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Location</h4>
            <div className="space-y-2 text-sm">
              <p>📍 1047 Langford Parkway, Unit 136</p>
              <p>    Langford, BC, Canada</p>
              <p>📞 778-265-2002</p>
              <p>📧 K9Sk8park@outlook.com</p>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Hours:</h5>
                <p>Monday - Friday: 6:30 AM - 6:00 PM</p>
                <p>Weekends & Holidays: CLOSED</p>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm mb-6">
              <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-purple-400 transition-colors">The Idea</Link>
              <Link href="/services" className="hover:text-purple-400 transition-colors">Daycare</Link>
              <Link href="/grooming" className="hover:text-purple-400 transition-colors">Grooming</Link>
              <Link href="/pricing" className="hover:text-purple-400 transition-colors">Prices</Link>
              <Link href="/photos" className="hover:text-purple-400 transition-colors">Photos</Link>
              <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/K9SK8Park" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/k9sk8park" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>Copyright © 2025 K9SK8park - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 