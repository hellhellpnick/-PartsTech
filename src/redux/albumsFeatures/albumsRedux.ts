import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getAlbumsSuccess,
  getAlbumSuccess,
  getAlbumRequest,
  getAlbumsPhotosSuccess,
  getAlbumsPhotosRequest,
  getAlbumsRequest,
} from './albumsAction';

const albums = createReducer<Array<[]>>([], {
  [getAlbumsSuccess.type]: (_, { payload }: PayloadAction<Array<[]>>) => [...payload],
});

const isLoadingAlbums = createReducer(false, {
  [getAlbumsRequest.type]: () => true,
  [getAlbumsSuccess.type]: () => false,
});

const isLoadingAlbum = createReducer(false, {
  [getAlbumRequest.type]: () => true,
  [getAlbumSuccess.type]: () => false,
});

const isLoadingPhotos = createReducer(false, {
  [getAlbumsPhotosRequest.type]: () => true,
  [getAlbumsPhotosSuccess.type]: () => false,
});

export default combineReducers({ albums, isLoadingAlbums, isLoadingAlbum, isLoadingPhotos });
