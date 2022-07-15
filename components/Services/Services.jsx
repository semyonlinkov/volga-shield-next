import React from 'react';
import styles from './Services.module.scss';
import { useRouter } from 'next/router';

const Services = () => {
	const router = useRouter();

	return (
		<section className={styles.services_wrapper}>
			<div className={styles.card_objectGuard} onClick={() => router.push('/object-guard')}>
				<h2>Охрана Объектов</h2>
				{/* <button className="btn" style={{ padding: '10px' }}>
					<span>Узнать больше</span>
				</button> */}
			</div>
			<div className={styles.card_personalGuard} onClick={() => router.push('/personal-guard')}>
				<h2>Личная Охрана</h2>
			</div>
			<div className={styles.card_eventGuard} onClick={() => router.push('/event-guard')}>
				<h2>Охрана Мероприятий</h2>
			</div>
			<div className={styles.card_pco} onClick={() => router.push('/pco')}>
				<h2>Служба ПЦО</h2>
			</div>
			<div className={styles.card_autoGuard} onClick={() => router.push('/auto-guard')}>
				<h2>
					Мониторинг
					<br /> автотранспортных средств
				</h2>
			</div>
			<div className={styles.card_controlPanel} onClick={() => router.push('/control-panel')}>
				<h2>Контрольная панель</h2>
			</div>
		</section>
	);
};

export default Services;
