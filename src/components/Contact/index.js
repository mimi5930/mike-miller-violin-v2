import { Button, Checkbox, Input } from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;

export default function Contact() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [checkValue, setCheckValue] = useState({
    performer: false,
    lessons: false,
    other: false
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  function handleCheck(event) {
    switch (event.target.name) {
      case 'performer':
        setInput({ ...input, service: 'performer' });
        setCheckValue({ performer: true, lessons: false, other: false });
        break;
      case 'lessons':
        setInput({ ...input, service: 'lessons' });
        setCheckValue({ lessons: true, performer: false, other: false });
        break;
      default:
        setInput({ ...input, service: 'other' });
        setCheckValue({ other: true, performer: false, lessons: false });
        break;
    }
  }

  function handleSubmit() {
    console.log('values', input);
  }

  return (
    <section id="contact" style={{ backgroundColor: '#ffecd1' }}>
      <h1
        className="title"
        style={{
          color: '#15616d',
          fontSize: '50px',
          textAlign: 'center',
          margin: '50px'
        }}
      >
        Contact Mike
      </h1>
      <form
        style={{
          margin: '50px 15vw',
          padding: '40px',
          border: '5px solid #15616d'
        }}
      >
        <Input
          style={{ marginBottom: '20px' }}
          name="name"
          size="large"
          placeholder="Name*"
          onChange={handleChange}
        />
        <Input
          style={{ marginBottom: '20px' }}
          name="email"
          size="large"
          placeholder="Email*"
          onChange={handleChange}
        />
        <Input
          style={{ marginBottom: '20px' }}
          name="phone"
          size="large"
          placeholder="Phone"
          onChange={handleChange}
        />
        <h2 style={{ marginBottom: '20px' }}>
          What service are you looking for?*
        </h2>
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Checkbox
            onChange={handleCheck}
            checked={checkValue.performer}
            name="performer"
          >
            Performer for an event
          </Checkbox>
          <Checkbox
            name="lessons"
            checked={checkValue.lessons}
            style={{ marginLeft: 0 }}
            onChange={handleCheck}
          >
            Lessons
          </Checkbox>
          <Checkbox
            name="other"
            style={{ marginLeft: 0 }}
            checked={checkValue.other}
            onChange={handleCheck}
          >
            Other
          </Checkbox>
        </div>
        <TextArea
          style={{ marginBottom: '20px' }}
          name="message"
          placeholder="Message or Question*"
          onChange={handleChange}
        ></TextArea>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </section>
  );
}
