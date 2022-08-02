import React, { useEffect } from 'react';
import Event from '../../components/Event';
import { format } from 'date-fns';
import { Card, Skeleton } from 'antd';
import { sortDates } from '../../utils/helpers';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setEvents, completeLoading } from './eventsSlice';

export default function Events() {
  const dispatch = useDispatch();

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

  if (eventsLoading)
    return (
      <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card style={{ width: '72vw', height: '450px', margin: 10 }}>
          <Skeleton active style={{ padding: '50px' }} />
        </Card>
      </div>
    );

  return eventsList.map(event => {
    return (
      <div key={event.id} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Event
          id={event.id}
          title={event.summary}
          time={format(new Date(event.start.dateTime), 'EEEE MMM d, p')}
          location={event.location}
        />
      </div>
    );
  });
}
