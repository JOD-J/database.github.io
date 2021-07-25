import accordion from './accordion';

const headerBtnBurger = () => {
	const headerBtnBurger = document.querySelector('.header__btn-burger');
	const headerPopup = document.querySelector('.header__popup');
	const headerИavСlose = document.querySelector('.header__popup-nav-close');

	headerBtnBurger.addEventListener('click', () => {
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
	});
	headerИavСlose.addEventListener('click', () => {
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
	});
}

export default headerBtnBurger;