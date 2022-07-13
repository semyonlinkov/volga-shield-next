import { createEvent, createStore } from "effector";

export const setNewsForm = createEvent();

export const $newsForm = createStore({ title: '', titleImage: {}, html: '', type: '' })
	.on(setNewsForm, (prev, payload) => ({ ...prev, ...payload }))