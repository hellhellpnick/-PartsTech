import PaginatedItems from './PaginatedItems';
import {
  SectionPosts,
  SearchInput,
  LabelSearchInput,
  InputPlaceholder,
  BoxCenterPosts,
} from './Posts.styled';
import { getPosts } from '../../redux/postsFeatures/postsOperation';
import { useEffect, useState } from 'react';

const Posts = () => {
  const [isPosts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response.data));
  }, []);

  const filterPosts = (e: any) => {
    getPosts().then((response) =>
      setPosts(
        response.data.filter(
          (item: any) => item.body.includes(e.target.value),
          e.target.value
        )
      )
    );
  };

  return (
    <SectionPosts>
      <BoxCenterPosts>
        <LabelSearchInput htmlFor='SearchInput'>
          <SearchInput type='text' id='SearchInput' onChange={filterPosts} />
          <InputPlaceholder>Search post on text..</InputPlaceholder>
        </LabelSearchInput>
        <PaginatedItems itemsPerPage={4} postsArr={isPosts} />
      </BoxCenterPosts>
    </SectionPosts>
  );
};

export default Posts;
