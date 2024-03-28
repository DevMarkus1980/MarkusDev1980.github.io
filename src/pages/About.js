// About.js

import React from 'react';
import content from '../assets/content.json';

function About() {
  return (
    <div className='content'>
      <h1>{content.about.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.about.description }} />
    </div>
  );
}

export default About;