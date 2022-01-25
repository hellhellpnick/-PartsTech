import { WrapperComment, NameComment, BodyComment } from './Comments.styled';
import { ICommentItem } from './../../../modules/InterfaceComment';

const Comment = ({ item, isComments }: ICommentItem) => {
  return (
    <WrapperComment>
      <NameComment>{item.name}</NameComment>
      <BodyComment>{item.body}</BodyComment>
    </WrapperComment>
  );
};

export default Comment;
