import React from 'react';
import './styles/Home.css';
import myPicture from '../resources/photos/bhuvan-photo.png';

const Home = () => {
  return (
    <div id='home' className="home-container">
      <div className="home-image-container">
        <img src={myPicture} alt="Bhuvan" className="home-image" />
      </div>
      <div className="home-description">
        <h2>I AM BHUVAN</h2>
        <h1>Senior Software Developer</h1>
        <p>
          Hi, I'm Bhuvan. I'm a passionate web developer with experience in React, JavaScript, and more.
          I enjoy building applications that solve real-world problems and love to explore new technologies.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quidem suscipit natus, incidunt excepturi, in pariatur ipsum a quos voluptatibus quae voluptatem recusandae! Ullam, commodi fugit. Culpa ducimus adipisci modi.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus, nemo illum est rem cupiditate, doloribus dolorem corrupti voluptatum, earum vel eos ipsam aut esse. Natus expedita ipsam velit, alias impedit laudantium maxime provident doloremque. Quis omnis enim sed, consequatur perferendis atque excepturi non blanditiis pariatur est veritatis unde quidem.
        </p>
      </div>
    </div>
  );
};

export default Home;
