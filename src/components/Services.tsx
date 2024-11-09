import React, { useEffect, useRef } from 'react';
import { FileText, ScanSearch, Database, Binary } from 'lucide-react';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Advanced AI-powered document processing for any format, including PDFs, scans, and images.',
    },
    {
      icon: ScanSearch,
      title: 'YOLO Detection',
      description: 'State-of-the-art object detection for processing hard copies and extracting key information.',
    },
    {
      icon: Database,
      title: 'Data Extraction',
      description: 'Intelligent data extraction and structuring in your preferred format with high accuracy.',
    },
    {
      icon: Binary,
      title: 'Custom AI Models',
      description: 'Tailored AI solutions for specific document types and industry requirements.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered document processing solutions handle everything from hard copies to digital formats with unprecedented accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="service-card bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 animated-border">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}