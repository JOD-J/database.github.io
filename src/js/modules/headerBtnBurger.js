const headerBtnBurger = () => {
	const headerBtnBurger = document.querySelector('.header__btn-burger');
	const headerPopup = document.querySelector('.header__popup');
	const headerИavСlose = document.querySelector('.header__popup-nav-close');
	const headerItemsLast = document.querySelectorAll('.header__popup-item-lasts');
	const acardeon = () => {
		headerItemsLast.forEach(item => {
			item.style.height = '0px';
			item.classList.remove('active');
		});
		// mainItemFirst.forEach(item => {
		// 	item.style.height = '0px';
		// 	item.classList.remove('active');
		// });
		
	};
	headerBtnBurger.addEventListener('click', () => {
		const animatePopup = () => {
			let count = 100;
			const go = () => {
				count -= 5;
				headerPopup.style.transform = `translateX(${count}%)`;
				const animate = requestAnimationFrame(go);
				if (count === 0) {
					cancelAnimationFrame(animate);
					acardeon();
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
				count += 5;
				headerPopup.style.transform = `translateX(${count}%)`;
				const animate = requestAnimationFrame(go);
				if (count === 100) {
					cancelAnimationFrame(animate);
					// acardeon();
				}
			};
			requestAnimationFrame(go);
		};
		animatePopup();
	});
}

export default headerBtnBurger;