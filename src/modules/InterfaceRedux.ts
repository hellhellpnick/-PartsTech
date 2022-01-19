export interface IActivePost {
  posts: {
    activePost: {
      id: Number;
      title: string;
      body: string;
      userId: Number;
    };
  };
}

export interface IPosts {
  posts: {
    posts: any;
  };
}

export interface IActiveComment {
  posts: {
    activeCommentPost: [{ postId: number; id: number; name: string; email: string; body: string }];
  };
}

export interface ILoadingPost {
  posts: {
    isLoadingPost: boolean;
  };
}

export interface ILoadingComment {
  posts: {
    isLoadingComments: boolean;
  };
}

export interface ILoadingPosts {
  posts: {
    isLoadingPosts: boolean;
  };
}

export interface IDataComment {
  activeCommentPost: [{ postId: number; id: number; name: string; email: string; body: string }];
}
