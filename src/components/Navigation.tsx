import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar bg-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">
          🐕 K9 SK8 Park
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/services" className="font-medium">Services</Link></li>
          <li><Link href="/about" className="font-medium">About</Link></li>
          <li><Link href="/pricing" className="font-medium">Pricing</Link></li>
          <li><Link href="/contact" className="font-medium">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/book" className="btn btn-primary text-white">Book Session</Link>
      </div>
    </nav>
  );
} 