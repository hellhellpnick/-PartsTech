import { useEffect, useState } from 'react';
import { IComment } from '../../../modules/InterfaceComment';
import MiniLoader from '../../Loader/MiniLoader/MiniLoader';
import Comment from './Comment';
import { TitleComments, MessageText, BoxCommentPost } from './Comments.styled';
import useActionWithRedux from '../../../hooks/useActionWithRedux';
import { useParams } from 'react-router-dom';

const Comments = ({ isContentPost }: any) => {
  const { id } = useParams();
  const { loadingComment, getComments } = useActionWithRedux();

  const [isComments, setComments] = useState<any>({});

  useEffect(() => {
    getComments(id, setComments);
  }, [getComments, id]);

  return (
    <BoxCommentPost isHeight={isContentPost.current?.offsetHeight}>
      <TitleComments>Comments</TitleComments>
      {loadingComment ? (
        <MiniLoader />
      ) : !!isComments.length ? (
        isComments.map((item: IComment, index: number) => (
          <Comment item={item} key={index} isComments={isComments} />
        ))
      ) : (
        <MessageText>No comments</MessageText>
      )}
    </BoxCommentPost>
  );
};

export default Comments;
