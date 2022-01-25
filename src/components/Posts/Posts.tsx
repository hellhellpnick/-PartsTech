import { useState, useEffect } from 'react';
import PaginatedItems from './PaginatedItems';
import { SectionPosts, BoxCenterPosts } from './Posts.styled';
import useActionWithRedux from '../../hooks/useActionWithRedux';
import { MessageText } from '../PostPage/Comment/Comments.styled';
import MiniLoader from '../Loader/MiniLoader/MiniLoader';
import InputPost from './Input/InputPost';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
  const { posts, loadinPosts, getAllPosts } = useActionWithRedux();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const [isPosts, setPosts] = useState([{ title: '', id: 1 }] || posts);
  const [isSearch, setSearch] = useState(postQuery);

  useEffect(() => {
    getAllPosts(setPosts);
  }, [getAllPosts]);

  const filterPosts = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
    setSearchParams({ post: value });
  };

  return (
    <SectionPosts>
      <BoxCenterPosts>
        <form autoComplete="off">
          <InputPost
            nameInput={isSearch}
            textInput="Search post on text.."
            isFixed={true}
            addFunction={filterPosts}
          />
        </form>
        {loadinPosts ? (
          <MiniLoader />
        ) : !!isPosts.length ? (
          <PaginatedItems
            itemsPerPage={4}
            postsArr={isPosts.filter((post) => post.title.includes(postQuery))}
          />
        ) : (
          <MessageText>Post not found</MessageText>
        )}
      </BoxCenterPosts>
    </SectionPosts>
  );
};

export default Posts;
