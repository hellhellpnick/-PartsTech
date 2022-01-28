import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BoxCommentPost,
  TitleComments,
  MessageText,
} from '../../../PostPage/Comment/Comments.styled';
import Photo from './Photo';
import useActionAlbums from '../../../../hooks/useActionAlbums';
import MiniLoader from '../../../Loader/MiniLoader/MiniLoader';

const AlbumPhotos = ({ isContentPost, isText }: any) => {
  const { id } = useParams();
  const { isLoadingPhotos, getPhotos } = useActionAlbums();
  const [isPhotos, setPhotos] = useState<any>({});

  useEffect(() => {
    getPhotos(id, setPhotos);
  }, [getPhotos, id]);

  return (
    <BoxCommentPost isHeight={isContentPost.current?.offsetHeight}>
      <TitleComments>Photos</TitleComments>
      {isLoadingPhotos ? (
        <MiniLoader />
      ) : !!isPhotos.length ? (
        isPhotos.map((item: any, index: number) => (
          <Photo item={item} key={index} isText={isText} />
        ))
      ) : (
        <MessageText>No Photos</MessageText>
      )}
    </BoxCommentPost>
  );
};

export default AlbumPhotos;
