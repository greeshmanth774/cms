import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* Fixed Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">CMS</span>
          </div>
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <button className="login-btn" onClick={() => window.location.href = '#login'}>Login</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Empowering Education</span>
            <span className="title-main">Management</span>
            <span className="title-accent">Made Simple</span>
          </h1>
          <p className="hero-subtitle">
            Streamline your institution's operations with our comprehensive 
            College Management System. Manage students, faculty, courses, and 
            administrative tasks all in one place.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => window.location.href = '#login'}>Get Started</button>
            <button className="cta-secondary" onClick={() => window.location.href = '#about'}>Learn More</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="section-header">
            <span className="section-label">About CMS</span>
            <h2 className="section-title">Complete College Management Solution</h2>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">👨‍🎓</div>
              <h3>Student Management</h3>
              <p>Efficiently manage student records, attendance, grades, and academic progress with our intuitive dashboard.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">👨‍🏫</div>
              <h3>Faculty Portal</h3>
              <p>Empower teachers with tools to track classes, upload materials, grade assignments, and communicate with students.</p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3>Course Administration</h3>
              <p>Seamlessly organize courses, schedules, departments, and academic calendars in one centralized system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="login-section">
        <div className="login-container">
          <div className="login-box">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Login to access your CMS dashboard</p>
            
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password">Forgot password?</a>
              </div>
              
              <button type="submit" className="submit-btn">Login to Dashboard</button>
              
              <div className="login-footer">
                <p>Don't have an account? <a href="#register">Register here</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .homepage {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #0a0a0a;
          overflow-x: hidden;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 3rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #667eea;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .login-btn {
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -10%;
          right: -10%;
          animation-delay: -7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .title-line {
          font-size: 1.5rem;
          font-weight: 500;
          color: #555;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .title-main {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .title-accent {
          font-size: 3.5rem;
          font-weight: 300;
          color: #333;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #666;
          margin-top: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.8s backwards;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 3rem;
          animation: fadeInUp 1s ease-out 1s backwards;
        }

        .cta-primary,
        .cta-secondary {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
        }

        .cta-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
          border: 2px solid #667eea;
        }

        .cta-secondary:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: fadeInUp 1s ease-out 1.2s backwards;
        }

        .scroll-text {
          font-size: 0.85rem;
          color: #666;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border-right: 2px solid #667eea;
          border-bottom: 2px solid #667eea;
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: rotate(45deg) translateY(0);
          }
          40% {
            transform: rotate(45deg) translateY(10px);
          }
          60% {
            transform: rotate(45deg) translateY(5px);
          }
        }

        /* About Section */
        .about {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: white;
          display: flex;
          align-items: center;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-label {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #667eea;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #0a0a0a;
          line-height: 1.2;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .about-card {
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .about-card h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #0a0a0a;
        }

        .about-card p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #555;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .title-main {
            font-size: 3.5rem;
          }

          .title-accent {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-cta {
            flex-direction: column;
            gap: 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Login Section */
        .login-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 2rem;
        }

        .login-container {
          width: 100%;
          max-width: 480px;
        }

        .login-box {
          background: white;
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .login-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0a0a0a;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .login-subtitle {
          font-size: 1rem;
          color: #666;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #333;
        }

        .form-group input {
          padding: 1rem;
          font-size: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #666;
        }

        .remember-me input {
          cursor: pointer;
        }

        .forgot-password {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .forgot-password:hover {
          color: #764ba2;
        }

        .submit-btn {
          padding: 1.1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .login-footer {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e0e0e0;
        }

        .login-footer p {
          color: #666;
          font-size: 0.95rem;
        }

        .login-footer a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .login-footer a:hover {
          color: #764ba2;
        }
      `}</style>
    </div>
  );
}
