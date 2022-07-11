import React from 'react';
import Header from '../../components/Header/Header';
import styles from './PersonalDataAgreementPage.module.scss';

const PersonalDataAgreementPage = () => {
	return (
		<>
			<Header />
			<div className={styles.personal_data_wrapper}>
				<h1>Согласие на обработку персональных данных</h1>
				<p>
					Присоединяясь к настоящему Соглашению и оставляя свои данные на Сайте http://volga-shield.com, путем
					заполнения полей онлайн-заявки (регистрации) Пользователь:
				</p>
				<ul>
					<li>подтверждает, что указанные им персональные данные принадлежат лично ему;</li>
					<li>
						признает и подтверждает, что он внимательно и в полном объеме ознакомился с настоящим Соглашением и
						содержащимися в нем условиями обработки его персональных данных, указываемых им в полях он-лайн заявки
						(регистрации) на сайте;
					</li>
					<li>
						признает и подтверждает, что все положения настоящего Соглашения и условия обработки его персональных
						данных ему понятны;
					</li>
					<li>
						дает согласие на обработку Сайтом предоставляемых персональных данных в целях регистрации Пользователя
						на Сайте;
					</li>
					<li>
						выражает согласие с условиями обработки персональных данных без каких-либо оговорок и ограничений.
					</li>
				</ul>
				<p>
					Пользователь дает свое согласие на обработку его персональных данных, а именно совершение действий,
					предусмотренных п. 3 ч. 1 ст. 3 Федерального закона от 27.07.2006 N 152-ФЗ &quot;О персональных данных&quot;, и
					подтверждает, что, давая такое согласие, он действует свободно, своей волей и в своем интересе.
				</p>
				<p>
					Согласие Пользователя на обработку персональных данных является конкретным, информированным и
					сознательным.
				</p>
				<h3>Настоящее согласие Пользователя применяется в отношении обработки следующих персональных данных:</h3>
				<ul>
					<li>фамилия, имя, отчество;</li>
					<li>место пребывания (город, область);</li>
					<li>номера телефонов;</li>
					<li>адресах электронной почты (E-mail).</li>
				</ul>
				<h3>
					Пользователь, предоставляет организации ООО ВОЛГА-ЩИТ и сайту http://volga-shield.com право осуществлять
					следующие действия (операции) с персональными данными:
				</h3>
				<ul>
					<li>сбор и накопление;</li>
					<li>
						хранение в течение установленных нормативными документами сроков хранения отчетности, но не менее трех
						лет, с момента даты прекращения пользования услуг Сайта Пользователем;
					</li>
					<li>уточнение (обновление, изменение);</li>
					<li>использование в целях регистрации Пользователя на Сайте;</li>
					<li>уничтожение;</li>
					<li>
						передача по требованию суда, в т.ч. третьим лицам, с соблюдением мер, обеспечивающих защиту
						персональных данных от несанкционированного доступа.
					</li>
				</ul>
				<p>
					Указанное согласие действует бессрочно с момента предоставления данных и может быть отозвано Вами путем
					подачи заявления администрации Сайта с указанием данных, определенных ст. 14 Закона «О персональных
					данных».
				</p>
				<p>
					Отзыв согласия на обработку персональных данных может быть осуществлен путем направления Пользователем
					соответствующего распоряжения в простой письменной форме на адрес электронной почты (E-mail)
					volga-shield@mail.ru
				</p>
				<p>
					Сайт не несет ответственности за использование (как правомерное, так и неправомерное) третьими лицами
					информации, размещенной Пользователем на Сайте, включая её воспроизведение и распространение,
					осуществленные всеми возможными способами.
				</p>
				<p>
					Сайт имеет право вносить изменения в настоящее Соглашение. При внесении изменений в актуальной редакции
					указывается дата последнего обновления. Новая редакция Соглашения вступает в силу с момента ее
					размещения, если иное не предусмотрено новой редакцией Соглашения.
				</p>
				<p>
					Действующая редакция всегда находится на странице : Согласие на обработку персональных данных сайтом
					http://volga-shield.com
				</p>
				<p>
					К настоящему Соглашению и отношениям между пользователем и Сайтом, возникающим в связи с применением
					Соглашения подлежит применению материальное и процессуальное право Российской Федерации.
				</p>
			</div>
		</>
	);
};

export default PersonalDataAgreementPage;
