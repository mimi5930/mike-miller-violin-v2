import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import './event.css';

export default function Event({ id, title, time, location }) {
  const navigate = useNavigate();
  console.log(time);

  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Card
        style={{
          width: '80vw',
          minHeight: '10vh',
          margin: 10,
          border: '5px solid #ff7d00',
          boxShadow: '0px 0px 5px 0px black'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 40
          }}
        >
          <img
            src={
              title.includes('SCVSO')
                ? require('../../images/SCVSO.webp')
                : 'https://dummyimage.com/500X400.png'
            }
            alt="A logo for the event"
            style={{
              backgroundColor: 'white',
              height: '400px',
              width: '500px'
            }}
          ></img>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              marginLeft: '40px'
            }}
          >
            {/* <a href={#} target="_blank" rel="noopener noreferrer"> */}
            <h2
              className="event-title"
              style={{ fontSize: 50, marginBottom: 0 }}
              onClick={() => navigate(`/events/${id}`)}
            >
              {title}
            </h2>
            {/* </a> */}
            <p style={{ fontSize: 25, marginBottom: 0 }}>{time}</p>
            <p style={{ fontSize: 25 }}>{location}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
