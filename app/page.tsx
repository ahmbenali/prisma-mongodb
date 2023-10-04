import Post from '@/components/Post';
import { getPosts } from '@/lib/posts';

export default async function Home() {
	const posts = await getPosts();
	// console.log('POSTS: ', posts);

	return (
		<div>
			<h1 className="text-2xl font-bold text-center text-teal-600 mb-11">
				List of Posts Today
			</h1>
			<ul className="divide-y  divide-opacity-95">
				{posts?.map(post => (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						content={post.content || ''}
						authorName={post.author?.name || ''}
						published={post.published || false}
					/>
				))}
			</ul>
		</div>
	);
}

// mongodb+srv://admin:<password>@cluster0.sf92cwn.mongodb.net/
// sudo npm i -g vercel@latest
// vercel link
// vercel env pull .env.local
