import P from 'prop-types';
import './styles.css'
import React from "react";

export const PostCard = ({title, cover, body, id}) => (
    <div className='post'>
        <img src={cover} alt={title}></img>
        <div className="post-content">
            <h1>{title} {id}</h1>
            <h2>{body}</h2>
        </div>
    </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired
}
