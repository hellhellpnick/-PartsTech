export interface IPost {
  item: {
    id: Number;
    title: string;
    body: string;
    userId: Number;
  };
}

export interface IPostOne {
  id: Number;
  title: string;
  body: string;
  userId: Number;
}
