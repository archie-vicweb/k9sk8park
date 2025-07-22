interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
      </div>
    </section>
  );
} 