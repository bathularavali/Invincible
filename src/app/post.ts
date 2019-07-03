export class Post {
  _id: string;
  hashtag: string;
  caption: string;
  imagePath: string;
  user: {
    userId: string;
    username: string;
  };
}
