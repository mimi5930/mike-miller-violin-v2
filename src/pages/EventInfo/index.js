import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const sampleEvent = {
  id: 1,
  summary: 'Event Title',
  start: {
    dateTime: '2022-07-24T15:00:00-05:00'
  },
  location: 'Target, 449 Commerce Dr, Woodbury, MN 55125, USA',
  htmlLink:
    'https://www.google.com/calendar/event?eid=MmJkaGsxZzRucTVjOWxob29taTFwbmNhZTYgYnNpNmc5czEyMTcyZDM5Zm8xYjVnOHNoNzRAZw',
  description:
    '<b>This should be a fun wedding performance</b>! Here is a link to my website:&nbsp;<a href="http://mikemillerviolin.com" id="ow414" __is_owner="true">Mike Miller Violin</a>'
};
export default function EventInfo() {
  // get the event's Id from params
  const params = useParams();
  let { eventId } = params;

  const [eventData, setEventData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getEventData() {
  //     try {
  //       const response = await fetch(`/api/event/${eventId}`);
  //       console.log(response);
  //       if (!response.ok) {
  //         setError(true);
  //         return;
  //       }
  //       const data = await response.json();
  //       setEventData(data);
  //       return;
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getEventData();
  // }, []);

  // if (isLoading) return <div>loading...</div>;

  // if (error) return <div>Event not found!</div>;

  return (
    <div>
      <p>{sampleEvent.summary}</p>
      <div>{parse(sampleEvent.description)}</div>
    </div>
  );
}
