import { WrapperComment, NameComment, BodyComment } from './Comment.styled';
import { IComment } from './../../../modules/InterfaceComment';

const Comment = ({ item }: IComment) => {
  return (
    <WrapperComment>
      <NameComment>{item.name}</NameComment>
      <BodyComment>{item.body}</BodyComment>
    </WrapperComment>
  );
};

export default Comment;
