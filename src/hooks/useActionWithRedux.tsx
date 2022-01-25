import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getPost, getPostComments, getPosts } from './../redux/postsFeatures/postsOperation';
import { getCommentsSuccess } from './../redux/postsFeatures/postsAction';
import {
  IActivePost,
  IActiveComment,
  ILoadingPost,
  ILoadingComment,
  ILoadingPosts,
  IPosts,
} from '../modules/InterfaceRedux';

const useActionWithRedux = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: IPosts) => state.posts.posts);
  const activePost = useSelector((state: IActivePost) => state.posts.activePost);
  const activeComment = useSelector((state: IActiveComment) => state.posts.activeCommentPost);
  const loadingPost = useSelector((state: ILoadingPost) => state.posts.isLoadingPost);
  const loadingComment = useSelector((state: ILoadingComment) => state.posts.isLoadingComments);
  const loadinPosts = useSelector((state: ILoadingPosts) => state.posts.isLoadingPosts);

  const getActivePost = useCallback(
    (id: string | undefined, setPost: any) => {
      dispatch(getPost(id, setPost));
    },
    [dispatch],
  );

  const getComments = useCallback(
    (id: any, setComment: any) => {
      dispatch(getPostComments(id, setComment));
    },
    [dispatch],
  );

  const addCommentPost = useCallback(
    (data: any) => {
      dispatch(getCommentsSuccess(data));
    },
    [dispatch],
  );

  const deleteCommentPost = useCallback(
    (data: any) => {
      dispatch(getCommentsSuccess(data));
    },
    [dispatch],
  );

  const getAllPosts = useCallback(
    (setState: any) => {
      dispatch(getPosts(setState));
    },
    [dispatch],
  );

  return {
    posts,
    activePost,
    activeComment,
    loadingPost,
    loadingComment,
    loadinPosts,
    getActivePost,
    getComments,
    addCommentPost,
    deleteCommentPost,
    getAllPosts,
  };
};

export default useActionWithRedux;
