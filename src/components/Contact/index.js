import { Checkbox, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#ffecd1' }}>
      <h1
        className="title"
        style={{ color: '#15616d', fontSize: '50px', textAlign: 'center' }}
      >
        Contact Mike
      </h1>
      <Input size="large" placeholder="Name*" />
      <br></br>
      <Input size="large" placeholder="Email*" />
      <Input size="large" placeholder="Phone" />
      <h2>What services are you looking for?</h2>
      <Checkbox>Performer for an event</Checkbox>
      <Checkbox>Lessons</Checkbox>
      <Checkbox>Other</Checkbox>
      <TextArea placeholder="Message or Question*"></TextArea>
    </section>
  );
}
