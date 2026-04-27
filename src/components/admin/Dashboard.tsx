import React from 'react';
import { Gutter } from '@payloadcms/ui';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Gutter>
        <div style={{ padding: '40px 0' }}>
          <header style={{ marginBottom: '48px' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '12px' }}>
              Welcome Back, Paul.
            </h1>
            <p style={{ color: 'var(--theme-elevation-500)', fontSize: '1.1rem', fontWeight: 300 }}>
              Your system stories and insights are the foundation of this platform. This is your command center.
            </p>
          </header>

          <div className="dashboard-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {/* Quick Links Card */}
            <div className="dashboard-card" style={{ 
              background: 'var(--theme-elevation-50)', 
              padding: '32px', 
              borderRadius: '16px',
              border: '1px border var(--theme-elevation-150)'
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px' }}>Content Control</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="/admin/collections/articles" style={{ color: 'var(--theme-primary-500)', textDecoration: 'none', fontWeight: 500 }}>
                    → Manage Articles
                  </a>
                </li>
                <li>
                  <a href="/admin/globals/about" style={{ color: 'var(--theme-primary-500)', textDecoration: 'none', fontWeight: 500 }}>
                    → Update About Section
                  </a>
                </li>
                <li>
                  <a href="/admin/globals/work" style={{ color: 'var(--theme-primary-500)', textDecoration: 'none', fontWeight: 500 }}>
                    → Refine Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Systems Card */}
            <div className="dashboard-card" style={{ 
              background: 'var(--theme-elevation-50)', 
              padding: '32px', 
              borderRadius: '16px',
              border: '1px border var(--theme-elevation-150)'
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px' }}>Systems Check</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--theme-elevation-400)', lineHeight: 1.6, marginBottom: '20px' }}>
                All systems are operational. Articles are being successfully fetched and parsed from the Lexical collection.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ 
                  padding: '4px 12px', 
                  background: 'rgba(34, 197, 94, 0.1)', 
                  color: '#22c55e', 
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  Live
                </span>
                <span style={{ 
                  padding: '4px 12px', 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  color: '#3b82f6', 
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  Type-Safe
                </span>
              </div>
            </div>
          </div>
        </div>
      </Gutter>
    </div>
  );
};

export default Dashboard;
