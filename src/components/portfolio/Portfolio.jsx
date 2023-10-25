import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio2.jpg";
import IMG2 from "../../assets/Portfolio2.jpg";
import IMG3 from "../../assets/Portfolio3.jpg";
import IMG4 from "../../assets/Portfolio4.jpg";
import IMG5 from "../../assets/Portfolio5.jpg";
import IMG6 from "../../assets/Portfolio6.jpg";

const data = [
  {
    id: 1,
    title: "Front-End E-magazine Web App with HTML, CSS, JavaScript Only",
    image: IMG1,
    github: "https://github.com/SrijanSamridh/FrontEnd-E-magazine-site-",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    title: "Charts templates & infographics in Figma",
    image: IMG2,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    title: "Figma dashboard UI kit for data design Web Apps",
    image: IMG3,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    title: "Maintaining Tasks and tracking progress",
    image: IMG4,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    title: "Charts templates & infographics in Figma",
    image: IMG5,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    title: "Charts templates & infographics in Figma",
    image: IMG6,
    github: "https://github.com",
    liveDemo: "https://dribbble.com/Alien_pixels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, liveDemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={liveDemo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
