import { createStore, createEffect } from 'effector';

export const getNews = createEffect(async () => {
	try {
		const req = await fetch('https://volga24bot.com/ok/volgashield/getNews.php');
		return req.json();
	} catch (err) {
		console.log(err);
	}
})

export const $news = createStore([]).on(
	getNews.doneData,
	(_, data) => data
);