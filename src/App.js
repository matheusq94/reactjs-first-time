import React, { Component } from "react";
import Header from "./components/Header";
// import { Container } from './styles';
import Post from "./components/Post";
export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        name: "Vitória",
        pic:
          "https://s.pngkit.com/png/small/10-100123_female-student-image-purepng-smiling-woman-transparent-background.png",
        when: "há 10 min",
        post: "Hello, this is an post example"
      },
      {
        id: 1,
        name: "Nicolas Gaiola",
        pic:
          "http://www.tattoostime.com/images/369/nicolas-cage-portrait-tattoo-on-neck.jpg",
        when: "há 9 min",
        post: "Não perca a melhor coisa da sua vida só porque não tem certeza."
      },
      {
        id: 2,
        name: "Sombra",
        pic:
          "data:image/png;base64,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",
        when: "há 8 min",
        post: "Ok, Ratinho!"
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header>FaceTruque</Header>
        <div className="post-container">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    );
  }
}
