import React from 'react';
import './Post.scss';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const post = (props: {
  name: React.ReactNode;
  description: React.ReactNode;
  category: React.ReactNode;
}) => (
  <article className="Post">
    <section className="post-image">
      {/* <img src={props.?} alt="Company Logo"/> */}
    </section>
    <section className="post-data">
      <h2>{props.name}</h2>
      <p className="post-description">{props.description}</p>
      <p className="post-category">
        <FontAwesomeIcon
          icon={faTags}
          flip="horizontal"
          className="post-icon"
        />
        {props.category}
      </p>
    </section>
  </article>
);

export default post;
