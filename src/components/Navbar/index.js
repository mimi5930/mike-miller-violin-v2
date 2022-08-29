import React, { useEffect, useState } from 'react';
import { Button, Drawer, Layout } from 'antd';
import {
  YoutubeFilled,
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  InstagramFilled,
  MenuOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useMediaQuery } from 'react-responsive';
import { setDocumentTitle } from '../../utils/helpers';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'var(--background-color)',
    alignItems: 'center',
    height: '100px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'var(--background-color)',
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
    color: 'var(--palette-maroon)'
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

const navItems = [
  { label: 'Bio/Resume', key: 'bio', nav: 'bio' },
  { label: 'Events', key: 'evt', nav: 'events' },
  { label: 'Lessons', key: 'les', nav: 'lessons' },
  { label: 'See', key: 'see', nav: 'see' },
  { label: 'Listen', key: 'lis', nav: 'listen' }
];

export default function Navbar() {
  const { Header } = Layout;

  const smallScreen = useMediaQuery({ query: '(max-width: 1080px)' });

  // state declarations
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.slice(1) || ''
  );
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    setDocumentTitle(currentPage);
  }, [currentPage]);

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
                    ? { ...styles.navItem, color: 'var(--palette-maroon)' }
                    : styles.navItem
                }
                onClick={() => handleNavClick(item.nav)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to={'/#contact'} onClick={() => handleNavClick('')}>
            <Button ghost className="contact-button">
              CONTACT
            </Button>
          </Link>
        </nav>
        <div style={styles.linkContainer} className="link-container">
          {linkItems.map(link => {
            return (
              <a
                href={link.href}
                key={link.name}
                id={link.name}
                className="nav-link"
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {navItems.map(item => {
              return (
                <Link
                  className="text nav-text"
                  key={item.key}
                  style={{
                    fontSize: '40px',
                    marginBottom: '15px'
                  }}
                  onClick={() => handleNavClick(item.nav)}
                  to={`/${item.nav}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="text nav-text"
              to="/#contact"
              style={{
                fontSize: '40px',
                marginBottom: '15px'
              }}
              onClick={() => handleNavClick('')}
            >
              Contact
            </Link>
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
