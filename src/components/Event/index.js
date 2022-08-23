import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './event.css';

const styles = {
  card: {
    width: '80vw',
    minHeight: '10vh',
    margin: 10,
    border: '5px solid #ff7d00',
    boxShadow: '0px 0px 5px 0px black'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 40
  },
  mobileContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    backgroundColor: 'white',
    maxHeight: '400px',
    maxWidth: '400px'
  },
  mobileImage: {
    backgroundColor: 'white',
    maxWidth: '80%'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: '40px'
  },
  mobileInfoContainer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  eventTitle: { fontSize: 50, marginBottom: 0 },
  eventTime: { fontSize: 25, marginBottom: 0 },
  eventLocation: { fontSize: 25, alignSelf: 'flex-start' }
};

export default function Event({ id, title, time, location, smallScreen }) {
  function determineImg(eventTitle) {
    if (eventTitle.includes('SCVSO')) return require('../../images/SCVSO.webp');
    else if (eventTitle.includes('FMSO'))
      return require('../../images/fmso.png');
    else return 'https://dummyimage.com/500X400.png';
  }

  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Card style={styles.card}>
        <div
          style={
            smallScreen
              ? styles.mobileContentContainer
              : styles.contentContainer
          }
        >
          <img
            src={determineImg(title)}
            alt="A logo for the event"
            style={smallScreen ? styles.mobileImage : styles.image}
          ></img>
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
            <p style={styles.eventTime}>
              {format(new Date(time), 'EEEE MMM d, p')}
            </p>
            <p style={styles.eventLocation}>{location}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
