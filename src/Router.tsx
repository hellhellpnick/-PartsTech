import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PagePost = lazy(() => import('./views/PagePost/PostView'));
const PageAlbums = lazy(() => import('./views/PageAlbums/AlbumsView'));
const PageAlbum = lazy(() => import('./views/PageAlbum/AlbumView'));
const PagePosts = lazy(() => import('./views/PagePosts/PostsView'));
const PageNotFound = lazy(() => import('./views/PageNotFound/NotFoundView'));
const Layout = lazy(() => import('./components/Header/Header'));

const routes = {
  main: '/',
  posts: {
    main: 'posts',
    post: 'posts/post/:id',
  },
  albums: {
    main: 'albums',
    album: 'albums/album/:id',
  },
  users: {
    main: 'users',
    album: 'users/user/:id',
  },
  notFound: '*',
};

const Router = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Layout />}>
        <Route path={routes.posts.main} element={<PagePosts />} />
        <Route path={routes.posts.post} element={<PagePost />} />
        <Route path={routes.albums.main} element={<PageAlbums />} />
        <Route path={routes.albums.album} element={<PageAlbum />} />
        <Route path={routes.notFound} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export { routes, Router };
