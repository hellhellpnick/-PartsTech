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
}

export interface IPaginatedItems {
  itemsPerPage: number;
  postsArr: any;
}

export interface IPostSelected {
  selected: number;
}
