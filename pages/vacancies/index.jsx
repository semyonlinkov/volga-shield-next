import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './VacanciesPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const VacanciesPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);
	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.vacancies_wrapper}>
				<h1>ВАКАНСИИ</h1>
				<h3>Предприятие безопасности «Волга-Щит» приглашает на работу:</h3>
				<ul>
					<li>Стабильность и надежность компании</li>
					<li>Достойный уровень заработной платы</li>
					<li>Широкие возможности для карьеры и профессионального роста</li>
					<li>Комфортные условия для работы</li>
					<li>Дружный и доброжелательный коллектив, состоящий из профессионалов своего дела</li>
				</ul>
				<h3>Наши Вакансии</h3>
				<ol>
					<li>Лицензированные охранники (вахтовый метод работы)</li>
					<li>Руководители подразделений (с опытом работы и возможностью выезда в командировки)</li>
					<li>Начальник охраны объекта.</li>
					<li>Менеджер по продажам и развитию.</li>
					<li>Техник (осуществление монтажа и обслуживания охранно-пожарной сигнализации)</li>
					<li>Менеджер по договорам</li>
				</ol>
				<h3>Общие требования к кандидатам на работу:</h3>
				<ul>
					<li>для охранника: наличие лицензии на осуществлеие частной охранной деятельности.</li>
					<li>наличие постоянной регистрации</li>
					<li>отсутствие медицинских противопоказаний для работы в охране;</li>
					<li>отсутствие компрометирующих материалов по предыдущим местам работы.</li>
				</ul>
				<h3>У нас есть, что Вам предложить. Вас ждет интересная и хорошо оплачиваемая работа!</h3>
				<h3>Телефон отдела кадров: +7 (8512) 50-16-80</h3>
			</div>
		</>
	);
};

export default VacanciesPage;
