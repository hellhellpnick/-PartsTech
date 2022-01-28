import Posts from '../../components/Posts/Posts';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

const PostsView = () => {
  const { ChangeTitle } = useChangeTitlePage();

  ChangeTitle('JSON - posts');

  return <Posts />;
};

export default PostsView;
