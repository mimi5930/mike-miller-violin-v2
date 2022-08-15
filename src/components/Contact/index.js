import { Button, Input, Form, Radio, Space } from 'antd';
import React from 'react';

const { TextArea } = Input;

export default function Contact() {
  function onFinish(values) {
    console.log('success', values);
  }

  function onFinishFailed(errorInfo) {
    console.log('failed', errorInfo);
  }

  return (
    <section style={{ backgroundColor: '#ffecd1' }}>
      <h1
        style={{
          color: '#15616d',
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
          border: '5px solid #15616d'
        }}
      >
        <Form
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
          {/* <h2 style={{ marginBottom: '20px' }}>
            What service are you looking for?
          </h2> */}
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
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
