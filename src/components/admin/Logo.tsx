import React from 'react';

const Logo = () => {
  return (
    <div className="admin-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src="/admin/logo.png" 
        alt="Paul Akinola" 
        style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} 
      />
      <span style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '1.2rem', 
        fontWeight: 600, 
        letterSpacing: '0.05em',
        color: 'var(--theme-elevation-800)'
      }}>
        PAUL AKINOLA
      </span>
    </div>
  );
};

export default Logo;
