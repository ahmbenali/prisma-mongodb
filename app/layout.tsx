import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Prisma App',
	description: 'Fullstack app with prisma, mongodb, typescript and tailwind',
	icons: {
		icon: 'icon.ico',
	},
};

interface Props {
	children: ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={inter.className}>
				<main className="max-w-5xl mx-auto p-7 bg-[#151c28] min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}
