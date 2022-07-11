import Head from 'next/head';
import 'antd/dist/antd.css';
import '../styles/globals.scss'
import { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
	const [activeBurger, setActiveBurger] = useState(false);

	return (<>
		<Head>
			{/* <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" /> */}
		</Head>
		<BurgerMenu activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
		<Component {...pageProps} activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
		<Footer />
	</>)
}

export default MyApp
