import React, { useEffect, useState } from 'react';
import Event from '../../components/Event';
import { format } from 'date-fns';
import { Card, Skeleton } from 'antd';
import { sortDates } from '../../utils/helpers';

// const sampleEvent = [
//   {
//     id: 1,
//     summary: 'Event Title',
//     start: {
//       dateTime: '2022-07-24T15:00:00-05:00'
//     },
//     location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
//     description: 'This should be a fun wedding performance'
//   },
//   {
//     id: 2,
//     summary: 'Event Title Two',
//     start: {
//       dateTime: '2022-07-22T15:00:00-05:00'
//     },
//     location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
//     description: 'This should be a fun wedding performance'
//   },
//   {
//     id: 3,
//     summary: 'Event Title Three',
//     start: {
//       dateTime: '2022-07-18T15:00:00-05:00'
//     },
//     location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
//     description: 'This should be a fun wedding performance'
//   },
//   {
//     id: 4,
//     summary: 'Event Title Four',
//     start: {
//       dateTime: '2022-07-28T15:00:00-05:00'
//     },
//     location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
//     description: 'This should be a fun wedding performance'
//   }
// ];

export default function Events() {
  const [eventData, setEventData] = useState('');

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await fetch('/api/events');
        let responseData = await response.json();
        // organize dates
        if (responseData.length > 1) responseData = sortDates(responseData);
        setEventData(responseData);
        // }
      } catch (e) {
        console.log(e);
      }
    }

    getEvents();
  }, []);

  if (eventData === '')
    return (
      <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Card style={{ width: '72vw', height: '450px', margin: 10 }}>
          <Skeleton active style={{ padding: '50px' }} />
        </Card>
      </div>
    );

  return eventData.map(event => {
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
