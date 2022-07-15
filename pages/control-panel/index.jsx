import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Header from '../../components/Header/Header';
import styles from './ControlPanelPage.module.scss';

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
				<h1>Мониторинг автотранспортных средств</h1>
				<p>
					Компания &ldquo;Волга-Щит&ldquo;, занимающаяся установкой и обслуживанием систем мониторинга подвижных
					объектов под торговой маркой Гранит, предлагает к рассмотрению возможность оснащения автопарка Вашего
					предприятия комплексной системой контроля и управления. Предлагаемая нашей компанией система Гранит
					представляет собой законченный программно-аппаратный комплекс. Система записывает, передает и позволяет
					анализировать перемещение объекта, параметры его состояния (показания датчиков), отображает текущее
					положение на электронной карте.
				</p>
			</div>
		</>
	);
};

export default ControlPanelPage;
