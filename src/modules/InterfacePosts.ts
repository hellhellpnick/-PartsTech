export interface IPost {
  item: {
    id: Number;
    title: string;
    body: string;
    userId: Number;
  };
  type: string;
}

export interface IPostOne {
  id: Number;
  title: string;
  body: string;
  userId: Number;
}

export interface IArrPosts {
  currentItems:
    | [
        {
          id: Number;
          title: string;
          body: string;
          userId: Number;
        },
      ]
    | null;
  type: string;
}

export interface IPaginatedItems {
  itemsPerPage: number;
  postsArr: any;
  type: string;
}

export interface IPostSelected {
  selected: number;
}
