import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { format } from 'date-fns';
import { Button, Card, Skeleton } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { configureHref } from '../../utils/helpers';
import './event-info.css';

// const sampleEvent = {
//   id: 1,
//   summary: 'Event Title',
//   organizer: {
//     email: 'bsi6g9s12172d39fo1b5g8sh74@group.calendar.google.com',
//     displayName: 'Mike Miller - Violin',
//     self: true
//   },
//   start: {
//     dateTime: '2022-07-24T15:00:00-05:00'
//   },
//   location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
//   htmlLink:
//     'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
//   description:
//     'This is my first Test event of the year! Please come join me as I perform some contemporary works from you know when!<br><br>Featured works:<br><ul><li>Beethoven Symphony No. 1</li><li>Beethoven Symphony No. 2</li></ul>'
// };
export default function EventInfo() {
  // get the event's Id from params
  const params = useParams();
  let { eventId } = params;

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

    getEventData();
  }, []);

  if (isLoading) return <Skeleton active style={{ padding: '50px' }} />;

  if (error) return <div>Event not found!</div>;

  return (
    <div>
      <h1 style={{ fontSize: 80, textAlign: 'center', marginBottom: 5 }}>
        {eventData.summary}
      </h1>
      <h2 style={{ fontSize: 30, textAlign: 'center' }}>
        {format(new Date(eventData.start.dateTime), 'EEEE MMM d, p')}
      </h2>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}
      >
        <a
          href={`https://google.com/maps/search/${eventData.location.replaceAll(
            ' ',
            '+'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="event-location"
        >
          {eventData.location}
        </a>
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
            {parse(eventData.description)}
          </div>
        </div>
        <img
          src="https://dummyimage.com/500x400.png"
          alt="The event logo"
        ></img>
      </div>
      <div></div>
    </div>
  );
}
