import { useState, useRef, useEffect } from 'react';
import {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  PostTitle,
  PostText,
  LinkArrowBack,
} from './PostPage.styled';
import MiniLoader from '../Loader/MiniLoader/MiniLoader';
import useActionWithRedux from '../../hooks/useActionWithRedux';
import { routes } from '../../Router';
import { useParams } from 'react-router-dom';
import Comments from './Comment/Comments';

const PostPage = () => {
  const { id } = useParams();
  const { loadingPost, getActivePost, getComments } = useActionWithRedux();
  const [isPost, setPost] = useState<any>({});
  const isContentPost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getActivePost(id, setPost);
  }, [id, getActivePost, getComments]);

  return (
    <WrapperPost>
      <BoxCenterPost>
        <BoxContentPost ref={isContentPost}>
          {loadingPost ? (
            <MiniLoader />
          ) : (
            <>
              <LinkArrowBack to={routes.posts.main}>
                <i className="fas fa-arrow-left"></i>
              </LinkArrowBack>
              <PostTitle>{isPost?.title}</PostTitle>
              <PostText>{isPost?.body}</PostText>
            </>
          )}
        </BoxContentPost>
        <Comments isContentPost={isContentPost} />
      </BoxCenterPost>
    </WrapperPost>
  );
};

export default PostPage;
