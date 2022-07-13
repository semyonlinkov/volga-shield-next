import { message } from "antd";

export const addOneNews = ({ html, title, titleImage }) => {
	let data = new FormData();

	console.log({ html, title, titleImage });

	data.append('html', html);
	data.append('title', title);
	data.append('titleImg', titleImage);

	fetch(`https://volga24bot.com/ok/volgashield/addNews.php`, {
		method: "POST",
		body: data
	})
		.then(res => res.json())
		.then(res => {

			if (res) {
				message.success('Заявка успешно создана')
			} else {
				alert('Произошла непредвиденная ошибка(')
			}

		})
		.catch(err => console.log(err));
}