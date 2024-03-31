// About.js

import React from 'react';
import StoryCard from '../components/StoryCard/StoryCard';
import content from '../assets/content.json';

function About() {
  return (
    <div className="story-card-container page-content">
      {content.stories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          text={story.text}
          image={story.image} // Übergeben Sie den Bildpfad als Prop
        />
      ))}
    </div>
    
  );
}

export default About;
