import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Image from 'next/image';
import { Image as ImageAntd } from 'antd';
import IMG01 from '../../public/images/gallery/autoprobeg/001.jpg';
import IMG02 from '../../public/images/gallery/autoprobeg/002.jpg';
import IMG03 from '../../public/images/gallery/autoprobeg/003.jpg';
import IMG04 from '../../public/images/gallery/autoprobeg/004.jpg';
import IMG05 from '../../public/images/gallery/autoprobeg/005.jpg';
import IMG06 from '../../public/images/gallery/autoprobeg/006.jpg';
import IMG07 from '../../public/images/gallery/autoprobeg/007.jpg';
import IMG08 from '../../public/images/gallery/autoprobeg/008.jpg';
import IMG09 from '../../public/images/gallery/autoprobeg/009.jpg';
import IMG10 from '../../public/images/gallery/autoprobeg/010.jpg';
import IMG11 from '../../public/images/gallery/autoprobeg/011.jpg';
import IMG12 from '../../public/images/gallery/autoprobeg/012.jpg';
import IMG13 from '../../public/images/gallery/autoprobeg/013.jpg';
import IMG14 from '../../public/images/gallery/autoprobeg/014.jpg';
import IMG15 from '../../public/images/gallery/autoprobeg/015.jpg';
import IMG16 from '../../public/images/gallery/autoprobeg/016.jpg';
import IMG17 from '../../public/images/gallery/autoprobeg/017.jpg';
import IMG18 from '../../public/images/gallery/autoprobeg/018.jpg';
import IMG19 from '../../public/images/gallery/autoprobeg/019.jpg';
import IMG20 from '../../public/images/gallery/autoprobeg/020.jpg';
import IMG21 from '../../public/images/gallery/autoprobeg/021.jpg';
import IMG22 from '../../public/images/gallery/autoprobeg/022.jpg';

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
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'flex-start',
					flexWrap: 'wrap',
					gap: '10px',
				}}>
				<ImageAntd.PreviewGroup>
					<ImageAntd width={200} src={IMG01.src} />
					<ImageAntd width={200} src={IMG02.src} />
					<ImageAntd width={200} src={IMG03.src} />
					<ImageAntd width={200} src={IMG04.src} />
					<ImageAntd width={200} src={IMG05.src} />
					<ImageAntd width={200} src={IMG06.src} />
					<ImageAntd width={200} src={IMG07.src} />
					<ImageAntd width={200} src={IMG08.src} />
					<ImageAntd width={200} src={IMG09.src} />
					<ImageAntd width={200} src={IMG10.src} />
					<ImageAntd width={200} src={IMG11.src} />
					<ImageAntd width={200} src={IMG12.src} />
					<ImageAntd width={200} src={IMG13.src} />
					<ImageAntd width={200} src={IMG14.src} />
					<ImageAntd width={200} src={IMG15.src} />
					<ImageAntd width={200} src={IMG16.src} />
					<ImageAntd width={200} src={IMG17.src} />
					<ImageAntd width={200} src={IMG18.src} />
					<ImageAntd width={200} src={IMG19.src} />
					<ImageAntd width={200} src={IMG20.src} />
					<ImageAntd width={200} src={IMG21.src} />
					<ImageAntd width={200} src={IMG22.src} />
				</ImageAntd.PreviewGroup>
			</section>
		</>
	);
};

export default AboutUsPage;
