import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">
          <h1>About BrainFrame</h1>
        </span>
        <p>
          BrainFrame was founded in 2019 and based off of the MindBody client
          management system. Yoga is a mind and body practice with a 5,000-year
          history in ancient Indian philosophy. Various styles of yoga combine
          physical postures, breathing techniques, and meditation or relaxation.
          In more recent years, it has become popular as a form of physical
          exercise based upon poses that promote improved control of the mind
          and body and enhance well-being. There are several different types of
          yoga and many disciplines within the practice. This article explores
          the history, philosophy, and various branches of yoga.
        </p>
      </div>
      <div className="card-action">
        <a href="https://en.wikipedia.org/wiki/Yoga">
          <h3>More About Yoga</h3>
        </a>
      </div>
    </div>
  );
};

export default About;
