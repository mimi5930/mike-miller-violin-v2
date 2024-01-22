import { DollarCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React from 'react';
import './lessons.css';

export default function Lessons() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'var(--background-color)'
      }}
    >
      <div>
        <h1 className="page-title">Lessons</h1>
        <Divider></Divider>
      </div>
      <section className="lessons-container fade-in">
        <img
          className="lessons-image"
          src={require('../../images/mike-teaching.jpg')}
          alt="Mike staring to the information displayed on the screen"
        ></img>
        <div className="lessons-info-container">
          <div className="lessons-info">
            <p>
              Having received his Master's in Violin Performance and Pedagogy,
              Mike is excited to help students of all ages achieve their goals
              in music.
            </p>
          </div>
          <div className="lessons-info">
            <p>
              For information on billing policies, supplies, lesson
              cancellation, make-up lessons, practice tips, and much more!
            </p>
            <a
              href={require('../../assets/Mike Miller Violin Studio Handbook 2021 Covid19 Adjusted.pdf')}
            >
              <Button
                type="primary"
                className="lessons-button"
                icon={<InfoCircleOutlined />}
              >
                Lesson Handbook
              </Button>
            </a>
          </div>
          <div className="lessons-info">
            <p>Mike currently accepts payment through venmo</p>
            <a
              href="https://venmo.com/u/Mike-Miller-243"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="primary" icon={<DollarCircleOutlined />}>
                Venmo
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="lessons-hero-container"></section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: 20,
          padding: 20
        }}
      ></div>
    </div>
  );
}
