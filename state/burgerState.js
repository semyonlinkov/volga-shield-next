import { createEvent, createStore } from 'effector';

export const setIsBurgerActive = createEvent();

export const $isBurgerActive = createStore(false).on(
	setIsBurgerActive,
	(_, payload) => payload
);