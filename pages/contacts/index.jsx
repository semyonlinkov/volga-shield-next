import { useState } from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Header from '../../components/Header/Header';
import styles from './ControlPanelPage.module.scss';

const ControlPanelPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.wrapper}>
				<h1>Контакты</h1>
				<div style={{ paddingBottom: '10px' }} className={styles.contacts}>
					<h2> «Волга-Щит» г. Астрахань (центральный офис)</h2>
					<p>Россия, 414024, г. Астрахань, ул. Боевая, д. 38.</p>
					<p>office@volga-shield.com</p>
					<p>Телефоны:</p>
					<p>8 800 5 503 000</p>
					<p>+7 (8512) 50-04-60 - Приёмная, фак</p>
					<p>+7 (8512) 34-32-43 - Отдел маркетинга</p>
					<p>503-000 - круглосуточная дежурная часть</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>ВОЛГА - ЩИТ Волгоград</h2>
					<p>Адрес: 404130, Волгоградская область, г. Волжский</p>
					<p>Автодорога №7, строение 6 «Б», каб.128.</p>
					<p>ТЕЛ: +7 (8442) 503-000</p>
					<p>ТЕЛ./ФАКС: 8 800 5 503 000</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит Республика Калмыкия, город Элиста</h2>
					<p>Адрес: г. Элиста ул. Чкалова, 36.</p>
					<p>Моб.: +7 9608574222</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит г. Ахтубинск</h2>
					<p>Астраханская область, г. Ахтубинск ул. Ленинградская 4 &quot;б&quot;</p>
					<p>Моб.: +7 9654541122</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит г. Знаменск</h2>
					<p>Астраханская область. Г. Знаменск ул. Ленина 22</p>
					<p>Моб.: +7 9608580444</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит п. Лиман</h2>
					<p>Астраханская область, Лиманский р-н, п. Лиман ул. Советская 75</p>
					<p>Моб.: +7 9673333663</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит п.В.Баскунчак</h2>
					<p>Моб.: +7 9275571408</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит с. Володаровка</h2>
					<p>Моб.: +7 9276638641</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит с. Красный Яр</h2>
					<p>Моб.: +7 9276608386</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит п. Яшкуль</h2>
					<p>Моб.: +7 9054809256</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит п. Харабали</h2>
					<p>Моб.: +7 9275745789</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит г. Лагань</h2>
					<p>Моб.: +7 9054808967</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит г. Нариманов</h2>
					<p>Моб.: +7 9275806863</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит с. Енотаевка</h2>
					<p>Моб.: +7 9618130701</p>
				</div>
				<hr />
				<div className={styles.contacts}>
					<h2>Волга-Щит с. Черный Яр</h2>
					<p>Моб.: +7 9061786399</p>
				</div>
				<hr />
			</div>
		</>
	);
};

export default ControlPanelPage;
