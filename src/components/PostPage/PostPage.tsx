import { useEffect, useState, useRef } from 'react';
import {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  BoxCommentPost,
  PostTitle,
  PostText,
  TitleComments,
  WrapperInputSend,
} from './PostPage.styled';
import { Comment } from './Comment';
import { getPost, getPostComments } from '../../redux/postsFeatures/postsOperation';
import { IPostOne } from './../../modules/InterfacePosts';

const PostPage = () => {
  const [isPost, setPost] = useState<IPostOne>();
  const [isPostComments, setPostComments] = useState([]);
  const [isScrollComment, setScrollComment] = useState(0);
  const isContentPost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPost(1).then((response) => setPost(response.data));
    getPostComments(1).then((response) => setPostComments(response.data));
  }, []);

  const scrollBlock = (e: any) => {
    setScrollComment(e.target.scrollTop);
  };

  return (
    <WrapperPost>
      <BoxCenterPost>
        <BoxContentPost ref={isContentPost}>
          <PostTitle>{isPost?.title}</PostTitle>
          <PostText>{isPost?.body}</PostText>
        </BoxContentPost>
        <BoxCommentPost onScroll={scrollBlock} isHeight={isContentPost.current?.offsetHeight}>
          <TitleComments>Comments</TitleComments>
          <WrapperInputSend isScroll={isScrollComment}>asd</WrapperInputSend>
          {!!isPostComments.length &&
            isPostComments.map((item: any, index: number) => <Comment item={item} key={index} />)}
        </BoxCommentPost>
      </BoxCenterPost>
    </WrapperPost>
  );
};

export default PostPage;
