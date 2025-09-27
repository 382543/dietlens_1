import React, { useState, useEffect } from 'react';
import '../index.css';
import dietphoto from '../assets/dietphoto.jpg';
import heroImage2 from '../assets/heroImage2.jpg';
import heroImage3 from '../assets/heroImage3.jpg';

// ✅ Only one array of images
const images = [dietphoto, heroImage2, heroImage3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 5 seconds (5000ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="hero-section">
        {/* Left side: About/Description */}
        <div className="hero-content">
          <h1>Effortless Nutrition. Personalized Health.</h1>
          <p>
            Scan food, track calories, and get healthy diet plans tailored just
            for you. Take control of your health with DietLens.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Right side: Animated Image Carousel */}
        <div className="hero-card carousel-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`DietLens App Screenshot ${index + 1}`}
              className={
                index === currentImageIndex
                  ? 'carousel-image active'
                  : 'carousel-image'
              }
            />
          ))}
          <p>Fresh & Healthy Food Recommendations</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
