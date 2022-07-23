import React, { useEffect, useState } from 'react';
import Event from '../../components/Event';
import { format } from 'date-fns';

const sampleEvent = [
  {
    id: 1,
    summary: 'Event Title',
    start: {
      dateTime: '2022-07-24T15:00:00-05:00'
    },
    location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
    description: 'This should be a fun wedding performance'
  }
];

export default function Events() {
  const [eventData, setEventData] = useState(sampleEvent);

  // useEffect(() => {
  //   async function getEvents() {
  //     try {
  //       const response = await fetch('/api/events');
  //       const responseData = await response.json();
  //       setEventData(responseData);
  //       console.log(responseData);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   getEvents();
  // }, []);

  if (eventData === '') return <div>loading...</div>;

  return eventData.map(event => {
    return (
      <Event
        id={event.id}
        title={event.summary}
        time={format(new Date(event.start.dateTime), 'EEEE MMM d, p')}
        location={event.location}
        key={event.id}
      />
    );
  });
}
