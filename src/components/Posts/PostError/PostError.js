import React from "react";

const PostError = ({ postError }) => {
  return (
    <>
      {postError && (
        <p className="post__error">Whoops, something went wrong: {postError}</p>
      )}
    </>
  );
};

export default PostError;
