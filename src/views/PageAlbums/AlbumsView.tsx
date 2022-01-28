import useChangeTitlePage from '../../hooks/useChangeTitlePage';
import Albums from './../../components/Albums/Albums';

const AlbumsView = () => {
  const { ChangeTitle } = useChangeTitlePage();

  ChangeTitle('JSON - albums');

  return <Albums />;
};

export default AlbumsView;
