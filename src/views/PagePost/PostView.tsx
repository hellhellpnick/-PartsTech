import PostPage from '../../components/PostPage/PostPage';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

const PostView = () => {
  const { ChangeTitle } = useChangeTitlePage();

  ChangeTitle('JSON - post');

  return <PostPage />;
};

export default PostView;
