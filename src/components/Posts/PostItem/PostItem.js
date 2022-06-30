import React from "react";
import "./PostItem.css";
import Main from "../../Main/Main";
import MyButton from "../../UI//button/MyButton";
import { useNavigate } from "react-router-dom";

const Post = ({ posts, remove, title }) => {
  const navigate = useNavigate();

  const makeFirstLetterUpper = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  if (!posts.length) {
    return <h1 className="post__title">No posts</h1>;
  }

  return (
    <Main>
      <div className="post__container">
        <h1 className="post__title">{title}</h1>
        <ul className="post__list">
          {posts.map((post, index) => (
            <li key={post.id} className="post__item">
              <div className="post__content">
                <h2 className="post__subtitle">
                  {post.id}. {makeFirstLetterUpper(post.title)}
                </h2>
                <p className="post__text">{post.body}</p>
              </div>
              <MyButton
                className="btn__open"
                onClick={() => {
                  navigate(`/posts/${post.id}`);
                }}
              >
                open
              </MyButton>
              <MyButton className="btn__remove" onClick={() => remove(post)}>
                delete
              </MyButton>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
};

export default Post;
