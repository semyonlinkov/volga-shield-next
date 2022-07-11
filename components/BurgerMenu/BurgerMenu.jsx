import Link from 'next/link';
import { useState } from 'react';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ activeBurger, setActiveBurger }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section
			className={activeBurger ? `${styles.menu} ${styles.active}` : styles.menu}
			onClick={() => setActiveBurger(false)}>
			<div
				className={styles.menu__content}
				// onClick={(e) => e.stopPropagation()}
			>
				<ul>
					<li>
						<Link href={'/'}>Главная</Link>
					</li>
					<li>
						<Link href={'/about-us'}>О Нас</Link>
					</li>
					<li
						onClick={(e) => {
							e.stopPropagation();
							setIsOpen((prev) => !prev);
						}}>
						<p style={{ color: 'white' }}>Обучение {isOpen ? '⮝' : '⮟'}</p>
					</li>
					{isOpen && (
						<>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link href={'/docs'} onClick={() => setIsOpen(false)}>
									Документы для поступления
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link href={'/exams'} onClick={() => setIsOpen(false)}>
									Порядок сдачи экзамена
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link href={'/fire-safety'} onClick={() => setIsOpen(false)}>
									Пожарно-технический минимум
								</Link>
							</li>
							<li style={{ fontSize: '0.8rem', paddingLeft: '30px' }}>
								<Link href={'/crew-training'} onClick={() => setIsOpen(false)}>
									Обучение плавсоства
								</Link>
							</li>
						</>
					)}
					<li>
						<Link href={'/prices'}>Цены</Link>
					</li>
					<li>
						<Link href={'/contacts'}>Контакты</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BurgerMenu;
