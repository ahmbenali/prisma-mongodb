interface Props {
	id: string;
	title: string;
	authorName: string;
	content: string;
	published: boolean;
}

export default function Post({
	id,
	title,
	authorName,
	content,
	published,
}: Props) {
	return (
		<div>
			<h1  className='text-2xl text-slate-300' >{title}</h1>
		</div>
	);
}
