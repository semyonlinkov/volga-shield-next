import React, { useState } from 'react';
import styles from './OrderService.module.scss';
import { Input, Select, message } from 'antd';

import TextArea from 'antd/lib/input/TextArea';
import Link from 'next/link';

const { Option } = Select;

const OrderService = () => {
	const [form, setForm] = useState({ name: '', phone: '', mail: '', target: null, descriptiion: '' });

	// console.log(form);

	return (
		<div style={{ width: '100%' }}>
			<div className={styles.orderService_wrapper}>
				<h2 className={styles.title}>Форма обратной связи</h2>
				<div className={styles.form_wrapper}>
					<div className={styles.form}>
						<div className={styles.form_item1}>
							<Input
								size="large"
								placeholder="Имя, фамилия *"
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								value={form.name}
							/>
						</div>
						<div className={styles.form_item2}>
							<Input
								size="large"
								placeholder="Телефон *"
								onChange={(e) => setForm({ ...form, phone: e.target.value })}
								value={form.phone}
							/>
						</div>
						<div className={styles.form_item3}>
							<Input
								size="large"
								placeholder="E-mail"
								onChange={(e) => setForm({ ...form, mail: e.target.value })}
								value={form.mail}
							/>
						</div>
					</div>
					<Select
						placeholder="Цель обращения *"
						size="large"
						className={`${styles.select_order} select_order`}
						onChange={(e) => setForm({ ...form, target: e })}
						value={form.target}>
						<Option value="Устроиться на работу">Устроиться на работу</Option>
						<Option value="Заказать услуги охраны">Заказать услуги охраны</Option>
						<Option value="Отправить жалобу">Отправить жалобу</Option>
						<Option value="Другое">Другое</Option>
					</Select>
					<TextArea
						className={styles.textarea_order}
						size="large"
						placeholder="Описание заявки *"
						autoSize={{ minRows: 3, maxRows: 5 }}
						value={form.descriptiion}
						onChange={(e) => setForm({ ...form, descriptiion: e.target.value })}
					/>
					<div style={{ width: '100%', padding: '10px 0', textAlign: 'center' }}>
						<Link href={'/personal-data-agreement'} style={{ fontSize: '0.9rem' }}>
							Заполняя форму, я соглашаюсь на обработку персональных данных
						</Link>
					</div>
					<button
						onClick={() => {
							const { name, phone, target, descriptiion } = form;

							if (phone.length < 10) {
								return message.error('Некорректно введен номер телефона!');
							}

							if (name && phone && target && descriptiion) {
								fetch(
									`https://volga24bot.com/bot/volgaShieldSiteBot.php?name=${name}&phone=${phone}&target=${target}&description=${descriptiion}`,
								)
									.then((data) => data.json())
									.then((res) => {
										if (res) {
											message.success('Заявка отправленна успешно!');
										}
									})
									.finally(() => setForm({ name: '', phone: '', target: null, descriptiion: '', mail: '' }));
							} else {
								message.warning('Одно из обязательных полей не заполнено!');
							}
						}}
						className="btn"
						style={{ border: '1px solid #dfdfdf', padding: '0.95rem', textAlign: 'center' }}>
						<span>Отправить</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderService;
