import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './RecommendationsPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const RecommendationsPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				iaBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.wrapper}>
				<h1>СПИСОК ДОКУМЕНТОВ ДЛЯ ЗАКЛЮЧЕНИЯ ДОГОВОРА</h1>
				<p>Уважаемые клиенты! Для заключения договора на охрану Вашего объекта Вам необходимо предоставить:</p>
				<h3>ЮРИДИЧЕСКИМ ЛИЦАМ</h3>
				<ul>
					<li>договор аренды помещения или свидетельство о праве собственности на помещение (копия);</li>
					<li>устав (копия);</li>
					<li>свидетельство о постановке на учет в налоговом органе (копия);</li>
					<li>свидетельство о государственной регистрации предприятия (копия); </li>
					<li>карточка клиента (реквизиты, юридический и почтовый адреса, коды статистики);</li>
					<li>план БТИ (копия);</li>
					<li>
						Копия документа, о назначении руководителя, действующего без доверенности (решение о назначении, или
						об избрании, или приказ о назначении на должность), либо копия доверенности на осуществление
						определенных действий от имени юридического лица.
					</li>
				</ul>
				<h3>ИНДИВИДУАЛЬНЫМ ПРЕДПРИНИМАТЕЛЯМ</h3>
				<ul>
					<li>договор аренды помещения или свидетельство о праве собственности на помещение (копия);</li>
					<li>
						свидетельство о внесении записи в Единый государственный реестр индивидуальных предпринимателей
						(ОГРНИП);
					</li>
					<li>
						свидетельство о постановке на учёт в налоговом органе физического лица по месту жительства (ИНН);
					</li>
					<li>паспорт (копия);</li>
					<li>план БТИ (копия);</li>
					<li>карточка клиента (реквизиты, почтовый адрес).</li>
				</ul>
				<h3>ФИЗИЧЕСКИМ ЛИЦАМ</h3>
				<ul>
					<li>паспорт (копия);</li>
					<li>план БТИ (копия)</li>
					<li>свидетельство о праве собственности на помещение (копия).</li>
				</ul>
				<p>В ОТДЕЛЬНЫХ СЛУЧАЯХ ВОЗМОЖНО ВОЗНИКНОВЕНИЕ НЕОБХОДИМОСТИ ПРЕДОСТАВЛЕНИЯ ДОПОЛНИТЕЛЬНЫХ ДОКУМЕНТОВ</p>
			</div>
		</>
	);
};

export default RecommendationsPage;
