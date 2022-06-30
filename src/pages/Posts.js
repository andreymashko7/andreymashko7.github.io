import React, { useState, useEffect } from 'react';
import PostItem from '../components/Posts/PostItem/PostItem';
import { PostService } from './../Api/PostService';
import PostForm from '../components/Posts/PostForm/PostForm';
import PostFilter from './../components/Posts/PostFilter/PostFilter';
import '../styles/styles.css';
import Modal from './../components/UI/MyModal/Modal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts.js';
import { BallTriangle } from 'react-loader-spinner';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import PostError from './../components/Posts/PostError/PostError';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      await PostService.getAll(limit, page).then(response => {
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
      });
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit]);

  const changePage = page => {
    setPage(page);
    fetchPosts(limit, page);
  };

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    //  <main>
    <div className="posts__container post">
      <MyButton className="btn__create" onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
      />

      {isPostLoading ? (
        <BallTriangle color="tomato" height={100} width={100} />
      ) : (
        <PostItem
          posts={searchAndSortedPosts}
          remove={removePost}
          title="Examples of posts"
        />
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <PostError postError={postError} />
    </div>
    //  </main>
  );
};

export default Posts;
