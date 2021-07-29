import accordion from './accordion';

const addPopup = () => {
	const headerPopup = document.querySelector('.header__popup');
	const animatePopup = () => {
		let count = 100;
		const go = () => {
			count -= 10;
			headerPopup.style.transform = `translateX(${count}%)`;
			const animate = requestAnimationFrame(go);
			if (count === 0) {
				cancelAnimationFrame(animate);
				accordion();
			}
		};
		requestAnimationFrame(go);
	};
	animatePopup();
};

export default addPopup;