import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer_wrapper}>
			<div>
				<p>© АО «Волга-Щит»</p>
				<p>ул. Боевая, д. 38. (центральный офис)</p>
				<p>г. Астрахань, Россия, 414000</p>
			</div>
			<div>
				<p>Телефон: </p>
				<p>E-mail: office@volga-shield.com</p>
			</div>
		</footer>
	);
};

export default Footer;
