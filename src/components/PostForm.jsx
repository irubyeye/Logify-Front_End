import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
    //console.log(bodyInputRef.current.value);
  };

  return (
    <form>
      {/* {Управляемый компонентs} */}
      <MyInput
        placeholder="Название поста"
        value={post.title}
        type="text"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
        placeholder="Описание поста"
        value={post.body}
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      {/* Неуправляемый компонент
     <MyInput placeholder="Описание поста" ref={bodyInputRef} type="text" /> */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
