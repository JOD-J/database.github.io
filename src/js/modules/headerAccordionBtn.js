import accordion from './accordion';
const headerAccordionBtn = () => {
	const headerPopupNav = document.querySelector('.header__popup-nav');

	const addAccordion = (target) => {
		if (target.tagName === 'A' || target.tagName === 'H3') {
			target = target.parentElement;
		} else {
			target = target;
		}
		[...target.children].forEach(item => {
			if (item.classList.contains('header__popup-item-lasts') || item.classList.contains('main__item-first')) {
				let pp;
				if (item.classList.contains('header__popup-item-lasts')) {
					pp = item.parentElement.children[0].nextElementSibling;
				} else {
					pp = item.parentElement.children[1].nextElementSibling;
				}
				const child = pp.childNodes[1];
				if (item.classList.contains('active')) {
					accordion();
				} else {
					accordion();
					item.classList.add('active');
					item.style.height  = child.offsetHeight + 'px';
				}
			} 
		});
	};
	
	headerPopupNav.addEventListener('click', (event) => {
		const target = event.target;
		if (target.matches('.header__popup-item-first-accordion')) {
			addAccordion(target);
		}
		if (target.matches('.header__popup-link-first-accordion')) {
			addAccordion(target);
		}
	});
}

export default headerAccordionBtn;