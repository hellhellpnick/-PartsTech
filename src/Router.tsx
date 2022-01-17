import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PagePost = lazy(() => import('./views/PagePost/PostView'));
const PagePosts = lazy(() => import('./views/PagePosts/PostsView'));

const routes = {
  posts: {
    main: '/',
    post: '/post/:id',
  },
};

const Router = () => {
  return (
    <Switch>
      <Route path={routes.posts.post}>
        <PagePost />
      </Route>
      <Route path={routes.posts.main}>
        <PagePosts />
      </Route>
    </Switch>
  );
};

export { routes, Router };
