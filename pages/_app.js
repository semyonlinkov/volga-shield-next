import Head from 'next/head';
import '../styles/antd-theme/antd-customized.css';
import '../styles/globals.scss'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import { $news, getNews } from '../state/getNews';
import { useStore } from 'effector-react';

function MyApp({ Component, pageProps }) {
	const news = useStore($news)

	useEffect(() => {
		getNews();
	}, [])

	console.log('_app ->', news);

	return (<>
		<Head>
			<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
		</Head>
		<BurgerMenu />
		<Component {...pageProps} />
		<Footer />
	</>)
}

export default MyApp
