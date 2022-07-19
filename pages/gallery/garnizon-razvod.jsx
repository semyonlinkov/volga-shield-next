import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import { Image as ImageAntd } from 'antd';

import IMG01 from '../../public/images/gallery/garnizon-razvod/001.jpg';
import IMG02 from '../../public/images/gallery/garnizon-razvod/002.jpg';
import IMG03 from '../../public/images/gallery/garnizon-razvod/003.jpg';
import IMG04 from '../../public/images/gallery/garnizon-razvod/004.jpg';
import IMG05 from '../../public/images/gallery/garnizon-razvod/005.jpg';
import IMG06 from '../../public/images/gallery/garnizon-razvod/006.jpg';

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
			<section
				className={styles.wrapper}
				style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
				<ImageAntd.PreviewGroup>
					<ImageAntd width={200} height={150} src={IMG01.src} />
					<ImageAntd width={200} height={150} src={IMG02.src} />
					<ImageAntd width={200} height={150} src={IMG03.src} />
					<ImageAntd width={200} height={150} src={IMG04.src} />
					<ImageAntd width={200} height={150} src={IMG05.src} />
					<ImageAntd width={200} height={150} src={IMG06.src} />
				</ImageAntd.PreviewGroup>
			</section>
		</>
	);
};

export default AboutUsPage;
