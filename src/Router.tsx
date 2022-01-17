import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PagePosts = lazy(() => import('./views/PagePosts/PostsView'));
const PagePost = lazy(() => import('./views/PagePost/PostView'));

const routes = {
  posts: {
    main: '/',
    post: '/:id',
  },
};

const Router = () => {
  return (
    <Switch>
      <Route path={routes.posts.main}>
        <PagePosts />
      </Route>
      <Route path={routes.posts.main}>
        <PagePost />
      </Route>
    </Switch>
  );
};

export { routes, Router };
