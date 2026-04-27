import React from 'react';

const Icon = () => {
  return (
    <div className="admin-icon" style={{ width: '32px', height: '32px' }}>
      <img 
        src="/admin/logo.png" 
        alt="P" 
        style={{ width: '100%', height: '100%', borderRadius: '6px', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default Icon;
