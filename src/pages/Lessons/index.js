import { Card, Divider } from 'antd';
import React from 'react';

export default function Lessons() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '80px',
          color: 'var(--title-color)',
          marginBottom: 0
        }}
      >
        Lessons
      </h1>
      <Divider></Divider>
      <div>
        <Card></Card>
      </div>
    </div>
  );
}
