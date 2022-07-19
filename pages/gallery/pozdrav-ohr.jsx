import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import { Image as ImageAntd } from 'antd';

import IMG01 from '../../public/images/gallery/pozdrav-ohr/001.jpg';
import IMG02 from '../../public/images/gallery/pozdrav-ohr/002.jpg';
import IMG03 from '../../public/images/gallery/pozdrav-ohr/003.jpg';
import IMG04 from '../../public/images/gallery/pozdrav-ohr/004.jpg';
import IMG05 from '../../public/images/gallery/pozdrav-ohr/005.jpg';
import IMG06 from '../../public/images/gallery/pozdrav-ohr/006.jpg';
import IMG07 from '../../public/images/gallery/pozdrav-ohr/007.jpg';
import IMG08 from '../../public/images/gallery/pozdrav-ohr/008.jpg';
import IMG09 from '../../public/images/gallery/pozdrav-ohr/009.jpg';
import IMG10 from '../../public/images/gallery/pozdrav-ohr/010.jpg';
import IMG11 from '../../public/images/gallery/pozdrav-ohr/011.jpg';
import IMG12 from '../../public/images/gallery/pozdrav-ohr/012.jpg';
import IMG13 from '../../public/images/gallery/pozdrav-ohr/013.jpg';
import IMG14 from '../../public/images/gallery/pozdrav-ohr/014.jpg';
import IMG15 from '../../public/images/gallery/pozdrav-ohr/015.jpg';

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
				<p>
					В Астраханском Кремле состоялось торжественное мероприятие, посвященное празднованию 25-летия частной
					охраны и сыска в России. Собрание прошло под патронажем Координационного совета Негосударственной Сферы
					Безопасности Астраханской области.
				</p>
				<ImageAntd.PreviewGroup>
					<ImageAntd width={200} height={150} src={IMG01.src} />
					<ImageAntd width={200} height={150} src={IMG02.src} />
					<ImageAntd width={200} height={150} src={IMG03.src} />
					<ImageAntd width={200} height={150} src={IMG04.src} />
					<ImageAntd width={200} height={150} src={IMG05.src} />
					<ImageAntd width={200} height={150} src={IMG06.src} />
					<ImageAntd width={200} height={150} src={IMG07.src} />
					<ImageAntd width={200} height={150} src={IMG08.src} />
					<ImageAntd width={200} height={150} src={IMG09.src} />
					<ImageAntd width={200} height={150} src={IMG10.src} />
					<ImageAntd width={200} height={150} src={IMG11.src} />
					<ImageAntd width={200} height={150} src={IMG12.src} />
					<ImageAntd width={200} height={150} src={IMG13.src} />
					<ImageAntd width={200} height={150} src={IMG14.src} />
					<ImageAntd width={200} height={150} src={IMG15.src} />
				</ImageAntd.PreviewGroup>
			</section>
		</>
	);
};

export default AboutUsPage;
