export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type TUpdatePost = Pick<IPost, "id"> &
  Partial<Pick<IPost, "body" | "title">>;
