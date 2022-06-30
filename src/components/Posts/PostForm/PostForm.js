import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="post__form">
      <form>
        <MyInput
          type="text"
          placeholder="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="description"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton className="btn__create" onClick={addNewPost}>
          create post
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
