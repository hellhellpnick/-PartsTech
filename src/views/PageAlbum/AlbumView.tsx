import Album from '../../components/Albums/AlbumsPage/Album';
import useChangeTitlePage from '../../hooks/useChangeTitlePage';

const AlbumView = () => {
  const { ChangeTitle } = useChangeTitlePage();

  ChangeTitle('JSON - album');
  return <Album />;
};

export default AlbumView;
