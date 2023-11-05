import React from 'react';
import './App.css'; // assuming you will have CSS

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <MobileAppPanel />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="logo">CodeCanvas</div>
      <nav>
        <a href="#courses">Courses</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <button>Sign In</button>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Coding and Design with CodeCanvas</h1>
      <p>Learn coding and design with CodeCanvas, your ultimate destination for mastering the art of creating stunning designs and building powerful applications.</p>
      <button>Get Started</button>
      <button>Start a Free Trial</button>
    </div>
  );
}

function MobileAppPanel() {
  return (
    <div className="mobile-app-panel">
      {/* This would typically contain further sub-components or images representing the mobile app. */}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div>Trusted By Industry Leaders</div>
      {/* Display logos or icons of brands */}
    </div>
  );
}

export default App;

