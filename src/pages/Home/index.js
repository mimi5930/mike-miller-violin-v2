import React, { useEffect, useRef } from 'react';
import Contact from '../../components/Contact';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

const styles = {
  heroContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#010101',
    backgroundImage: `url(${require('../../images/hero.jpg')})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderTop: '10px solid #ff7d00',
    borderBottom: '10px solid #ff7d00'
  },
  smallHeroContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#010101',
    backgroundImage: `url(${require('../../images/hero.jpg')})`,
    backgroundPosition: '30% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderTop: '10px solid #ff7d00',
    borderBottom: '10px solid #ff7d00'
  },
  heroText: {
    border: '5px solid var(--title-color)',
    borderRadius: '15px',
    width: '50vw',
    color: 'black',
    fontSize: '30px',
    position: 'absolute',
    top: '25%',
    right: '5vw',
    backgroundColor: 'var(--background-color)',
    padding: '30px'
  },
  smallHeroText: {
    borderTop: '5px solid var(--title-color)',
    borderBottom: '5px solid var(--title-color)',
    color: 'black',
    fontSize: '30px',
    position: 'relative',
    textAlign: 'center',
    padding: '25px',
    margin: '15px 20px 0px'
  }
};

export default function Home() {
  const smallScreen = useMediaQuery({ query: '(max-width: 1250px)' });

  const contactElement = useRef();
  const href = useLocation();

  useEffect(() => {
    if (href.hash === '#contact') {
      contactElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [href]);

  return (
    <>
      <section
        style={
          !smallScreen
            ? {
                height: 'calc(100vh - 100px)',
                backgroundColor: 'var(--background-color)'
              }
            : { height: '30vh' }
        }
      >
        <div
          className="fade-in"
          style={
            !smallScreen ? styles.heroContainer : styles.smallHeroContainer
          }
        >
          {!smallScreen && (
            <p className="text" style={styles.heroText}>
              Mike Miller is a violin teacher and performer in Woodbury,
              Minnesota. He has a strong passion for providing audiences with
              authentic performances and fostering students' love of music.
            </p>
          )}
        </div>
      </section>
      {smallScreen && (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
          <p className="text" style={styles.smallHeroText}>
            Mike Miller is a violin teacher and performer in Woodbury,
            Minnesota. He has a strong passion for providing audiences with
            authentic performances and fostering students' love of music.
          </p>
        </div>
      )}
      <Contact reference={contactElement} />
    </>
  );
}
