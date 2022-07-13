import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Map from '../components/Map/Map';
import News from '../components/News/News';
import Clients from '../components/Clients/Clients';
import Services from '../components/Services/Services';
import OrderService from '../components/OrderService/OrderService';

export default function Home() {
	return (
		<>
			<Head>
				<title>Главная Страница</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Hero />
			<Services />
			<OrderService />
			<News />
			<Clients />
			<Map />
		</>
	)
}
