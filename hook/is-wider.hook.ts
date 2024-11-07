import { useState, useEffect } from 'react';

/**
 * Watch window width and detect if current width is wider than provided threshold.
 * @param width Width threshold.
 * @param defaultValue Default value for SSR.
 */
const useIsWider = (width: number, defaultValue: boolean = false): boolean => {
	const [isWider, setIsWider] = useState(defaultValue);

	useEffect(() => {
		const clientWidth = document.documentElement.clientWidth;
		const isWider = clientWidth > width;
		if (isWider !== defaultValue) {
			setIsWider(isWider);
		}
	}, []);

	useEffect(() => {
		const handler = (e: UIEvent) => {
			const clientWidth = document.documentElement.clientWidth;
			const newIsWider = clientWidth > width;
			if (newIsWider !== isWider) {
				setIsWider(newIsWider);
			}
		};

		window.addEventListener('resize', handler);

		return () => window.removeEventListener('resize', handler);
	}, [width, isWider]);
	return isWider;
};

export default useIsWider;