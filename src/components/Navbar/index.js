import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function Navbar(params) {
  const navItems = [
    { label: 'BIO/RESUME', key: 'bio' },
    { label: 'LISTEN', key: 'lis' },
    { label: 'SEE', key: 'bio' },
    { label: 'EVENTS', key: 'evt' },
    { label: 'LESSONS', key: 'les' }
  ];

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#2f3e46',
        alignItems: 'center',
        height: '100px'
      }}
    >
      <h1 style={{ color: 'white' }}>Mike Miller Violin</h1>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#2f3e46',
          color: 'white',
          alignItems: 'center'
        }}
      >
        {navItems.map(item => {
          return (
            <p
              key={item.key}
              style={{ marginRight: '20px'}}
            >
              {item.label}
            </p> 
          );
        })}
      </nav>
    </Header>
  );
}

export default Navbar;
