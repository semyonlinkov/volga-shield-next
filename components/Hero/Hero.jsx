import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';
import BigWhiteLogo from '../../public/images/BigWhiteLogo.png';
import IMGPhone from '../../public/images/phone25.png';
import IMGWhatsup from '../../public/images/whatsapp50.png';
import IMGVk from '../../public/images/vk50.png';
import IMGTelegram from '../../public/images/telegram50.png';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className={styles.hero_wrapper}>
			<div className={styles.hero_info}>
				<div className={styles.logo_img}>
					<Image src={BigWhiteLogo} alt="logo" />
				</div>
				<div className={styles.info}>
					<h1>20 лет на защите ваших интересов</h1>
					<br />
					<p>
						Охрана – наша основная задача. Мы считаем приоритетом создание безопасной системы контроля, которая
						работает эффективно и слаженно, является доступной в эксплуатации. Ответственное отношение наших
						специалистов позволяет создавать эффективные решения при принятии нового охраняемого объекта с
						использованием всех мер обеспечения безопасности.
					</p>
				</div>
			</div>
			<div className={styles.contacts}>
				<div className={styles.phones}>
					<Image src={IMGPhone} alt="phone" />
					<p>
						<a style={{ color: 'white' }} href="tel:8 800 5 503 000">
							8 800 5 503 000
						</a>{' '}
						/{' '}
						<a style={{ color: 'white' }} href="tel: 8 8512 503 000">
							8 8512 503 000
						</a>
					</p>
				</div>
				<div className={styles.socials}>
					<div className={styles.social_img}>
						<Link
							href="https://api.whatsapp.com/send/?phone=79673304423&type=phone_number&app_absent=0"
							passHref={true}>
							<Image src={IMGWhatsup} alt="whatsup" />
						</Link>
					</div>
					<div className={styles.social_img}>
						<Link href="https://vk.com/volga_shield" passHref={true}>
							<Image src={IMGVk} alt="vk" />
						</Link>
					</div>
					<div className={styles.social_img}>
						<Link href="https://telegram.me/volgaShieldReception" passHref={true}>
							<Image src={IMGTelegram} alt="telegram" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
