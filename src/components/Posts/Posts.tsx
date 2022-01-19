import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PaginatedItems from './PaginatedItems';
import { SectionPosts, BoxCenterPosts } from './Posts.styled';
import useActionWithRedux from '../../hooks/useActionWithRedux';
import { getPosts } from '../../redux/postsFeatures/postsOperation';
import { getPostsSuccess, getPostsRequest } from '../../redux/postsFeatures/postsAction';
import { MessageText } from '../PostPage/PostPage.styled';
import { MiniLoader } from '../Loader';
import { InputPost } from './Input';
import { IPostOne } from '../../modules/InterfacePosts';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loadinPosts } = useActionWithRedux();
  const [isPosts, setPosts] = useState(posts);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
      dispatch(getPostsRequest());
      dispatch(getPostsSuccess(response.data));
    });
  }, [dispatch]);

  const filterPosts = (e: React.FormEvent<HTMLInputElement>) => {
    setPosts(posts.filter((item: IPostOne) => item.body.includes(e.currentTarget.value)));
  };

  return (
    <SectionPosts>
      <BoxCenterPosts>
        <InputPost
          nameInput="searchInput"
          textInput="Search post on text.."
          addFunction={filterPosts}
        />
        {loadinPosts ? (
          <MiniLoader />
        ) : !!isPosts.length ? (
          <PaginatedItems itemsPerPage={4} postsArr={isPosts} />
        ) : (
          <MessageText>Post not found</MessageText>
        )}
      </BoxCenterPosts>
    </SectionPosts>
  );
};

export default Posts;
