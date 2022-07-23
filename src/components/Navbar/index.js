import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
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

export default function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { label: 'BIO/RESUME', key: 'bio', nav: 'bio' },
    { label: 'LISTEN', key: 'lis', nav: 'listen' },
    { label: 'SEE', key: 'see', nav: 'see' },
    { label: 'EVENTS', key: 'evt', nav: 'events' },
    { label: 'LESSONS', key: 'les', nav: 'lessons' }
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

  function handleNavClick(key, navId) {
    // update page state
    setCurrentPage(key);
    // navigate to new page;
    navigate(`/${navId}`);
  }

  return (
    <Header style={styles.header}>
      <Link to={'/'} style={styles.logo}>
        Mike Miller
      </Link>
      <nav style={styles.nav}>
        {navItems.map(item => {
          return (
            <p
              className="nav-item"
              key={item.key}
              style={{
                marginRight: '20px',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
              onClick={() => handleNavClick(item.key, item.nav)}
            >
              {item.label}
            </p>
          );
        })}
        <Button ghost>CONTACT</Button>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
        {linkItems.map(link => {
          return (
            <a
              href={link.href}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </Header>
  );
}
