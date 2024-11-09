import React, { useEffect, useRef } from 'react';
import { FileCheck, Target, Brain } from 'lucide-react';

export default function About() {
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

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: FileCheck, label: 'Documents Processed', value: '1M+' },
    { icon: Target, label: 'Accuracy Rate', value: '99.9%' },
    { icon: Brain, label: 'AI Models', value: '50+' },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're pioneering the future of document processing with advanced AI technology and machine learning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map(({ icon: Icon, label, value }, index) => (
            <div 
              key={label} 
              className="scroll-animate opacity-0 p-6 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-4 animate-float" style={{ animationDelay: `${index * 0.1}s` }} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate opacity-0">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              alt="AI Technology"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="scroll-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Technology</h3>
            <p className="text-gray-600 mb-6">
              At AlsoKnown AI, we've developed cutting-edge document processing solutions that combine YOLO detection technology with advanced machine learning models. Our system can handle both digital and physical documents with unprecedented accuracy.
            </p>
            <p className="text-gray-600">
              Our AI models are trained on millions of documents, enabling them to understand complex layouts, extract specific information, and deliver results in any format you need. Whether you're dealing with invoices, contracts, or custom documents, our technology adapts to your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}