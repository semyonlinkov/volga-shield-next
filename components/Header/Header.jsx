import React from 'react';
import styles from './Header.module.scss';
import { Dropdown, Menu } from 'antd';
import IMGChevron from '../../images/chevron20.png';
import IMGBurger from '../../images/burger60.png';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ setActiveBurger, style = {} }) => {
	const router = useRouter();

	return (
		<header className={styles.header_wrapper} style={style}>
			<span className={styles.logo} onClick={() => router.push('/')}>
				ВОЛГА-ЩИТ
			</span>
			<div
				className={styles.burger}
				onClick={() => {
					console.log('11');
					
					setActiveBurger((prev) => !prev);
				}}>
				<Image src={IMGBurger} alt="burger_menu" />
			</div>

			<ul className={styles.links}>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link href="/about-us">О нас</Link>,
									key: '0',
								},
								{
									label: <Link href="/vacancies">Вакансии</Link>,
									key: '1',
								},
								{
									label: <Link href="/clients-and-partners">Клиенты и партнеры</Link>,
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						О КОМПАНИИ <Image className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link href="/docs">Охрана объектов</Link>,
									key: '0',
								},
								{
									label: <Link href="/exams">Личная охрана</Link>,
									key: '1',
								},
								{
									label: <Link href="/fire-safety">Охрана мероприятий</Link>,
									key: '2',
								},
								{
									label: <Link href="/fire-safety">Служба ПЦО</Link>,
									key: '3',
								},
								{
									label: <Link href="/fire-safety">Мониторинг автотранспортных средств</Link>,
									key: '4',
								},
								{
									label: <Link href="/fire-safety">Контрольная панель</Link>,
									key: '5',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						УСЛУГИ <Image className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link href="/exams">Рекомендации</Link>,
									key: '0',
								},
								{
									label: <Link href="/fire-safety">Документы для договора</Link>,
									key: '1',
								},
								{
									label: (
										<Link href="/fire-safety">Автоматическая проверка состояния охраняемого объекта</Link>
									),
									key: '2',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						КЛИЕНТАМ <Image className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link href="/news">Новости</Link>,
									key: '0',
								},
								{
									label: <Link href="/exams">Галерея</Link>,
									key: '1',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						МЕДИА <Image className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
				<Dropdown
					placement="bottom"
					overlay={
						<Menu
							items={[
								{
									label: <Link href="/docs">Главный офис</Link>,
									key: '0',
								},
								{
									label: <Link href="/exams">Филиалы</Link>,
									key: '1',
								},
							]}
						/>
					}
					trigger={['click', 'hover']}>
					<li className={styles.link}>
						КОНТАКТЫ <Image className={styles.chevron} src={IMGChevron} alt="chevron" />
					</li>
				</Dropdown>
			</ul>
		</header>
	);
};

export default Header;
