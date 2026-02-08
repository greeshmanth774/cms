import React, { useState, useEffect } from 'react';
import { Menu, X, Users, BookOpen, Calendar, Award, ChevronRight, Bell, Settings, BarChart } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Comprehensive student profiles, attendance tracking, and performance monitoring all in one place.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Course Administration',
      description: 'Manage curriculum, schedules, and academic resources with powerful administrative tools.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated timetable generation, exam scheduling, and event management system.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Real-time insights, performance analytics, and customizable reporting dashboard.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students' },
    { number: '500+', label: 'Faculty' },
    { number: '50+', label: 'Departments' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                🎓 Trusted by 100+ Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> College Management</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline administration, enhance student experience, and drive academic excellence with our comprehensive college management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold flex items-center justify-center group">
                  Start Free Trial
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Animated Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Admin Dashboard</p>
                      <p className="text-sm text-gray-500">Welcome back, Sarah</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <Settings className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                      <p className="text-2xl font-bold text-blue-600">{stat.number}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-5/6"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your institution efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === idx 
                      ? 'border-blue-500 shadow-xl scale-105 bg-gradient-to-br from-blue-50 to-indigo-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of institutions already using EduManage
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduManage</span>
          </div>
          <p className="text-gray-400 mb-4">© 2026 EduManage. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}