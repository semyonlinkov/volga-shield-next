import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './ClientsAndPartners.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import IMGClients from '../../public/images/clients.jpg';
import Image from 'next/image';

const ClientsAndPartners = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.clients_wrapper}>
				<h1>НАШИ КЛИЕНТЫ</h1>
				<p>
					Профессионализм, высокое качество услуг, применение технических средств завоевали доверие руководства
					крупных предприятий.
				</p>
				<ul style={{ paddingTop: '10px', listStyle: 'circle' }}>
					<li>Нефтяная компания «ТРАНСНЕФТЬ»</li>
					<li>Судоходная компания «AMESCO»</li>
					<li>Страховая компания «АльфаСтрахование»</li>
					<li>«ВОЛГА-ПОРТ»</li>
					<li>ОАО «РЖД»</li>
					<li>Сберегательный Банк РФ</li>
					<li>Промсвязь Банк</li>
					<li>ЕАТП Банкт</li>
					<li>Банк «Русский Стандарт»</li>
					<li>«МЕГАФОН»</li>
					<li>«БИЛАЙН»</li>
					<li>«МТС»</li>
					<li>Салон сотовой связи «СВЯЗНОЙ»</li>
					<li>Гипермаркет цифровой техники «ДНС-ДОН»</li>
					<li>Торгово-развлекательный центр «ЯРМАРКА»</li>
					<li>Торговый центр «ТРИ КОТА»</li>
					<li>Сеть магазинов "Красное-Белое"</li>
					<li>Сеть магазинов «МАГНИТ»</li>
					<li>Сеть магазинов «Рубль Бум»</li>
					<li>Аптечная сеть "Вита"</li>
					<li>Аптечная сеть "Кристи"</li>
					<li>ООО «КАСПИЙгазавтосервис»</li>
					<li>Автосалон «LEXUS»</li>
					<li>Автосалон «TOYOTA»</li>
					<li>ООО «Бизнес Кар Каспий»</li>
					<li>Гостиничный комплекс «PARK INN»</li>
					<li>Гостиничный комплекс «VICTORIA PALACE»</li>
				</ul>
				<p>И другие</p>
				<div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px' }}>
					<Image src={IMGClients} layout="responsive" />
				</div>
			</div>
		</>
	);
};

export default ClientsAndPartners;
