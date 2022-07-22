import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled
} from '@ant-design/icons';

import './navbar.css';

const { Header } = Layout;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2f3e46',
    alignItems: 'center',
    height: '100px'
  },
  logo: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2f3e46',
    color: 'white',
    alignItems: 'center',
    fontSize: '18px'
  },
  icon: { fontSize: '30px', marginRight: '10px' }
};

function Navbar() {
  const navItems = [
    { label: 'BIO/RESUME', key: 'bio' },
    { label: 'LISTEN', key: 'lis' },
    { label: 'SEE', key: 'see' },
    { label: 'EVENTS', key: 'evt' },
    { label: 'LESSONS', key: 'les' }
  ];

  const linkItems = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCYT-un1xuD4-k0bAVKCbPMg',
      icon: <YoutubeFilled style={styles.icon} />
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/mikemillerviolin',
      icon: <FacebookFilled style={styles.icon} />
    },

    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mikemillerviolin/',
      icon: <InstagramFilled style={styles.icon} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/MichaelJohnMil8',
      icon: <TwitterOutlined style={styles.icon} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michael-miller-4b72331a2/',
      icon: <LinkedinFilled style={styles.icon} />
    }
  ];

  const [currentPage, setCurrentPage] = useState('');

  return (
    <Header style={styles.header}>
      <h1 style={styles.logo}>Mike Miller</h1>
      <nav style={styles.nav}>
        {navItems.map(item => {
          return (
            <p
              className="nav-item"
              key={item.key}
              id={item.key}
              style={{
                marginRight: '20px',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
              onClick={e => setCurrentPage(e.target.id)}
            >
              {item.label}
            </p>
          );
        })}
        <Button ghost>Contact</Button>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {linkItems.map(link => {
          return (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          );
        })}
      </div>
    </Header>
  );
}

export default Navbar;
