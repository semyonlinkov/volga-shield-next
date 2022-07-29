import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import IMGLogo from '../../public/logo.png';

const Footer = () => {
	return (
		<footer className={styles.footer_wrapper}>
			<div className={styles.content}>
				<div>
					<p>© ООО «Волга-Щит»</p>
					<p>ул. Боевая, д. 38. (центральный офис)</p>
					<p>г. Астрахань, Россия, 414024</p>
				</div>
				<div>
					<p>Телефон: 8 800 5 503 000</p>
					<p>E-mail: office@volga-shield.com</p>
				</div>
				<div className={styles.img_wrapper}>
					<Image src={IMGLogo} />
				</div>
			</div>
			<hr style={{ backgroundColor: 'white', margin: '15px', height: '1px', height: '0' }} />
			<p style={{ textAlign: 'center' }}>© 2022 Предприятие безопасности «Волга-Щит». Все права защищены</p>
		</footer>
	);
};

export default Footer;
