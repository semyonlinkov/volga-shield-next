import Image from 'next/image';
import styles from './Clients.module.scss';
import IMGAlpha from '../../images/alphaStrah.jpg';
import IMGBeeline from '../../images/beeline.jpg';
import IMGEatp from '../../images/eatpBank.png';
import IMGEMegaphone from '../../images/megafon.svg';
import IMGMts from '../../images/mts.png';
import IMGPrombank from '../../images/promSvyazBank.png';
import IMGRgd from '../../images/rgd.jpg';
import IMGSber from '../../images/sberbank.png';
import IMGSvyaznoy from '../../images/svyaznoy.png';
import IMGTransneft from '../../images/transneft.jpg';
import IMGAmesco from '../../images/amesco.jpg';

const Clients = () => {
	return (
		<div className={styles.clients_wrapper}>
			<h2 className={styles.title}>Наши клиенты</h2>
			<div className={styles.carousel_wrapper}>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGAlpha} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGBeeline} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGEatp} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGEMegaphone} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGMts} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGPrombank} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGRgd} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGSber} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGSvyaznoy} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGTransneft} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGAmesco} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGAlpha} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGBeeline} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGEatp} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGEMegaphone} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGMts} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGPrombank} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGRgd} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGSber} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGSvyaznoy} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGTransneft} />
				</div>
				<div className={styles.img_wrapper}>
					<Image alt="test" layout="fixed" objectFit="contain" height={'250px'} width={500} src={IMGAmesco} />
				</div>
			</div>
		</div>
	);
};

export default Clients;
