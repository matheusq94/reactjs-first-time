import React from "react";

// import { Container } from './styles';

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>{props.when}</span>
    </div>
  </div>
);

export default PostHeader;
