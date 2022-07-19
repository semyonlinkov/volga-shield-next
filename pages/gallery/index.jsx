import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './AboutUsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import IMGAutoprobeg from '../../public/images/gallery/autoprobeg/013.jpg';
import IMGBudniVolgaShield from '../../public/images/gallery/budni-volga-shield/013.jpg';
import IMGDiploms from '../../public/images/gallery/diploms/033.jpg';
import IMGOlimp from '../../public/images/gallery/estafeta-olimp/007.jpg';
import IMGSorevChop from '../../public/images/gallery/sorevnovaniya-chop/007.jpg';
import IMGNarodDruj from '../../public/images/gallery/narodnaya-drujina/002.jpg';
import IMGRyazanSovesh from '../../public/images/gallery/ryazan-sovesh/004.jpg';
import IMGSoveshBezop from '../../public/images/gallery/sovesh-bezop/004.png';
import IMGSoveshBezop2 from '../../public/images/gallery/sovesh-bezop2/001.jpg';
import IMGSoveshUmvd from '../../public/images/gallery/sovet-umvd/001.jpg';
import IMGKubokAst from '../../public/images/gallery/kubok-ast/003.jpg';
import IMGPover from '../../public/images/gallery/pover-v-sebya/003.jpg';
import IMGTayota from '../../public/images/gallery/tayota/003.jpg';
import IMGPochta from '../../public/images/gallery/pochta/001.jpg';
import IMGVmf from '../../public/images/gallery/day-vmf/004.jpg';
import IMGPartnerstvo from '../../public/images/gallery/partnerstvo/004.jpg';
import IMGGarnizonRazv from '../../public/images/gallery/garnizon-razvod/001.jpg';
import IMGTrenirovka from '../../public/images/gallery/trenirovka/001.jpg';
import IMGOhrObsh from '../../public/images/gallery/ohr-obsh-ng/001.jpg';
import IMGArmRoss from '../../public/images/gallery/arm-ross/001.jpg';
import IMGInternatHelp from '../../public/images/gallery/internat-help/001.jpg';
import IMGGarnizRazv from '../../public/images/gallery/garnizon-razv2/001.jpg';
import IMGRukopash from '../../public/images/gallery/rukopash-boy/004.jpg';
import IMGPozd from '../../public/images/gallery/pozdrav-ohr/004.jpg';
import IMGGarnRazv from '../../public/images/gallery/garn-razv/003.jpg';
import IMGGarnRazv2 from '../../public/images/gallery/garn-razv2/003.jpg';
import IMGSelias from '../../public/images/gallery/selias/002.jpg';

const AboutUsPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);
	const router = useRouter();

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
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/selias')}>
						<Image src={IMGSelias} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Молодёжный проектный форум «СЕЛИАС - 2020»</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/garn-razv2')}>
						<Image src={IMGGarnRazv2} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Гарнизонный развод 28.02.2019 года</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/garn-razv')}>
						<Image src={IMGGarnRazv} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Гарнизонный развод 31 марта 2017</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/pozdrav-ohr')}>
						<Image src={IMGPozd} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>
							В Астрахани поздравили работников негосударственной сферы безопасности.
						</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/rukopash-boy')}>
						<Image src={IMGRukopash} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Первенство Астраханской области по рукопашному бою.</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/garnizon-razv2')}>
						<Image src={IMGGarnizRazv} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Гарнизонный развод 2017</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/internat-help')}>
						<Image src={IMGInternatHelp} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Благотворительная помощь, школе – интернату</h4>
					</div>
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/arm-ross')}>
						<Image src={IMGArmRoss} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Волга-Щит охраняет объекты Армии России</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/ohr-obsh-ng')}>
						<Image src={IMGOhrObsh} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Охрана общественного порядка в Новогодние праздники</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/trenirovka')}>
						<Image src={IMGTrenirovka} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Тренировка</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/garnizon-razvod')}>
						<Image src={IMGGarnizonRazv} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Гарнизонный развод</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/partnerstvo')}>
						<Image src={IMGPartnerstvo} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>05.08.2016 общее собрание СРО СПБ «Партнёрство»</h4>
					</div>
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/day-vmf')}>
						<Image src={IMGVmf} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>
							Взаимодействие с органами внутренних дел во время празднования «Дня ВМФ»
						</h4>
					</div>
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/pochta')}>
						<Image src={IMGPochta} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Поздравление Почты России с Юбилеем!</h4>
					</div>
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/tayota')}>
						<Image src={IMGTayota} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Toyota. Город мечты</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/kubok-ast')}>
						<Image src={IMGPover} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Фестиваль – «Поверь в себя»</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/kubok-ast')}>
						<Image src={IMGKubokAst} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Кубок Каспия 2016</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/sovet-umvd')}>
						<Image src={IMGSoveshUmvd} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Координационный Совет УМВД 31.03.2016 год</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/sovesh-bezop2')}>
						<Image src={IMGSoveshBezop2} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>
							Фоторепортаж с Конференции: &quot;Негосударственная сфера безопасности – 23 года развития: цели,
							задачи и перспективы&quot;
						</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/sovesh-bezop')}>
						<Image src={IMGSoveshBezop} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>
							IV Всероссийское совещание негосударственной сферы безопасности
						</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/ryazan-sovesh')}>
						<Image src={IMGRyazanSovesh} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Рязань 2015 совещание по формированию КС НСБ</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/narodnaya-drujina')}>
						<Image src={IMGNarodDruj} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Народная дружина</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/sorevnovaniya-chop')}>
						<Image src={IMGSorevChop} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>
							Соревнования работников Частных Охранных Предприятий (Частных Охранных Организаций) г. Астрахани и
							области.
						</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/estafeta-olimp')}>
						<Image src={IMGOlimp} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Эстафета Олимпийского огня </h4>
					</div>
					<div style={{ cursor: 'pointer', textAlign: 'center' }} onClick={() => router.push('/gallery/diploms')}>
						<Image src={IMGDiploms} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Дипломы и награды</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/budni-volga-shield')}>
						<Image src={IMGBudniVolgaShield} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Будни «Волга Щит»</h4>
					</div>
					<div
						style={{ cursor: 'pointer', textAlign: 'center' }}
						onClick={() => router.push('/gallery/autoprobeg')}>
						<Image src={IMGAutoprobeg} objectFit={'cover'} width={'300'} height={'200'} />
						<h4 style={{ textAlign: 'center' }}>Автопробег «Бывших не бывает»</h4>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsPage;
