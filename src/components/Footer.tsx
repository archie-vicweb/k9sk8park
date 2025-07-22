import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white">
      <div>
        <div className="text-2xl font-bold mb-4">🐕 K9 SK8 Park</div>
        <p className="max-w-md">
          Professional mobile dog fitness services bringing health and happiness to dogs everywhere.
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="/services" className="link link-hover">Services</Link>
          <Link href="/about" className="link link-hover">About</Link>
          <Link href="/pricing" className="link link-hover">Pricing</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2025 K9 SK8 Park - All rights reserved</p>
      </div>
    </footer>
  );
} 