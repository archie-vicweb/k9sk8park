import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTASection({ title, subtitle, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={primaryButton.href} 
            className="btn btn-primary btn-lg bg-white text-blue-600 hover:bg-gray-100 px-8"
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link 
              href={secondaryButton.href} 
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
} 