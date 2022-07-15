import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './RecommendationsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const RecommendationsPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				iaBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.wrapper}>
				<h1>Раздел в разработке</h1>
			</div>
		</>
	);
};

export default RecommendationsPage;
