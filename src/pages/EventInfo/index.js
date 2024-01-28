import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import parse from 'html-react-parser';
import { format } from 'date-fns';
import { Button, Divider, Skeleton } from 'antd';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CompassOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { configureHref } from '../../utils/helpers';
import './event-info.css';
import { isStatic } from '../../utils/isStatic';
import jsonData from '../../assets/eventData.json';

// redux imports
import { useSelector } from 'react-redux/es/exports';

export default function EventInfo() {
  // get the event's Id from params
  const { eventId } = useParams();

  const smallScreen = useMediaQuery({ query: '(max-width: 1250px)' });

  const eventsList = useSelector(state => state.events.value);

  const [eventData, setEventData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEventData() {
      // site running through a server
      if (!isStatic()) {
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
      } else {
        let eventData = jsonData.filter(data => data.id === eventId);
        if (!eventData.length) {
          setError(true);
          setLoading(false);
        } else {
          console.log(eventData);
          setEventData(eventData[0]);
          setLoading(false);
        }
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

  if (isLoading)
    return (
      <div
        style={{
          height: 'calc(100vh - 100px)',
          backgroundColor: 'var(--background-color)'
        }}
      >
        <div style={{ margin: '40px 80px' }}>
          <Skeleton active style={{ padding: '50px' }} />
        </div>
      </div>
    );

  if (error)
    return (
      <div
        style={{
          height: 'calc(100vh - 100px)',
          backgroundColor: 'var(--background-color)'
        }}
      >
        <h1
          style={{
            fontSize: 60,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 5,
            color: 'var(--title-color)'
          }}
        >
          Event Not Found
        </h1>
      </div>
    );

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <div className="fade-in">
        <h1
          className="page-title"
          style={
            !smallScreen
              ? {
                  textAlign: 'center',
                  fontSize: '40px',
                  color: 'var(--title-color)',
                  marginBottom: 0
                }
              : {
                  textAlign: 'center',
                  fontSize: '30px',
                  color: 'var(--title-color)',
                  marginBottom: 0
                }
          }
        >
          {eventData.summary}
        </h1>
        <Divider></Divider>
        <div
          style={
            !smallScreen
              ? {
                  margin: '40px',
                  display: 'flex',
                  justifyContent: 'space-evenly'
                }
              : {
                  marginBottom: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }
          }
        >
          <div
            style={!smallScreen ? { maxWidth: '30vw' } : { maxWidth: '80vw' }}
          >
            <Link to="/events">
              <Button
                type="primary"
                icon={<LeftOutlined />}
                style={{ marginBottom: 10 }}
              >
                Back to All Events
              </Button>
            </Link>

            <h2 style={{ fontSize: 20 }}>
              <ClockCircleOutlined />{' '}
              {format(new Date(eventData.start.dateTime), 'EEEE MMM d yyyy, p')}
            </h2>
            <h2 style={{ fontSize: 20 }}>
              <CompassOutlined /> {eventData.location}{' '}
              <a
                href={`https://maps.google.com/?q=${eventData.location}`}
                target="_blank"
                rel="noopener noreferrer"
                className="event-location"
              >
                (map)
              </a>
            </h2>
            <Button
              type="primary"
              target="_blank"
              rel="noopener noreferrer"
              href={configureHref(
                eventData.htmlLink,
                eventData.organizer.email
              )}
              icon={<CalendarOutlined />}
            >
              Add to Google Calendar
            </Button>
          </div>
          <div
            style={
              !smallScreen
                ? { maxWidth: '30vw', fontSize: 15 }
                : { maxWidth: '80vw', fontSize: 15, marginTop: 20 }
            }
          >
            {eventData.description &&
              parse(
                eventData.description
                  .replaceAll('<html-blob>', '')
                  .replaceAll('</html-blob>', '')
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
