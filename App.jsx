import React from 'react';

const KabeerGrowthLab = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav style={{ background: '#1e1b4b', padding: '20px', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>Kabeer Growth Lab</h2>
      </nav>

      {/* Hero Section */}
      <header style={{ 
        background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: '#fff' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to Kabeer Growth Lab</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Driving digital success with modern strategies.</p>
        <button style={{ 
          background: '#f97316', 
          border: 'none', 
          padding: '15px 30px', 
          color: '#fff', 
          borderRadius: '5px', 
          fontSize: '1rem',
          cursor: 'pointer' 
        }}>
          Explore Services
        </button>
      </header>

      {/* Content Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2>Our Mission</h2>
        <p>We provide high-impact digital solutions to help your business scale and grow effectively.</p>
      </section>
    </div>
  );
};

export default KabeerGrowthLab;
