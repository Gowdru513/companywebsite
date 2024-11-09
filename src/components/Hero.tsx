import React from 'react';
import { ArrowRight, FileSearch, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left scroll-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Intelligent
              <br />
              <span className="text-gradient">Document Processing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your document processing with our advanced AI technology. From hard copies to digital formats, we extract meaningful insights using state-of-the-art YOLO detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary glow">
                Try Our Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn btn-secondary">
                View Documentation
                <FileSearch className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative animate-float-rotate hidden lg:block">
            <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-3xl transform -rotate-6" />
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
              alt="AI Document Processing"
              className="relative rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 bg-gray-800 p-4 rounded-lg shadow-lg animate-float glow">
              <Brain className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <FileSearch className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}