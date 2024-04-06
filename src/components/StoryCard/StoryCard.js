import React, { useState, useEffect } from 'react';
import './StoryCard.css'; 

function StoryCard({ title, text, image }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Schwellenwert für den Scroll-Effekt

      if (scrollPosition > threshold) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup-Funktion für das Entfernen des Event Listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Leerarray als Abhängigkeit, um sicherzustellen, dass der Effekt nur einmalig ausgeführt wird

  return (
    <div className={`card ${scrolling ? 'scrolling ' : ''}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default StoryCard;
