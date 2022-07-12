import { Input, Select, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './NewsPage.module.scss';
import IMGNews1 from '../../images/news1.jpg';
import Image from 'next/image';
import Header from '../../components/Header/Header';

const { Search } = Input;
const { Option } = Select;

const NewsPage = ({ activeBurger, setActiveBurger }) => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch('https://volga24bot.com/ok/volgashield/getNews.php')
			.then((res) => res.json())
			.then((data) => setNews(data));
	}, []);

	const onSearch = (value) => console.log(value);

	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	console.log(news);

	return (
		<>
			<Header activeBurger={activeBurger} setActiveBurger={setActiveBurger} style={{ backgroundColor: '#191919' }} />
			<section className={styles.news_page_wrapper}>
				<div className={styles.news_action_panel}>
					<h1>Новости</h1>
					<Select defaultValue="Упорядочить" onChange={handleChange} style={{ width: '100px' }}>
						<Option value="new">Сначала новые</Option>
						<Option value="old">Сначала старые</Option>
					</Select>
					<Search placeholder="Поиск по новостям" allowClear onSearch={onSearch} style={{ width: '200px' }} />
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
