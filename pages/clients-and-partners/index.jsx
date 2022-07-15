import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './ClientsAndPartners.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

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
				<h1>Раздел в разработке</h1>
			</div>
		</>
	);
};

export default ClientsAndPartners;
