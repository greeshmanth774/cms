import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Hash, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('student');

  const handlePinChange = (e) => {
    // const value = e.target.value.replace(/\D/g, '');
     setPin(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!pin || !password) {
      setError('Please enter PIN and password');
      return;
    }

    setIsLoading(true);

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('pin', pin)
      .eq('role', userType)
      .single();

    if (error || !data) {
      setIsLoading(false);
      setError('Invalid PIN or role');
      return;
    }

    if (data.password !== password) {
      setIsLoading(false);
      setError('Incorrect password');
      return;
    }

    // ✅ Login success
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: data.id,
        pin: data.pin,
        role: data.role,
      })
    );

    setIsLoading(false);
    console.log('Login successful:', data);

    window.dispatchEvent(new Event("auth-change"));


    // navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <Award className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">EduManage</h1>
          <p className="text-blue-100 text-lg">Student & Faculty Login</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 animate-fade-in-up">

          {/* Role Selector */}
          <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-xl">
            {['student', 'faculty'].map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  userType === type
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700 animate-shake">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* PIN */}
            <div>
              <label className="text-sm font-semibold text-gray-700">PIN Number</label>
              <div className="relative mt-2">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={pin}
                  onChange={handlePinChange}
                  placeholder="Enter PIN"
                  className="w-full pl-12 py-3 border-2 rounded-xl focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:border-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 font-semibold">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl flex justify-center items-center gap-2"
            >
              {isLoading ? 'Signing in...' : <>Sign In <CheckCircle /></>}
            </button>

          </form>

          <div className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account? <span className="text-blue-600 font-semibold">Contact Admin</span>
          </div>
        </div>

        <p className="mt-6 text-center text-blue-100 text-sm">
          © 2026 EduManage. All rights reserved.
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-20px) scale(1.1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-down { animation: fade-in-down .6s; }
        .animate-fade-in-up { animation: fade-in-up .6s ease-out .2s both; }
        .animate-shake { animation: shake .3s; }
      `}</style>
    </div>
  );
}
