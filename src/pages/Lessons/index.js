import { Divider } from 'antd';
import React from 'react';

export default function Lessons() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <h1 className="page-title">Lessons with Mike</h1>
      <Divider></Divider>
      <img src=""></img>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: 20,
          padding: 20
        }}
      >
        <div>
          <h2></h2>
        </div>
      </div>
    </div>
  );
}
