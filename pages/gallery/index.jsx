import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Image from 'next/image';

import IMGAutoprobeg from '../../public/images/gallery/autoprobeg/013.jpg';

const AboutUsPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<section className={styles.wrapper}>
				<div className={styles.gallery_wrapper}>
					<div>
						<Image src={IMGAutoprobeg} />
						<h4 style={{ textAlign: 'center' }}>Автопробег «Бывших не бывает»</h4>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsPage;
