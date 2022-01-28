import { useState, useEffect } from 'react';
import PaginatedItems from '../Posts/PaginatedItems';
import { SectionPosts, BoxCenterPosts } from './../Posts/Posts.styled';
import { MessageText } from '../PostPage/Comment/Comments.styled';
import MiniLoader from '../Loader/MiniLoader/MiniLoader';
import InputPost from '../Posts/Input/InputPost';
import { useSearchParams } from 'react-router-dom';
import useActionAlbums from '../../hooks/useActionAlbums';

const Albums = () => {
  const { albums, getAllAlbums, isLoadingAlbums } = useActionAlbums();
  const [searchParams, setSearchParams] = useSearchParams();
  const albumQuery = searchParams.get('albums') || '';
  const [isAlbums, setAlbums] = useState([{ title: '', id: 1 }] || albums);
  const [isSearch, setSearch] = useState(albumQuery);

  useEffect(() => {
    getAllAlbums(setAlbums);
  }, [getAllAlbums]);

  const filterPosts = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
    setSearchParams({ albums: value });
  };

  return (
    <SectionPosts>
      <BoxCenterPosts>
        <form autoComplete="off">
          <InputPost
            nameInput={isSearch}
            textInput="Search albums on text.."
            isFixed={true}
            addFunction={filterPosts}
          />
        </form>
        {isLoadingAlbums ? (
          <MiniLoader />
        ) : !!isAlbums.length ? (
          <PaginatedItems
            type={'albums'}
            itemsPerPage={4}
            postsArr={isAlbums.filter((album) => album.title.includes(albumQuery))}
          />
        ) : (
          <MessageText>Albums not found</MessageText>
        )}
      </BoxCenterPosts>
    </SectionPosts>
  );
};

export default Albums;
