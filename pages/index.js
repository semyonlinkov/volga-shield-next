import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Map from '../components/Map/Map';
import News from '../components/News/News';
import Clients from '../components/Clients/Clients';
import Services from '../components/Services/Services';
import OrderService from '../components/OrderService/OrderService';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import { useState } from 'react';

export default function Home() {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<Head>
				<title>Главная Страница</title>
			</Head>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Hero />
			<Services />
			<OrderService />
			<News />
			<Clients />
			<Map />
		</>
	)
}
