import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './PcoPage.module.scss';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import Head from 'next/head';

const PcoPage = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false);

	return (
		<>
			<Head>
				<title>Служба ПЦО</title>
			</Head>
			<BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
			<Header
				isBurgerActive={isBurgerActive}
				setIsBurgerActive={setIsBurgerActive}
				style={{ backgroundColor: '#191919' }}
			/>
			<div className={styles.wrapper}>
				<h1>Служба ПЦО</h1>
				<p>
					Пультовая охрана- это защита объектов недвижимости от проникновения, нападения, пожара и технических
					аварий с применением современных систем сигнализации и выездом групп быстрого реагирования при
					поступлении сигналов тревоги на пульт централизованной охраны. Система охранной сигнализации (пультовая
					охрана) включает в себя:
				</p>
				<ul>
					<li>
						• датчики охранной сигнализации различного типа действия (инфракрасные, акустические,
						магнитноконтактные, и т.д.)
					</li>
					<li>• приемно-контрольный прибор (ПКП)</li>
					<li>• объектовый коммуникатор</li>
					<li>• охранный оповещатель (сирена)</li>
					<li>
						• по Вашему желанию может быть установлена кнопка тревожной сигнализации (КТС), пожарная сигнализация
						(ПС), видео наблюдение.
					</li>
				</ul>
				<p>
					&ldquo;Волга-Щит&ldquo;, возьмет на себя все операции по обеспечению охраны объектов. Мы предлагаем такие
					услуги как, охрана банков, охрана офисов, охрана дома, охрана дачи, гаражей и т.п. В штате компании
					работают только высококвалифицированные, хорошо подготовленные сотрудники, имеющие большой практический
					опыт и прошедшие строгий отбор. Наша охранная фирма использует самые передовые охранные системы: новейшие
					модели сигнализации, высокотехнологичные инженерные системы. Эта система позволяет поставить на охрану
					как весь объект, так и отдельные его помещения. Например, под охраной может находиться только гараж,
					рабочий кабинет или иные помещения, в которые запрещен вход проживающему при доме обслуживающему
					персоналу. В случае несанкционированного доступа в охраняемое помещение приемно-контрольный прибор
					посылает сигнал тревоги на пульт централизованной охраны (ПЦО). После получения сигнала тревоги на объект
					выезжает группа быстрого реагирования (ГБР), в настоящие время штат ЧОП &ldquo;Волга-Щит&ldquo;
					насчитывает более 25 экипажей, вооруженных служебным огнестрельным оружием. Оперативный дежурный
					контролирует и координирует действия ГБР, которая действует в соответствии с инструкцией, согласованной с
					заказчиком.
				</p>
				<br />
				<p>
					Действия ГБР при выезде на объект при получении на пульт централизованной охраны (ПЦО) тревожного сигнала
					с охраняемого объекта. Экипаж ГБР, вооруженный служебным оружием, прибывает на объект в оговоренное
					условиями договора с клиентом время, (в зависимости от расположения объекта), после поступления
					тревожного сигнала, производится внешний осмотр контура объекта на предмет наличия следов проникновения
					(попыток проникновения). В случае обнаружения признаков проникновения на объект, ГБР блокирует его, и
					обеспечивает физическую охрану объекта до прибытия клиента, либо его доверенных лиц. В ночное время суток
					клиент или его доверенные лица доставляются на объект и обратно силами охранного агентства. После
					прибытия клиента или его представителей производится вскрытие и осмотр объекта сотрудниками ГБР. Лица,
					осуществившие незаконное проникновение на объект, задерживаются сотрудниками ГБР и передаются в отделение
					УВД для дальнейшего расследования.
				</p>
				<br />
				<p>
					Действие ГБР при выезде на объект при получении на ПЦО тревожного сигнала КТС: члены экипажа ГБР в
					количестве 2-х человек, вооруженные служебным оружием, прибывают на объект в оговоренное условиями
					договора с клиентом время (в зависимости от расположения объекта) после поступления тревожного сигнала. В
					случае наличия противоправных действий на объекте сотрудники ГБР пресекают противоправные действия,
					задерживают злоумышленников и передают их сотрудникам милиции. В случае необходимости оперативный
					дежурный привлекает дополнительные подразделения:
				</p>
				<br />
				<ul>
					<li>• пожарной и аварийно-спасательной служб;</li>
					<li>• сотрудников правоохранительных органов;</li>
					<li>• скорой медицинской помощи;</li>
				</ul>
				<p>
					<strong>Преимущества подобной системы охраны</strong> - надежность, оперативность, быстрота реагирования
					по сигналу тревоги, низкая себестоимость. Работа всех подразделений основывается по принципу
					ориентированности на клиента, что обеспечивает Заказчику такие преимущества, как:
				</p>
				<ul>
					<li>• надежность устанавливаемых технических систем;</li>
					<li>• круглосуточное сервисное обслуживание; </li>
					<li>
						• оперативное прибытие специально обученных лицензированных сотрудников групп быстрого реагирования
						(ГБР) при поступлении сигнала тревоги;
					</li>
					<li>• заключение единого договора по всем объектам для сетевых клиентов; </li>
				</ul>
				<p>
					Сигнал от оборудованного объекта к ПЦО направляется через собственную сеть ретрансляторов по основному
					выделенному радиоканалу. Надежность радиоканала обеспечивается применением профессионального оборудования
					в системе сигнализации, и практической невозможностью глушения. Устанавливаемое оборудование может быть
					проводным и беспроводным. Проводное оборудование предусматривает прокладку кабелей, соединяющих датчики с
					приемно-контрольным прибором. Беспроводное оборудование не требует прокладки кабелей. Связь между
					датчиками и приемно-контрольным прибором внутри комплекса происходит по радиосигналу.
				</p>
				<p>
					В обязательном случае до начала монтажных работ проводится экспертиза объекта для составления проекта и
					сметы. Выезд эксперта и составление сметы производится бесплатно.
				</p>
				<h3>Как обеспечивается повышенная надежность устанавливаемой системы сигнализаций: </h3>
				<ul>
					<li>
						• происходит постоянная самодиагностика системы с немедленной передачей на ПЦО информации о выявленных
						нарушениях в работе;
					</li>
					<li>
						• технические средства охраны, установленные на объекте, могут работать при прекращении
						энергоснабжения не менее 24 часов,
					</li>
					<li>
						• в ассортименте предлагаемого оборудования имеются датчики, которые позволяют отличать движение людей
						от движения животных.
					</li>
					<li>
						• состав системы и своевременное техническое обслуживание позволяют свести к минимуму возникновение
						ложных вызовов
					</li>
				</ul>
				<h3>Дополнительные возможности пультовой охраны: </h3>
				<ul>
					<li>
						• передача сигнала &ldquo;снятие объекта с охраны под принуждением&ldquo;, когда злоумышленник
						заставляет вас лично открыть дверь объекта (офиса, квартиры и т.д.);
					</li>
					<li>• установка под охрану отдельных помещений объекта;</li>
					<li>
						• возможность получения ежемесячных отчетов о работе системы сигнализации (кто и когда
						открывал/закрывал объект, отключалось ли электричество).
					</li>
				</ul>
				<p>
					Пультовая охрана в России уже давно перестала быть редкостью. Начиная с 90-х годов, пультовая охрана
					становится всё более востребованной. Сейчас услуги пультовой охраны доступны не только весьма
					обеспеченным людям. Всё больше граждан разного достатка обращаются в частное охранное предприятие (ЧОП).{' '}
				</p>
				<p>
					Для частных клиентов и юридических лиц организация пультовой охраны своей недвижимости часто является
					самым экономичным и надежным способом ее защиты.
				</p>
			</div>
		</>
	);
};

export default PcoPage;
