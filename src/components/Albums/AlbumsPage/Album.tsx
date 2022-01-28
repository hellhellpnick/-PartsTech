import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  PostTitle,
  PostText,
  LinkArrowBack,
} from './../../PostPage/PostPage.styled';
import MiniLoader from '../../Loader/MiniLoader/MiniLoader';
import useActionAlbums from '../../../hooks/useActionAlbums';
import AlbumPhotos from './AlbumPhotos/AlbumPhotos';

const Album = () => {
  const { id } = useParams();
  const { isLoadingAlbum, getActiveAlbum } = useActionAlbums();
  const [isAlbum, setAlbum] = useState<any>({});
  const [isText, setText] = useState('');
  const isContentPost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getActiveAlbum(id, setAlbum);
  }, [id, getActiveAlbum]);

  return (
    <WrapperPost>
      <BoxCenterPost>
        <BoxContentPost ref={isContentPost}>
          {isLoadingAlbum ? (
            <MiniLoader />
          ) : (
            <>
              <LinkArrowBack to={'/albums'}>
                <i className="fas fa-arrow-left"></i>
              </LinkArrowBack>
              <PostTitle>{isAlbum?.title}</PostTitle>
              <PostText>Text Photo</PostText>
              <PostText>{isText}</PostText>
            </>
          )}
        </BoxContentPost>
        <AlbumPhotos isContentPost={isContentPost} isText={setText} />
      </BoxCenterPost>
    </WrapperPost>
  );
};

export default Album;
