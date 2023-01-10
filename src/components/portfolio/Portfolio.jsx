import React from 'react';
import IMG1 from '../../assets/puskesmaskelapadua.jpg';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Information System Puskesmas Kelapa Dua Tangerang',
      img: IMG1,
      description:
        'esigned a website for Kelapa Dua Health Center (Puskesmas) in almost 3 months, September until November.',
      technologies: 'HTML | CSS | Javascript | jQuery | PHP | Laravel | Bootstrap | SQL',
      link: 'https://puskesmaskelapadua.com/',
      github: 'https://github.com/WilliThanos',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
