import React, { useEffect, useRef, useState } from 'react';
import Event from '../../components/Event';
import { Card, Divider, Skeleton, Button } from 'antd';
import { sortDates } from '../../utils/helpers';
import { useMediaQuery } from 'react-responsive';
import { isStatic } from '../../utils/isStatic';
import jsonData from '../../assets/eventData.json';
// TODO: scroll to previous event when user presses back to all events button

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setEvents, completeLoading } from './eventsSlice';

const styles = {
  skeletonContainer: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: 'var(--background-color)',
    display: 'flex',
    justifyContent: 'center'
  },
  skeletonCard: { width: '72vw', height: '450px', margin: 10 },
  skeleton: { padding: '50px' },
  page: {
    backgroundColor: 'var(--background-color)',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default function Events() {
  const dispatch = useDispatch();

  const smallScreen = useMediaQuery({ query: '(max-width: 1150px)' });

  const eventsList = useSelector(state => state.events.value);
  const eventsLoading = useSelector(state => state.events.isLoading);
  const [showEvents, setShowEvents] = useState(false);
  const pastEventsTitle = useRef();

  useEffect(() => {
    if (isStatic() && eventsList.length === 0) {
      let data = jsonData;
      if (data.length > 1) data = sortDates([...data]);
      dispatch(setEvents(data));
      dispatch(completeLoading());
    } else {
      async function getEvents() {
        try {
          const response = await fetch('/api/events');
          let responseData = await response.json();
          // organize dates
          if (responseData.length > 1) responseData = sortDates(responseData);
          dispatch(setEvents(responseData));
          dispatch(completeLoading());
        } catch (e) {
          console.log(e);
        }
      }
      if (eventsList.length === 0) getEvents();
    }
  }, []);

  return (
    <div style={styles.page}>
      <h1 className="page-title">Upcoming Events</h1>
      <Divider></Divider>
      {eventsLoading ? (
        <div style={styles.skeletonContainer}>
          <Card style={styles.skeletonCard}>
            <Skeleton active style={styles.skeleton} />
          </Card>
        </div>
      ) : (
        <>
          {eventsList.futureDates.map(event => {
            return (
              <Event
                key={event.id}
                id={event.id}
                title={event.summary}
                time={event.start.dateTime}
                location={event.location}
                smallScreen={smallScreen}
              />
            );
          })}
          <div style={{ marginTop: '5rem' }}></div>
          <Divider className="m"></Divider>
          <h1 className="page-title" ref={pastEventsTitle}>
            Past Events
          </h1>
          <Divider></Divider>
          {eventsList.pastDates.map((event, index) => {
            if (showEvents) {
              return (
                <>
                  <Event
                    key={event.id}
                    id={event.id}
                    title={event.summary}
                    time={event.start.dateTime}
                    location={event.location}
                    smallScreen={smallScreen}
                    pastEvent
                  />
                </>
              );
            } else {
              if (index <= 2) {
                return (
                  <Event
                    key={event.id}
                    id={event.id}
                    title={event.summary}
                    time={event.start.dateTime}
                    location={event.location}
                    smallScreen={smallScreen}
                    pastEvent
                  />
                );
              } else return <></>;
            }
          })}
          <Button
            type="primary"
            style={{ marginBottom: 10 }}
            onClick={() => {
              setShowEvents(!showEvents);
              pastEventsTitle.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {showEvents ? 'Show Less Past Events' : 'Show More Past Events'}
          </Button>
        </>
      )}
    </div>
  );
}
