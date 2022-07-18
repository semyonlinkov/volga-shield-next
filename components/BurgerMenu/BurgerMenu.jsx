import Link from 'next/link';
import { useState } from 'react';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isBurgerActive, setIsBurgerActive }) => {
	const [isAboutCompanyOpen, setIsAboutCompanyOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	return (
		<section
			className={isBurgerActive ? `${styles.menu} ${styles.active}` : styles.menu}
			onClick={() => setIsBurgerActive(false)}>
			<div
				className={styles.menu__content}
				// onClick={(e) => e.stopPropagation()}
			>
				<ul>
					<li>
						<Link href={'/'}>Главная</Link>
					</li>
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsAboutCompanyOpen((prev) => !prev);
						}}>
						<p style={{ color: 'white' }}>О Компании {isAboutCompanyOpen ? '▲' : '▼'}</p>
					</li>
					{isAboutCompanyOpen && (
						<>
							<li
								style={{ fontSize: '0.8rem', paddingLeft: '30px' }}
								onClick={() => setIsAboutCompanyOpen(false)}>
								<Link href={'/about-us'}>О нас</Link>
							</li>
							<li
								style={{ fontSize: '0.8rem', paddingLeft: '30px' }}
								onClick={() => setIsAboutCompanyOpen(false)}>
								<Link href={'/vacancies'}>Вакансии</Link>
							</li>
							<li
								style={{ fontSize: '0.8rem', paddingLeft: '30px' }}
								onClick={() => setIsAboutCompanyOpen(false)}>
								<Link href={'/clients-and-partners'}>Клиенты и партнеры</Link>
							</li>
						</>
					)}
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsServicesOpen((prev) => !prev);
						}}>
						<p style={{ color: 'white' }}>Услуги {isServicesOpen ? '▲' : '▼'}</p>
					</li>
					{isServicesOpen && (
						<>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/object-guard'}>Охрана объектов</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/personal-guard'}>Личная храна</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/event-guard'}>Охрана мероприятий</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/pco'}>Служба ПЦО</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/auto-guard'}>Мониторинг автотранспортных средств</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsServicesOpen(false)}>
								<Link href={'/control-panel'}>Контрольная панель</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</section>
	);
};

export default BurgerMenu;
