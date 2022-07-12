import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';
import BigWhiteLogo from '../../images/BigWhiteLogo.png';
import IMGFb from '../../images/fb50.png';
import IMGPhone from '../../images/phone25.png';
import IMGWhatsup from '../../images/whatsapp50.png';
import IMGVk from '../../images/vk50.png';

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
						<span>8 800 5 503 000</span> / <span>8 8512 503 000</span>
					</p>
				</div>
				<div className={styles.socials}>
					<div className={styles.social_img}>
						<Image src={IMGFb} alt="facebook" />
					</div>
					<div className={styles.social_img}>
						<Image src={IMGWhatsup} alt="whatsup" />
					</div>
					<div className={styles.social_img}>
						<Image src={IMGVk} alt="vk" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
