import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import { Image as ImageAntd } from 'antd';

import IMG01 from '../../public/images/gallery/rukopash-boy/001.jpg';
import IMG02 from '../../public/images/gallery/rukopash-boy/002.jpg';
import IMG03 from '../../public/images/gallery/rukopash-boy/003.jpg';
import IMG04 from '../../public/images/gallery/rukopash-boy/004.jpg';

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
				<h3>
					Компания «Волга - Щит» выступила одним из спонсоров первенства Астраханской области по рукопашному бою.
				</h3>
				<p style={{ alignItems: 'center' }}>
					С 3 по 5 февраля 2017 года в п. Лиман Астраханской области состоялось первенство Астраханской области по
					рукопашному бою, в котором приняли участие более 200 спортсменов. Соревнования проводились в нескольких
					возрастных категориях. В боях участвовали спортсмены от 6 до 16 лет. Занявшие призовые места на этом
					турнире спортсмены выступят на первенстве Южного Федерального Округа. Оно пройдет в г. Волгодонск
					Ростовской области с 24 по 26 февраля 2017 года.
				</p>
				<p style={{ alignItems: 'center' }}>
					Все участники турнира получили памятные призы, а победители были награждены грамотами, медалями и
					кубками. По словам руководителя «Волга - Щит» - Фёдора Клочкова, вице-президента Федерации Рукопашного
					Боя Астраханской области - «Поддержка и воспитание здорового поколения – одна из приоритетных задач
					социально-ответственного бизнеса. Наша компания регулярно участвует и поддерживает подобные мероприятия».
				</p>
				<ImageAntd.PreviewGroup>
					<ImageAntd width={200} height={150} src={IMG01.src} />
					<ImageAntd width={200} height={150} src={IMG02.src} />
					<ImageAntd width={200} height={150} src={IMG03.src} />
					<ImageAntd width={200} height={150} src={IMG04.src} />
				</ImageAntd.PreviewGroup>
			</section>
		</>
	);
};

export default AboutUsPage;
