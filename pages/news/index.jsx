import { Input, Pagination } from 'antd';
import styles from './NewsPage.module.scss';
// import IMGNews1 from '../../public/images/news1.jpg';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import { useRouter } from 'next/router';

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const { Search } = Input;

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
			news,
		},
	};
}

const NewsPage = ({ news }) => {
	const router = useRouter();

	const onSearch = (value) => console.log(value);

	console.log(news);

	return (
		<>
			<Header style={{ backgroundColor: '#191919' }} />
			<section className={styles.news_page_wrapper}>
				<div className={styles.news_action_panel}>
					<h1>Новости</h1>
					<Search placeholder="Поиск по новостям" allowClear onSearch={onSearch} style={{ width: '250px' }} />
				</div>
				<div className={styles.news_cards_wrapper}>
					<div className={styles.news_cards_container}>
						{news.map(({ slug, frontmatter }) => (
							<div className={styles.news_card} key={slug} onClick={() => router.push(`/news/${slug}`)}>
								<div className={styles.news_card_img_wrapper}>
									<div className={styles.news_card_img}>
										<Image src={frontmatter.cover_image} layout="fill" objectFit="cover" alt="news-1" />
									</div>
								</div>
								<h2 className={styles.news_card_title}>{frontmatter.title}</h2>
								<p className={styles.news_card_text_content}>{frontmatter.excerpt}</p>
								<p className={styles.news_card_date}>Публикация от {frontmatter.date}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.pagination}>
					<Pagination defaultCurrent={1} total={300} />
				</div>
			</section>
		</>
	);
};

export default NewsPage;
