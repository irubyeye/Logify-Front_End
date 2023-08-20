import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>List is empty</h2>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}