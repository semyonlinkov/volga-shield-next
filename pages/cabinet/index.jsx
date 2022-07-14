import { UserOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Menu, Space } from 'antd';
import { $newsForm, setNewsForm } from '../../state/newsForm';
import styles from './CabinetPage.module.scss';
import Editor from '../../components/Editor/Editor';
import UploadImg from '../../components/UploadImg/UploadImg';
import { useStore } from 'effector-react';
import { addOneNews } from '../../api-service/addOneNews';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;

const CabinetPage = () => {
	const newsForm = useStore($newsForm);

	const sendOneNewsHandler = (form) => {
		addOneNews(form);
	};

	// return null;

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider breakpoint="lg" collapsedWidth="0">
				<div className={styles.logo}>Кабинет</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{ key: 'Создать новость', icon: React.createElement(UserOutlined), label: 'Создать новость' },
						{
							key: 'Управление',
							icon: React.createElement(UserOutlined),
							label: 'Управление',
						},
						{ key: 'Выход', icon: React.createElement(UserOutlined), label: 'Выход' },
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
					}}>
					<h3 style={{ textAlign: 'center', color: 'white' }}>ВОЛГА-ЩИТ</h3>
				</Header>
				<Content
					style={{
						margin: '24px 16px 0',
					}}>
					<div
						className={styles.site_layout_background}
						style={{
							padding: 24,
						}}>
						<h5 style={{ margin: '0 0 10px 5px' }}>Заголовок</h5>
						<Input
							value={newsForm.title}
							onChange={(e) => setNewsForm({ title: e.target.value })}
							placeholder="Заголовок"
						/>
						<div>
							<h5 style={{ margin: '10px 0 10px 5px' }}>Загрузить изображение для заголовка</h5>
							<UploadImg />
						</div>
						<h5 style={{ margin: '10px 0 10px 5px' }}>Текст новости</h5>
						<Editor />
						<Space style={{ paddingTop: '15px' }} size="large">
							<Button type="primary" onClick={() => sendOneNewsHandler(newsForm)}>
								Отправить новость
							</Button>
							<Button type="primary" danger>
								Очистить
							</Button>
						</Space>
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}>
					Volga-shield @ 2022
				</Footer>
			</Layout>
		</Layout>
	);
};

export default CabinetPage;
