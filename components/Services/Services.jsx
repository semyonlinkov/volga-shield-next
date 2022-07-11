import React from 'react';
import styles from './Services.module.scss';

const Services = () => {
	return (
		<section className={styles.services_wrapper}>
			<div className={styles.card_objectGuard}>
				<h2>Охрана Объектов</h2>
				<button className="btn" style={{ padding: '10px' }}>
					<span>Узнать больше</span>
				</button>
			</div>
			<div className={styles.card_personalGuard}>
				<h2>Личная Охрана</h2>
			</div>
			<div className={styles.card_eventGuard}>
				<h2>Охрана Мероприятий</h2>
			</div>
			<div className={styles.card_pco}>
				<h2>Служба ПЦО</h2>
			</div>
			<div className={styles.card_autoGuard}>
				<h2>
					Мониторинг
					<br /> автотранспортных средств
				</h2>
			</div>
			<div className={styles.card_controlPanel}>
				<h2>Контрольная панель</h2>
			</div>
		</section>
	);
};

export default Services;
