import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './event.css';

export default function Event({ id, title, time, location }) {
  const navigate = useNavigate();
  return (
    <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Card
        style={{
          width: '80vw',
          minHeight: '10vh',
          margin: 10
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
            src="https://dummyimage.com/500X400.png"
            alt="A logo for the event"
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
            <p style={{ fontSize: 30, marginBottom: 0 }}>{time}</p>
            <p style={{ fontSize: 30 }}>{location}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
