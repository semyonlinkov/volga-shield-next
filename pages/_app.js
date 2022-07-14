import Head from 'next/head';
import '../styles/antd-theme/antd-customized.css';
import '../styles/globals.scss'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
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
