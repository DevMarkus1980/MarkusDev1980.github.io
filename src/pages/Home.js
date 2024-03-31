// Home.js

import React from 'react';
import content from '../assets/content.json';
import './page.css';

function Home() {
  return (
    <div className='content page-content'>
      <h1>{content.home.title}</h1>
      <p>{content.home.description}</p>
    </div>
  );
}

export default Home;

