import React from 'react';

import './card.scss';

export default function Card(card) {
  const { name, description, github, demo, image, imageLink, tech } = card;

  return (
    <div className="card">
      <div className="card-image">
        <a href={imageLink} target="_blank" rel="noreferrer">
          <img src={image} alt={image}></img>
        </a>
      </div>

      <div className="card-body">
        <div className="card-text">
          <p className="project-name">{name}</p>
          <div className="text-float-left">
            <p className="project-description">{description}</p>
          </div>
          <div className="text-float-right">
            <p className="post-time"></p>

            <p className="tech-stack"></p>

            <p className="tech-stack tech">{tech}</p>
          </div>
        </div>
        <div className="card-footer">
          <a href={github} target="_blank" rel="noreferrer">
            <button className="btn">Github</button>
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            <button className="btn btn-outline" name="id">
              Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
