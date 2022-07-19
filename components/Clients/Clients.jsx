import Image from 'next/image';
import styles from './Clients.module.scss';
import IMGBeeline from '../../public/images/beeline.png';
import IMGEatp from '../../public/images/eatpBank.png';
import IMGEMegaphone from '../../public/images/megafon.svg';
import IMGMts from '../../public/images/mts.png';
import IMGPrombank from '../../public/images/promSvyazBank.png';
import IMGRgd from '../../public/images/rgd.jpg';
import IMGSber from '../../public/images/sberbank.png';
import IMGSvyaznoy from '../../public/images/svyaznoy.png';
import IMGTransneft from '../../public/images/transneft.jpg';
import IMGAmesco from '../../public/images/amesco.jpg';

const Clients = () => {
	return (
		<div className={styles.clients_wrapper}>
			<h2 className={styles.title}>Наши клиенты</h2>
			<div className={styles.carousel_wrapper}>
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
