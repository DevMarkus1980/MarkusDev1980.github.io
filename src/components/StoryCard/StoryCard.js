import React from 'react';
import './StoryCard.css'; 

function StoryCard({ title, text, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt="Story" className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default StoryCard;
