import { Input, Pagination } from 'antd';
import styles from './NewsPage.module.scss';
import IMGNews1 from '../../images/news1.jpg';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import { useStore } from 'effector-react';
import { $news } from '../../state/getNews';

const { Search } = Input;

const NewsPage = () => {
	const news = useStore($news);

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
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
						<div className={styles.news_card}>
							<div className={styles.news_card_img_wrapper}>
								<div className={styles.news_card_img}>
									<Image layout="fill" src={IMGNews1} objectFit="cover" alt="news-1" />
								</div>
							</div>
							<h2 className={styles.news_card_title}>«Волга-Щит»: всегда на страже безопасности</h2>
							<p className={styles.news_card_text_content}>
								На пульт «Волга-Щит» поступило сообщение о срабатывании сигнализации с охраняемого объекта
								(частный дом). Незамедлительно на место выехала Группа быстрого реагирования
							</p>
							<p className={styles.news_card_date}>Публикация от 12.05.2022г.</p>
						</div>
					</div>
				</div>
				<div className={styles.pagination}>
					<Pagination defaultCurrent={1} total={1000} />
				</div>
				{/* <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: news[0].html }}></div> */}
			</section>
		</>
	);
};

export default NewsPage;
