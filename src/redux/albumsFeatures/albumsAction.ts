import { createAction } from '@reduxjs/toolkit';

const getAlbumsRequest = createAction('albums/getAlbumsRequest');
const getAlbumsSuccess = createAction('albums/getAlbumsSuccess', (date) => ({
  payload: date,
}));

const getAlbumSuccess = createAction('albums/palbumgetAlbumSuccess', (date) => ({
  payload: date,
}));
const getAlbumError = createAction('albums/album/getAlbumError', (date) => ({
  payload: date,
}));
const getAlbumRequest = createAction('albums/album/getAlbumRequest');

const getAlbumsPhotosSuccess = createAction('albums/album/getAlbumsPhotosSuccess', (date) => ({
  payload: date,
}));
const getAlbumsPhotosError = createAction('albums/album/getAlbumsPhotosError', (date) => ({
  payload: date,
}));
const getAlbumsPhotosRequest = createAction('albums/album/getAlbumsPhotosRequest');

export {
  getAlbumsSuccess,
  getAlbumSuccess,
  getAlbumError,
  getAlbumRequest,
  getAlbumsPhotosSuccess,
  getAlbumsPhotosError,
  getAlbumsPhotosRequest,
  getAlbumsRequest,
};
