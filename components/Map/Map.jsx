import { useEffect, useRef } from 'react';
import styles from './Map.module.scss';

const Map = () => {
	const mapWrap = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');

		script.src =
			'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A19a2a4385dc571f16252de5bf421808d7ba852060df6ef716381a0322bd31f44&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true';
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
