import accordion from './accordion';
const headerAccordionBtn = () => {
	const headerPopupNav = document.querySelector('.header__popup-nav');
	const headerPopupItemLasts = document.querySelectorAll('.header__popup-item-lasts');

	const addAccordion = () => {
		headerPopupItemLasts.forEach(item => {
			if (item.classList.contains('header__popup-item-lasts-active')) {
				let child;
				[...item.children].forEach(elem => {
					if (elem.parentElement.classList.contains('header__popup-item-lasts-active')) {
						child = elem;
						if (item.classList.contains('active')) {
							accordion();
						} else {
							accordion();
							item.classList.add('active');
							item.style.height  = child.offsetHeight + 'px';
						}
					};
				});
			}
		});
	};
	
	headerPopupNav.addEventListener('click', (event) => {
		const target = event.target;
		if (target.matches('.header__popup-link-first-accordion')) {
			target.nextElementSibling.classList.add('header__popup-item-lasts-active');
			addAccordion();
		}
	});
}

export default headerAccordionBtn;