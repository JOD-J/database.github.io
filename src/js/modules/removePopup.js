import accordion from './accordion';

const removePopup = () => {
	const headerPopup = document.querySelector('.header__popup');
	const animatePopup = () => {
		let count = 0;
		const go = () => {
			count += 10;
			headerPopup.style.transform = `translateX(${count}%)`;
			const animate = requestAnimationFrame(go);
			if (count === 100) {
				cancelAnimationFrame(animate);
				accordion();
			}
		};
		requestAnimationFrame(go);
	};
	animatePopup();
};

export default removePopup;