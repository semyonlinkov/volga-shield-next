import Head from 'next/head';
import '../styles/antd-theme/antd-customized.css';
import '../styles/globals.scss'
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
	return (<>
		<Head>
			<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
			<meta name="description" content="Приоритетом для ВОЛГА-ЩИТ является решение задач по обеспечению необходимого комплекса услуг в сфере безопасности для предприятий, частного бизнеса" />
			<link rel="icon" href="/favicon.png" />
			<meta name="keywords" content="волга-щит, волга щит, volga-shield, volga shield"></meta>
		</Head>
		<Component {...pageProps} />
		<Footer />
	</>)
}

export default MyApp
