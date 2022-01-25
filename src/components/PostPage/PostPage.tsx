import { useState, useRef } from 'react';
import {
  WrapperPost,
  BoxCenterPost,
  BoxContentPost,
  BoxCommentPost,
  PostTitle,
  PostText,
  TitleComments,
  WrapperInputSend,
  MessageText,
  LinkArrowBack,
  BtnSendComment,
} from './PostPage.styled';
import MiniLoader from '../Loader/MiniLoader/MiniLoader';
import Comment from './Comment/Comment';
import useActionWithRedux from '../../hooks/useActionWithRedux';
import { routes } from '../../Router';
import InputPost from '../Posts/Input/InputPost';
import { IComment } from '../../modules/InterfaceComment';

const PostPage = () => {
  const { activePost, activeComment, loadingComment, loadingPost, addCommentPost } =
    useActionWithRedux();
  const [isScrollComment, setScrollComment] = useState(0);
  const [isTitleComment, setTitleComment] = useState('');
  const [isTextComment, setTextComment] = useState('');
  const isContentPost = useRef<HTMLDivElement>(null);

  const scrollBlock = (e: React.UIEvent<HTMLElement>) => {
    setScrollComment(e.currentTarget.scrollTop);
  };

  const availableText = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleComment(e.currentTarget.value);
  };
  const availableTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setTextComment(e.currentTarget.value);
  };

  const addComment = () => {
    addCommentPost([
      ...activeComment,
      { postId: 1, id: 6, name: isTitleComment, email: 'Hayden@althea.biz', body: isTextComment },
    ]);
  };

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
              <PostTitle>{activePost?.title}</PostTitle>
              <PostText>{activePost?.body}</PostText>
            </>
          )}
        </BoxContentPost>
        <BoxCommentPost onScroll={scrollBlock} isHeight={isContentPost.current?.offsetHeight}>
          <TitleComments>Comments</TitleComments>
          <WrapperInputSend isScroll={isScrollComment}>
            <InputPost
              nameInput="titleInput"
              textInput="Title comment.."
              addFunction={availableTitle}
              isFixed={true}
            />
            <InputPost
              nameInput="textInput"
              textInput="Text comment.."
              addFunction={availableText}
              isFixed={true}
            />
            <BtnSendComment onClick={addComment}>Send Comment</BtnSendComment>
          </WrapperInputSend>
          {loadingComment ? (
            <MiniLoader />
          ) : !!activeComment.length ? (
            activeComment.map((item: IComment, index: number) => (
              <Comment item={item} key={index} />
            ))
          ) : (
            <MessageText>No comments</MessageText>
          )}
        </BoxCommentPost>
      </BoxCenterPost>
    </WrapperPost>
  );
};

export default PostPage;
