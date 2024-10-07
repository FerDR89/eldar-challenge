export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type TCreatePost = Pick<IPost, "body" | "title">;
export type TCreatePostService = TCreatePost & Pick<IPost, "userId">;

export type TUpdatePost = Pick<IPost, "id"> &
  Partial<Pick<IPost, "body" | "title">>;
