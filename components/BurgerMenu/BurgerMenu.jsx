import Link from 'next/link';
import { useState } from 'react';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isBurgerActive, setIsBurgerActive }) => {
	const [isAboutCompanyOpen, setIsAboutCompanyOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const [isClientsOpen, setIsClientsOpen] = useState(false);
	const [isMediaOpen, setIsMediaOpen] = useState(false);

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
							setIsServicesOpen(false);
							setIsClientsOpen(false);
							setIsMediaOpen(false);
						}}>
						<p style={{ color: 'white' }}>О Компании {isAboutCompanyOpen ? '▴' : '▾'}</p>
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
							setIsAboutCompanyOpen(false);
							setIsClientsOpen(false);
							setIsMediaOpen(false);
						}}>
						<p style={{ color: 'white' }}>Услуги {isServicesOpen ? '▴' : '▾'}</p>
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
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsClientsOpen((prev) => !prev);
							setIsServicesOpen(false);
							setIsAboutCompanyOpen(false);
							setIsMediaOpen(false);
						}}>
						<p style={{ color: 'white' }}>Клиентам {isClientsOpen ? '▴' : '▾'}</p>
					</li>
					{isClientsOpen && (
						<>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsClientsOpen(false)}>
								<Link href={'/recommendations'}>Рекомендации</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsClientsOpen(false)}>
								<Link href={'/documents-for-contract'}>Документы для договора</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsClientsOpen(false)}>
								<Link href={'/auto-check-object'}>Автоматическая проверка состояния охраняемого объекта</Link>
							</li>
						</>
					)}
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsMediaOpen((prev) => !prev);
							setIsClientsOpen(false);
							setIsServicesOpen(false);
							setIsAboutCompanyOpen(false);
						}}>
						<p style={{ color: 'white' }}>Медиа {isMediaOpen ? '▴' : '▾'}</p>
					</li>
					{isMediaOpen && (
						<>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsMediaOpen(false)}>
								<Link href={'/news'}>Новости</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }} onClick={() => setIsMediaOpen(false)}>
								<Link href={'/gallery'}>Галлерея</Link>
							</li>
						</>
					)}
					<li>
						<Link href={'/contacts'}>Контакты</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BurgerMenu;
