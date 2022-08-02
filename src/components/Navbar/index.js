import React, { useEffect, useState } from 'react';
import { Button, Drawer, Layout } from 'antd';
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';

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
    marginBottom: 'auto',
    fontSize: '30px',
    width: '200px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2f3e46',
    color: 'white',
    alignItems: 'center',
    fontSize: '18px'
  },
  navItem: {
    marginRight: '20px',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  icon: {
    fontSize: '30px',
    marginRight: '10px',
    color: 'white'
  },
  iconMobile: {
    fontSize: '30px',
    marginRight: '10px',
    color: 'rgb(47, 62, 70)'
  }
};

export default function Navbar() {
  const { Header } = Layout;

  const smallScreen = useMediaQuery({ query: '(max-width: 1080px)' });

  const navigate = useNavigate();
  console.log(window.location);

  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.slice(1) || ''
  );
  const [drawer, setDrawer] = useState(false);

  const navItems = [
    { label: 'Bio/Resume', key: 'bio', nav: 'bio' },
    { label: 'Listen', key: 'lis', nav: 'listen' },
    { label: 'See', key: 'see', nav: 'see' },
    { label: 'Events', key: 'evt', nav: 'events' },
    { label: 'Lessons', key: 'les', nav: 'lessons' }
  ];

  const linkItems = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCYT-un1xuD4-k0bAVKCbPMg',
      icon: <YoutubeFilled style={drawer ? styles.iconMobile : styles.icon} />
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/mikemillerviolin',
      icon: <FacebookFilled style={drawer ? styles.iconMobile : styles.icon} />
    },

    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mikemillerviolin/',
      icon: <InstagramFilled style={drawer ? styles.iconMobile : styles.icon} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/MichaelJohnMil8',
      icon: <TwitterOutlined style={drawer ? styles.iconMobile : styles.icon} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michael-miller-4b72331a2/',
      icon: <LinkedinFilled style={drawer ? styles.iconMobile : styles.icon} />
    }
  ];

  function handleNavClick(nav) {
    // update page state
    setCurrentPage(nav);
    // navigate to new page;
    navigate(`/${nav}`);
    // close drawer if open
    setDrawer(false);
  }

  // desktop display
  if (!smallScreen) {
    return (
      <Header style={styles.header}>
        <Link
          to={'/'}
          className="logo-title"
          style={styles.logo}
          onClick={() => setCurrentPage('')}
        >
          Mike Miller
        </Link>
        <nav style={styles.nav}>
          {navItems.map(item => {
            return (
              <p
                className="nav-item"
                key={item.key}
                style={
                  currentPage === item.nav
                    ? { ...styles.navItem, color: '#17c3b2' }
                    : styles.navItem
                }
                onClick={() => handleNavClick(item.nav)}
              >
                {item.label}
              </p>
            );
          })}
          <Button ghost className="contact-button">
            CONTACT
          </Button>
        </nav>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 8,
            width: '200px'
          }}
        >
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

  // mobile display
  return (
    <>
      <Header style={styles.header}>
        <Link
          to={'/'}
          className="logo-title"
          style={styles.logo}
          onClick={() => setCurrentPage('')}
        >
          Mike Miller
        </Link>
        <Button
          icon={<MenuOutlined />}
          size="large"
          onClick={() => setDrawer(!drawer)}
        />
      </Header>
      <Drawer
        placement="right"
        visible={drawer}
        width="80vw"
        onClose={() => setDrawer(!drawer)}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <div>
            {navItems.map(item => {
              return (
                <p
                  className="nav-item"
                  key={item.key}
                  style={{
                    fontSize: '30px'
                  }}
                  onClick={() => handleNavClick(item.nav)}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
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
        </div>
      </Drawer>
    </>
  );
}
