import { lazy, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import useActionWithRedux from './hooks/useActionWithRedux';

const PagePost = lazy(() => import('./views/PagePost/PostView'));
const PagePosts = lazy(() => import('./views/PagePosts/PostsView'));
const PageNotFound = lazy(() => import('./views/PageNotFound/NotFoundView'));

const routes = {
  posts: {
    main: '/',
    post: '/post/:id',
  },
  notFound: '*',
};

const Router = () => {
  const history = useHistory();
  const { activePost } = useActionWithRedux();

  useEffect(() => {
    if (
      Object.keys(activePost).length === 0 &&
      history.location.pathname.slice(0, 6) === '/post/'
    ) {
      history.push(routes.posts.main);
    }
  }, [history, activePost]);

  return (
    <Switch>
      <Route path={routes.posts.post}>
        <PagePost />
      </Route>
      <Route path={routes.posts.main}>
        <PagePosts />
      </Route>
      <Route path={routes.notFound}>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export { routes, Router };
