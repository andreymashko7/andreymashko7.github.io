import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./../hooks/useFetching";
import { PostService } from "./../Api/PostService";
import { BallTriangle } from "react-loader-spinner";
import PostError from "./../components/Posts/PostError/PostError";

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const params = useParams();

  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    await PostService.getById(id).then((response) => {
      setPost(response.data);
    });
  });

  const [fetchCommentsById, isComLoading, comError] = useFetching(
    async (id) => {
      await PostService.getCommentsById(id).then((response) => {
        setComments(response.data);
      });
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="post-id-page__container">
      {isPostLoading ? (
        <BallTriangle color="tomato" height={100} width={100} />
      ) : (
        <h1>
          {post.id}. {post.title}
        </h1>
      )}

      <PostError postError={postError} />

      {isComLoading ? (
        <BallTriangle color="tomato" height={100} width={100} />
      ) : (
        comments.map((com) => (
          <div style={{ marginTop: "30px" }} key={com.id}>
            <h2>{com.email}</h2>
            <p>{com.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default PostIdPage;
