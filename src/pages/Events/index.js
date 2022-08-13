import React, { useEffect } from 'react';
import Event from '../../components/Event';
import { Card, Divider, Skeleton } from 'antd';
import { sortDates } from '../../utils/helpers';
import { useMediaQuery } from 'react-responsive';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setEvents, completeLoading } from './eventsSlice';

const styles = {
  skeletonContainer: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: '#ffecd1',
    display: 'flex',
    justifyContent: 'center'
  },
  skeletonCard: { width: '72vw', height: '450px', margin: 10 },
  skeleton: { padding: '50px' },
  page: {
    backgroundColor: '#ffecd1',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default function Events() {
  const dispatch = useDispatch();

  const smallScreen = useMediaQuery({ query: '(max-width: 1150px)' });

  const eventsList = useSelector(state => state.events.value);
  const eventsLoading = useSelector(state => state.events.isLoading);

  useEffect(() => {
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
  }, []);

  return (
    <div style={styles.page}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '80px',
          color: '#15616d',
          marginBottom: 0
        }}
      >
        Upcoming Events
      </h1>
      <Divider></Divider>
      {eventsLoading ? (
        <div style={styles.skeletonContainer}>
          <Card style={styles.skeletonCard}>
            <Skeleton active style={styles.skeleton} />
          </Card>
        </div>
      ) : (
        eventsList.map(event => {
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
        })
      )}
    </div>
  );
}
