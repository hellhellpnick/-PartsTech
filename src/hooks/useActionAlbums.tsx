import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, getAlbumPhotos, getAlbum } from '../redux/albumsFeatures/albumsOperation';

const useActionAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state: any) => state.albums.albums);
  const isLoadingAlbums = useSelector((state: any) => state.albums.isLoadingAlbums);
  const isLoadingAlbum = useSelector((state: any) => state.albums.isLoadingAlbum);
  const isLoadingPhotos = useSelector((state: any) => state.albums.isLoadingPhotos);

  const getAllAlbums = useCallback(
    (setState: any) => {
      dispatch(getAlbums(setState));
    },
    [dispatch],
  );

  const getPhotos = useCallback(
    (id: any, setPhotos: any) => {
      dispatch(getAlbumPhotos(id, setPhotos));
    },
    [dispatch],
  );

  const getActiveAlbum = useCallback(
    (id: any, setAlbum: any) => {
      dispatch(getAlbum(id, setAlbum));
    },
    [dispatch],
  );

  return {
    getAllAlbums,
    getPhotos,
    getActiveAlbum,
    albums,
    isLoadingAlbums,
    isLoadingPhotos,
    isLoadingAlbum,
  };
};

export default useActionAlbums;
