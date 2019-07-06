import React from "react";
import PostHeader from "../PostHeader";
// import { Container } from './styles';

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.pic}
      name={props.data.name}
      when={props.data.when}
    />
    <p>{props.data.post}</p>
  </div>
);

export default Post;
