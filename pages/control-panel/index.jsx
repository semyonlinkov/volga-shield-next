import Image from 'next/image';
import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Header from '../../components/Header/Header';
import styles from './ControlPanelPage.module.scss';
import IMGControlPanel from '../../public/images/controlPanel1.jpg';

const ControlPanelPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.wrapper}>
				<h1>Контрольная панель</h1>
				<p>
					Реальность современной жизни заставляет нас внедрять новейшие средства защиты жилых, общественных и
					коммерческих объектов. Комплексные решения организации охраны и видеонаблюдения стали основной частью
					современной системы безопасности. Сегодня рынок предлагает большое количество разнообразных охранных
					систем, которые эффективно позволяют реализовать решения от организации охраны на небольшом объекте до
					построения территориально распределенных систем безопасности с функциями интеллектуального анализа.
				</p>
				<p>
					&ldquo;Волга-Щит&ldquo; во взаимодействии с ООО НТКФ «Си-Норд» в сентябре 2015 года успешно завершила
					тестовые испытания охранной системы &ldquo;Норд-GSM&ldquo; и в настоящее время применяет ее для охраны
					объектов всех форм собственности, в том числе квартир, коттеджей и гаражей. Существующие возможности
					охранной системы позволяют осуществить все пожелания наших клиентов и обеспечить надежную охрану
					принадлежащих им объектов.
				</p>
				<div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px' }}>
					<Image src={IMGControlPanel} layout="responsive" />
				</div>
			</div>
		</>
	);
};

export default ControlPanelPage;
