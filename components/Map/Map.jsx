import { useEffect, useRef } from 'react';
import styles from './Map.module.scss';

const Map = () => {
	const mapWrap = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');

		script.src =
			'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A148f8aa19899dca7143b1198e0290f375fc02ae08fc8c49ec59a5829461e33cc&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true';
		script.async = true;

		mapWrap.current.appendChild(script);

		return () => {
			if (mapWrap?.current) {
				mapWrap.current.removeChild(script);
			}
		};
	}, []);

	return <div ref={mapWrap} className={styles.map}></div>;
};

export default Map;
