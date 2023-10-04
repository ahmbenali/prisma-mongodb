type Post = {
  id: string,
  title: string,
  content?: string,
  published: boolean,
  author?: User,
}

type User = {
  id: string,
  name?: string,
  email: string,
  posts: Post[],
}