import React from 'react';
import Contact from '../../components/Contact';
import { useMediaQuery } from 'react-responsive';

const styles = {
  heroContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#010101',
    backgroundImage: `url(${require('../../images/hero.jpg')})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
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
    border: '5px solid #15616d',
    borderRadius: '15px',
    width: '50vw',
    color: 'black',
    fontSize: '30px',
    position: 'absolute',
    top: '25%',
    right: '5vw',
    backgroundColor: 'rgba(255, 236, 209, .85)',
    padding: '30px'
  },
  smallHeroText: {
    borderTop: '5px solid #15616d',
    borderBottom: '5px solid #15616d',
    color: 'black',
    fontSize: '30px',
    position: 'relative',
    textAlign: 'center',
    padding: '25px',
    margin: '15px 20px 0px'
  }
};

export default function Home() {
  const smallScreen = useMediaQuery({ query: '(max-width: 1250px' });

  return (
    <>
      <section
        style={
          !smallScreen
            ? {
                height: 'calc(100vh - 100px)'
              }
            : { height: '30vh' }
        }
      >
        <div
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
        <di style={{ backgroundColor: 'rgba(255, 236, 209)' }}>
          <p className="text" style={styles.smallHeroText}>
            Mike Miller is a violin teacher and performer in Woodbury,
            Minnesota. He has a strong passion for providing audiences with
            authentic performances and fostering students' love of music.
          </p>
        </di>
      )}
      <Contact />
    </>
  );
}
