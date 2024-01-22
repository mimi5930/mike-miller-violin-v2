import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './event.css';

const styles = {
  card: {
    width: '60vw',
    minHeight: '10vh',
    margin: 10,
    border: '5px solid #ff7d00',
    boxShadow: '0px 0px 5px 0px black'
  },
  cardMobile: {},
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 40px'
  },
  mobileContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    width: '250px',
    height: '200px',
    backgroundColor: 'var(--background-color)',
    objectFit: 'contain'
  },
  mobileImage: {
    backgroundColor: 'white',
    maxWidth: '80%'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: '1vw'
  },
  mobileInfoContainer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  eventTitle: { fontSize: 40, marginBottom: 0 },
  eventTime: { fontSize: 20, marginBottom: 0 },
  eventLocation: { fontSize: 20, marginBottom: 0 },
  monthContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'var(--title-color)',
    padding: '0 20px',
    opacity: '.85'
  }
};

const TITLE = {
  SCVSO: 'SCVSO',
  FMSO: 'FMSO'
};

export default function Event({ id, title, time, location, smallScreen }) {
  function determineImg(eventTitle) {
    if (eventTitle.includes(TITLE.SCVSO))
      return require('../../images/SCVSO.webp');
    else if (eventTitle.includes(TITLE.FMSO))
      return require('../../images/fmso.png');
    else
      return require('../../pages/SeeCollection/carouselImages/kenzie2022/upbowBow.jpg');
  }

  return (
    <div
      className="fade-in"
      style={{ marginRight: 'auto', marginLeft: 'auto' }}
    >
      <Card
        style={!smallScreen ? styles.card : { ...styles.card, width: '80vw' }}
      >
        <div
          style={
            smallScreen
              ? styles.mobileContentContainer
              : styles.contentContainer
          }
        >
          <div style={styles.imageContainer}>
            <img
              src={determineImg(title)}
              alt="The event's logo"
              style={smallScreen ? styles.mobileImage : styles.image}
            ></img>
            <div style={styles.monthContainer}>
              <h3
                style={{
                  color: 'white',
                  fontSize: '30px',
                  marginBottom: 0
                }}
              >
                {format(new Date(time), 'LLL')}
              </h3>
              <h3
                style={{
                  color: 'white',
                  fontSize: '30px',
                  marginBottom: 0
                }}
              >
                {format(new Date(time), 'do')}
              </h3>
            </div>
          </div>
          <div
            style={
              smallScreen ? styles.mobileInfoContainer : styles.infoContainer
            }
          >
            <Link
              className="event-title"
              style={
                smallScreen
                  ? { ...styles.eventTitle, textAlign: 'center' }
                  : styles.eventTitle
              }
              to={`/events/${id}`}
            >
              {title}
            </Link>
            <p style={styles.eventLocation}>{location}</p>
            <p style={styles.eventTime}>{format(new Date(time), 'p')}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
