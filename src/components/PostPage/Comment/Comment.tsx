import { WrapperComment, NameComment, BodyComment, BtnDeleteComment } from './Comment.styled';
import { ICommentItem, IComment } from './../../../modules/InterfaceComment';
import useActionWithRedux from '../../../hooks/useActionWithRedux';

const Comment = ({ item }: ICommentItem) => {
  const { activeComment, deleteCommentPost } = useActionWithRedux();

  const deleteComment = () => {
    let newArr: Array<IComment> = [];

    activeComment.map((elem: IComment) => {
      if (elem.id !== item.id) {
        return newArr.push(elem);
      }

      return true;
    });
    deleteCommentPost(newArr);
  };

  return (
    <WrapperComment>
      <BtnDeleteComment type="button" onClick={deleteComment}>
        <i className="fas fa-times"></i>
      </BtnDeleteComment>
      <NameComment>{item.name}</NameComment>
      <BodyComment>{item.body}</BodyComment>
    </WrapperComment>
  );
};

export default Comment;
