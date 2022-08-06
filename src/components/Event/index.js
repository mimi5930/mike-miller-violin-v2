import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
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
    height: '400px',
    width: '500px'
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
  const navigate = useNavigate();
  console.log(time);

  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Card
        style={styles.card}
        onClick={() => smallScreen && navigate(`/events/${id}`)}
      >
        <div
          style={
            smallScreen
              ? styles.mobileContentContainer
              : styles.contentContainer
          }
        >
          <img
            src={
              title.includes('SCVSO')
                ? require('../../images/SCVSO.webp')
                : 'https://dummyimage.com/500X400.png'
            }
            alt="A logo for the event"
            style={smallScreen ? styles.mobileImage : styles.image}
          ></img>
          <div
            style={
              smallScreen ? styles.mobileInfoContainer : styles.infoContainer
            }
          >
            <h2
              className="event-title"
              style={
                smallScreen
                  ? { ...styles.eventTitle, textAlign: 'center' }
                  : styles.eventTitle
              }
              onClick={() => navigate(`/events/${id}`)}
            >
              {title}
            </h2>
            <p style={styles.eventTime}>{time}</p>
            <p style={styles.eventLocation}>{location}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
