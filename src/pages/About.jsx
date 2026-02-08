import React, { useState, useEffect } from 'react';
import { 
  Award, Users, Target, MessageSquare, Bell, BookOpen, FileText,
  Star, CheckCircle, Calendar, ClipboardList, Send, UserCheck,
  Zap, Shield, Heart, Lightbulb, ArrowRight, Quote, Video,
  BarChart, Settings, Layout, MessagesSquare, StickyNote, Megaphone
} from 'lucide-react';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate core values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const keyFeatures = [
    {
      icon: MessageSquare,
      title: 'Feedback System',
      description: 'Students and faculty can share feedback, suggestions, and concerns directly with administration in a structured and organized manner.',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Anonymous feedback option', 'Category-based organization', 'Real-time notifications']
    },
    {
      icon: StickyNote,
      title: 'Notes Management',
      description: 'Create, organize, and share study notes, lecture materials, and important documents across departments and courses.',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Subject-wise organization', 'File attachment support', 'Search and filter options']
    },
    {
      icon: Send,
      title: 'Message Sharing',
      description: 'Instant messaging platform for students, faculty, and staff to communicate efficiently and stay connected.',
      color: 'from-purple-500 to-pink-500',
      benefits: ['One-on-one messaging', 'Group conversations', 'File sharing capability']
    },
    {
      icon: MessagesSquare,
      title: 'Faculty Chat',
      description: 'Dedicated communication channel for faculty members to collaborate, discuss academic matters, and coordinate activities.',
      color: 'from-orange-500 to-red-500',
      benefits: ['Department-wise groups', 'Meeting scheduling', 'Resource sharing']
    },
    {
      icon: Megaphone,
      title: 'Announcements',
      description: 'Broadcast important updates, events, and notices to students, faculty, or specific groups instantly and effectively.',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Priority levels', 'Targeted distribution', 'Read receipts']
    },
    {
      icon: Calendar,
      title: 'Schedule Management',
      description: 'Centralized academic calendar, timetables, exam schedules, and event planning for the entire college.',
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Automated timetables', 'Conflict detection', 'Calendar sync']
    }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Simplicity',
      description: 'We believe in making college management intuitive and easy to use for everyone - from students to administrators.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data is protected with industry-standard security measures. Privacy and data protection are our top priorities.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Every feature is designed keeping students at the center, ensuring better learning experiences and engagement.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Streamline administrative tasks, reduce paperwork, and save valuable time for what matters most - education.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const systemModules = [
    {
      icon: Users,
      title: 'Student Portal',
      description: 'Access grades, attendance, notes, and communicate with faculty',
      features: ['View academic records', 'Submit assignments', 'Check announcements', 'Join discussions']
    },
    {
      icon: UserCheck,
      title: 'Faculty Portal',
      description: 'Manage courses, share materials, track student progress',
      features: ['Upload study materials', 'Grade submissions', 'Post announcements', 'Chat with colleagues']
    },
    {
      icon: Layout,
      title: 'Admin Dashboard',
      description: 'Comprehensive control panel for college administration',
      features: ['Manage users', 'System analytics', 'Broadcast messages', 'Generate reports']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Data-driven insights for better decision making',
      features: ['Attendance reports', 'Performance analytics', 'Feedback analysis', 'Usage statistics']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Centralized Communication',
      description: 'All college communications in one platform - no more scattered emails and messages'
    },
    {
      icon: Bell,
      title: 'Real-time Notifications',
      description: 'Stay updated with instant alerts for announcements, messages, and important events'
    },
    {
      icon: FileText,
      title: 'Digital Documentation',
      description: 'Go paperless with digital notes, assignments, and administrative documents'
    },
    {
      icon: ClipboardList,
      title: 'Organized Feedback',
      description: 'Collect and manage student and faculty feedback systematically'
    },
    {
      icon: Settings,
      title: 'Easy Administration',
      description: 'Simplified management tools for staff, courses, and resources'
    },
    {
      icon: Video,
      title: 'Enhanced Collaboration',
      description: 'Foster better collaboration between students, faculty, and administration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            📚 About Our System
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Your Complete
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> College Management Solution</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            A comprehensive platform designed to streamline college operations, enhance communication, 
            and create a connected campus community. Everything your college needs in one place.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-400">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">Instant</div>
              <div className="text-sm text-gray-600">Communication</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Bell className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">Real-time</div>
              <div className="text-sm text-gray-600">Notifications</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">Secure</div>
              <div className="text-sm text-gray-600">Platform</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">Fast</div>
              <div className="text-sm text-gray-600">Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is College Management System?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our College Management System (CMS) is an all-in-one digital platform designed to 
                streamline and automate various administrative and academic processes within your college.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From student enrollment to faculty collaboration, from sharing study notes to broadcasting 
                announcements, our system handles it all seamlessly. It's built to foster better communication, 
                enhance productivity, and create a more organized educational environment.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Easy to Use
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  Cloud-Based
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Mobile Friendly
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  24/7 Access
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md transform hover:scale-105 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Quick Messaging</p>
                        <p className="text-sm text-gray-600">Connect instantly</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md transform hover:scale-105 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <StickyNote className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Study Notes</p>
                        <p className="text-sm text-gray-600">Share & organize</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md transform hover:scale-105 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Announcements</p>
                        <p className="text-sm text-gray-600">Stay updated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your college efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                    activeFeature === idx 
                      ? 'border-blue-500 shadow-2xl scale-105' 
                      : 'border-transparent hover:shadow-xl hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Modules */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Modules</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated portals for different user roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                  <ul className="space-y-1.5">
                    {module.features.map((feat, fidx) => (
                      <li key={fidx} className="text-xs text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our System?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefits that make a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-white rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                    activeValue === idx 
                      ? 'scale-105 shadow-2xl ring-2 ring-blue-500' 
                      : 'hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setActiveValue(idx)}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl">
            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
            <blockquote className="text-2xl text-white font-medium mb-6 leading-relaxed">
              "This system has transformed how we manage our college. Communication is seamless, 
              and students are more engaged than ever. Highly recommended!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl">
                👨‍🏫
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">Dr. Rajesh Kumar</p>
                <p className="text-blue-200">Principal, City College</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Modernize Your College?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating a more connected and efficient campus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all font-semibold flex items-center justify-center group">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EduManage CMS</span>
              </div>
              <p className="text-gray-400 text-sm">Your complete college management solution</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Messaging</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Announcements</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Notes Sharing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2026 EduManage CMS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}