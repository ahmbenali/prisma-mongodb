interface Props {
	post: Post;
}

export default function Post({ post: { title, content, author } }: Props) {
	return (
		<div className="p-5 bg-slate-500">
			<h1 className="font-bold">{title}</h1>
			<p>{author.name}</p>
			<p>{content}</p>
		</div>
	);
}
