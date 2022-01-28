import NotFound from '../../components/NotFound/NotFound';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

const NotFoundView = () => {
  const { ChangeTitle } = useChangeTitlePage();

  ChangeTitle('Not found');

  return <NotFound />;
};

export default NotFoundView;
