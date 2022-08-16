import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { format } from 'date-fns';
import { Button, Skeleton } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { configureHref } from '../../utils/helpers';
import './event-info.css';

// redux imports
import { useSelector } from 'react-redux/es/exports';

export default function EventInfo() {
  // get the event's Id from params
  const params = useParams();
  let { eventId } = params;

  const eventsList = useSelector(state => state.events.value);

  const [eventData, setEventData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEventData() {
      try {
        const response = await fetch(`/api/event/${eventId}`);
        if (!response.ok) {
          setError(true);
          return;
        }
        const data = await response.json();
        setEventData(data);
        return;
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (eventsList.length) {
      let event = eventsList.filter(event => {
        return event.id === eventId;
      });
      if (!event.length) {
        return getEventData();
      }
      setEventData(event[0]);
      setLoading(false);
    } else getEventData();
  }, []);

  function determineImg(eventTitle) {
    if (eventTitle.includes('SCVSO')) return require('../../images/SCVSO.webp');
    else return 'https://dummyimage.com/500X400.png';
  }

  if (isLoading) return <Skeleton active style={{ padding: '50px' }} />;

  if (error) return <div>Event not found!</div>;

  return (
    <div
      style={{
        height: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1 style={{ fontSize: 80, textAlign: 'center', marginBottom: 5 }}>
        {eventData.summary}
      </h1>
      <h2 style={{ fontSize: 30, textAlign: 'center' }}>
        {format(new Date(eventData.start.dateTime), 'EEEE MMM d, p')}
      </h2>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}
      >
        <p style={{ fontSize: 30 }}>
          {eventData.location}&nbsp;
          <a
            href={`https://maps.google.com/?q=${eventData.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="event-location"
          >
            (map)
          </a>
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={configureHref(eventData.htmlLink, eventData.organizer.email)}
          icon={<CalendarOutlined />}
        >
          Add to Google Calendar
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          margin: '30px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            margin: '30px'
          }}
        >
          <h2 style={{ fontSize: 40 }}>Description</h2>
          <div style={{ fontSize: 20, maxWidth: '45vw' }}>
            {eventData.description &&
              parse(
                eventData.description
                  .replaceAll('<html-blob>', '')
                  .replaceAll('</html-blob>', '')
              )}
          </div>
        </div>
        <img src={determineImg(eventData.summary)} alt="The event logo"></img>
      </div>
      <div></div>
    </div>
  );
}
