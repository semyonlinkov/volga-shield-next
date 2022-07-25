import { Pagination } from 'antd';
import styles from './NewsPage.module.scss';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router';

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import Head from 'next/head';

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join('news'));

	// Get slug and frontmatter from posts
	const news = files.map((filename) => {
		// Create slug
		const slug = filename.replace('.md', '');

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(path.join('news', filename), 'utf-8');

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			news: news.reverse(),
		},
	};
}

const NewsPage = ({ news }) => {
	const router = useRouter();

	const [isBurgerActive, setIsBurgerActive] = useState(false);
	const [newsOnPage, setNewsOnPage] = useState(news.slice(0, 6));
	const [current, setCurrent] = useState(1);

	const onChange = (page) => {
		// console.log(page);
		setNewsOnPage(news.slice(page === 1 ? 0 : page * 6 - 6, page * 6));
		setCurrent(page);
	};

	return (
		<>
			<Head>
				<title>Новости</title>
			</Head>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<section className={styles.news_page_wrapper}>
				<div className={styles.news_action_panel}>
					<h1>Новости</h1>
				</div>
				<div className={styles.news_cards_wrapper}>
					<div className={styles.news_cards_container}>
						{newsOnPage.map(({ slug, frontmatter }) => (
							<div className={styles.news_card} key={slug} onClick={() => router.push(`/news/${slug}`)}>
								<div className={styles.news_card_img_wrapper}>
									{frontmatter.cover_image && (
										<div className={styles.news_card_img}>
											<Image
												src={frontmatter.cover_image}
												layout="fill"
												objectFit="cover"
												alt="news-cover"
											/>
										</div>
									)}
								</div>
								<h2 className={styles.news_card_title}>{frontmatter.title}</h2>
								<p className={styles.news_card_text_content}>{frontmatter.excerpt}</p>
								<p className={styles.news_card_date}>Публикация от {frontmatter.date}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.pagination}>
					<Pagination
						current={current}
						onChange={onChange}
						showSizeChanger={false}
						total={Math.ceil((news.length * 10) / 6)}
					/>
				</div>
			</section>
		</>
	);
};

export default NewsPage;
