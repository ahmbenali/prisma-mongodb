import prisma from '@/lib/prisma';

interface Props {
	params: { postId: string };
}

export default async function PostDetails({ params: { postId } }: Props) {
	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { author: true },
	});

	if (!post) return <h1>No post found</h1>;

	const { title, content, author } = post;

	return (
		<div className="p-5 bg-slate-500">
			<h1 className="font-bold">{title}</h1>
			<p>{author?.name}</p>
			<p>{content}</p>
		</div>
	);
}
