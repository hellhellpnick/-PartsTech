export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentItem {
  item: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
  isComments: any;
}
