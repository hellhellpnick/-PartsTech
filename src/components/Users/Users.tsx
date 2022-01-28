import { useState, useEffect } from 'react';
import PaginatedItems from '../Posts/PaginatedItems';
import { SectionPosts, BoxCenterPosts } from './../Posts/Posts.styled';
import { MessageText } from '../PostPage/Comment/Comments.styled';
import MiniLoader from '../Loader/MiniLoader/MiniLoader';
import InputPost from '../Posts/Input/InputPost';
import { useSearchParams } from 'react-router-dom';
import useActionAlbums from '../../hooks/useActionAlbums';

const Users = () => {
  /*   const { users, getAllUsers, isLoadingUsers } = useActionAlbums();
  const [searchParams, setSearchParams] = useSearchParams();
  const albumQuery = searchParams.get('users') || '';
  const [isUsers, setUsers] = useState([{ title: '', id: 1 }] || users);
  const [isSearch, setSearch] = useState(albumQuery);

  useEffect(() => {
    getAllUsers(setUsers);
  }, [getAllUsers]);

  const filterPosts = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
    setSearchParams({ users: value });
  }; */

  return (
    <SectionPosts>
      {/* 
      <BoxCenterPosts>
        <form autoComplete="off">
          <InputPost
            nameInput={isSearch}
            textInput="Search users on text.."
            isFixed={true}
            addFunction={filterPosts}
          />
        </form>
        {isLoadingUsers ? (
          <MiniLoader />
        ) : !!isUsers.length ? (
          <PaginatedItems
            type={'Users'}
            itemsPerPage={4}
            postsArr={isUsers.filter((user) => user.title.includes(albumQuery))}
          />
        ) : (
          <MessageText>Users not found</MessageText>
        )}
      </BoxCenterPosts> */}
    </SectionPosts>
  );
};

export default Users;
