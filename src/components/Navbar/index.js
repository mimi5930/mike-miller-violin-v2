import React, { useState } from 'react';
import { Button, Drawer, Layout } from 'antd';
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled,
  MenuOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffecd1',
    alignItems: 'center',
    height: '100px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffecd1',
    color: 'black',
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
    marginRight: '5px',
    marginLeft: '5px',
    color: '#78290f'
  },
  iconMobile: {
    fontSize: '30px',
    marginRight: '10px',
    color: 'rgb(47, 62, 70)'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    width: '300px',
    marginRight: '0px'
  },
  mobileNavContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  mobileLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hamburgerStyle: { width: '50px', height: '50px' }
};

export default function Navbar() {
  const { Header } = Layout;

  const smallScreen = useMediaQuery({ query: '(max-width: 1080px)' });

  const navigate = useNavigate();

  // state declarations
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.slice(1) || ''
  );
  const [drawer, setDrawer] = useState(false);
  const [navHover, setNavHover] = useState(null);

  const navItems = [
    { label: 'Bio/Resume', key: 'bio', nav: 'bio' },
    { label: 'Events', key: 'evt', nav: 'events' },
    { label: 'Lessons', key: 'les', nav: 'lessons' },
    { label: 'See', key: 'see', nav: 'see' },
    { label: 'Listen', key: 'lis', nav: 'listen' }
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
    // close drawer if open
    setDrawer(false);
  }

  function handleIconStyle(linkName) {
    if (!navHover) return { opacity: '100%' };
    else if (navHover !== linkName) return { opacity: '30%' };
    else if (navHover === linkName) return { opacity: '100%' };
    else return '';
  }

  // desktop display
  if (!smallScreen) {
    return (
      <Header style={styles.header}>
        <Link to={'/'} className="main-logo" onClick={() => setCurrentPage('')}>
          Mike Miller
        </Link>
        <nav style={styles.nav}>
          {navItems.map(item => {
            return (
              <Link
                to={`/${item.nav}`}
                className="nav-text"
                key={item.key}
                style={
                  currentPage === item.nav
                    ? { ...styles.navItem, color: '#78290f' }
                    : styles.navItem
                }
                onClick={() => handleNavClick(item.nav)}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            ghost
            className="contact-button"
            color="#15616d"
            onClick={() => navigate('/#contact')}
          >
            CONTACT
          </Button>
        </nav>
        <div style={styles.linkContainer}>
          {linkItems.map(link => {
            return (
              <a
                href={link.href}
                key={link.name}
                id={link.name}
                className="nav-link"
                style={handleIconStyle(link.name)}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={event => setNavHover(event.target.id)}
                onMouseLeave={() => setNavHover(null)}
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
        <Link to={'/'} className="main-logo" onClick={() => setCurrentPage('')}>
          Mike Miller
        </Link>
        <Button
          icon={<MenuOutlined />}
          style={styles.hamburgerStyle}
          onClick={() => setDrawer(!drawer)}
        />
      </Header>
      <Drawer
        placement="right"
        visible={drawer}
        width="80vw"
        onClose={() => setDrawer(!drawer)}
      >
        <div style={styles.mobileNavContainer}>
          <div>
            {navItems.map(item => {
              return (
                <p
                  className="text nav-text"
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
          <div style={styles.mobileLinkContainer}>
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
