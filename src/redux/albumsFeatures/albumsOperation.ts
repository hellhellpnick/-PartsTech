import axios from 'axios';
import { Dispatch } from 'redux';
import { IPostOne } from '../../modules/InterfacePosts';
import {
  getAlbumsSuccess,
  getAlbumSuccess,
  getAlbumError,
  getAlbumRequest,
  getAlbumsPhotosSuccess,
  getAlbumsPhotosError,
  getAlbumsPhotosRequest,
  getAlbumsRequest,
} from './albumsAction';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getAlbums = (setState: any) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(getAlbumsRequest());
  try {
    const { data } = await axios.get<any>(`/albums`);

    dispatch(getAlbumsSuccess(data));
    setState(data);
  } catch (error) {
    dispatch(getAlbumError((error as Error).message));
  }
};

export const getAlbum =
  (id: string | undefined, getAlbum: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getAlbumRequest());

    try {
      const { data } = await axios.get<IPostOne>(`/albums/${id}`);

      dispatch(getAlbumSuccess(data));
      getAlbum(data);
    } catch (error) {
      dispatch(getAlbumError((error as Error).message));
    }
  };

export const getAlbumPhotos =
  (id: any, setPhotos: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getAlbumsPhotosRequest());

    try {
      const { data } = await axios.get(`/albums/${id}/photos`);

      dispatch(getAlbumsPhotosSuccess(data));
      setPhotos(data);
    } catch (error) {
      dispatch(getAlbumsPhotosError((error as Error).message));
    }
  };
