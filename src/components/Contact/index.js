import { Button, Input, Form, Radio, Space, message } from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;

export default function Contact({ reference }) {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  function submitSuccess() {
    message.success('Submission successful!');
  }

  function submitError() {
    message.error('There was an error in sending your message!');
  }

  async function submitForm(values) {
    setLoading(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log('successful response', response);
      if (response.ok) {
        setLoading(false);
        submitSuccess();
        form.resetFields();
      } else {
        setLoading(false);
        submitError();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      submitError();
    }
  }

  function onFinish(values) {
    console.log('success', values);
    submitForm(values);
  }

  function onFinishFailed(errorInfo) {
    console.log('failed', errorInfo);
  }

  return (
    <section
      ref={reference}
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <h1
        style={{
          color: 'var(--title-color)',
          fontSize: '50px',
          textAlign: 'center',
          margin: '50px'
        }}
      >
        Contact Mike
      </h1>
      <div
        style={{
          margin: '50px 15vw',
          padding: '40px',
          border: '5px solid var(--title-color)'
        }}
      >
        <Form
          form={form}
          name="contact-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="text"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please provide your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please provide your email' },
              {
                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Please enter a valid email address'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item
            label="What service are you looking for?"
            name="service"
            rules={[{ required: true, message: 'Please select a service' }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="performer">Performer for an event</Radio>
                <Radio value="lessons">Lessons</Radio>
                <Radio value="other">Other</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Message or Question"
            name="message"
            rules={[
              { required: true, message: 'Please leave a message or question' }
            ]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
