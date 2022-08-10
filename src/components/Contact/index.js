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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    invalidEmail: false,
    service: false,
    message: false
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
    let currentErrors = {};
    let isEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    // check if name is empty
    input.name === ''
      ? (currentErrors.name = true)
      : (currentErrors.name = false);
    // check if email is empty
    input.email === ''
      ? (currentErrors.email = true)
      : (currentErrors.email = false);
    // validate email
    !isEmail.test(input.email)
      ? (currentErrors.invalidEmail = true)
      : (currentErrors.invalidEmail = false);
    // check that service has been checked
    input.service === ''
      ? (currentErrors.service = true)
      : (currentErrors.service = false);
    // check if message is empty
    input.message === ''
      ? (currentErrors.message = true)
      : (currentErrors.message = false);

    // add errors to state
    setErrors({ ...errors, ...currentErrors });
    console.log('errors', errors);
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
          status={errors.name && 'error'}
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
