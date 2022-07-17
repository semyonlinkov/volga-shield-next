import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import marked from 'marked';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import styles from './NewsPageId.module.scss';

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('news'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(path.join('news', slug + '.md'), 'utf-8');

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	// console.log(content);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<Link href="/">
				<a className="btn btn-back">Go Back</a>
			</Link>
			<div className={styles.wrapper}>
				<h1>{title}</h1>
				{cover_image && (
					<div className={styles.img_wrapper}>
						<Image layout="fill" src={cover_image} alt="title-img" />
					</div>
				)}
				<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				<br />
				<div>Опубликованно {date}</div>
			</div>
		</>
	);
}
