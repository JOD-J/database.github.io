import accordion from './accordion';
const headerAccordionBtn = () => {
	const headerPopupNav = document.querySelector('.header__popup-nav');
	const headerPopupItemLasts = document.querySelectorAll('.header__popup-item-lasts');

// header__popup-item-lasts-active
	const addAccordion = () => {
		headerPopupItemLasts.forEach(item => {
			if (item.classList.contains('header__popup-item-lasts-active')) {
				let child;
				[...item.children].forEach(elem => {
					// console.log('item: ', item);
					if (elem.parentElement.classList.contains('header__popup-item-lasts-active')) {
						console.log('elem: ', elem);
						console.log('elem: ', elem);
						child = elem;
						console.log('child: ', child);
						if (item.classList.contains('active')) {
							accordion();
						} else {
							accordion();
							item.classList.add('active');
							// console.log('item: ', item);
							item.style.height  = child.offsetHeight + 'px';
							
						}
					};
				});
			}
			// console.log('item: ', item);
			// console.log('item: ', item);
			// console.log('item: ', item);
			// const pp = item.nextElementSibling;
			// console.log('pp: ', pp);
			// const child = item.childNodes[1];

			// console.log('child: ', child);

		});
		// if (target.tagName === 'A' || target.tagName === 'H3') {
		// 	target = target.parentElement;
		// } else {
		// 	target = target;
		// }
		// [...target.children].forEach(item => {
		// 	if (item.classList.contains('header__popup-item-lasts') || item.classList.contains('main__item-first')) {
		// 		let pp;
		// 		if (item.classList.contains('header__popup-item-lasts')) {
		// 			pp = item.parentElement.children[0].nextElementSibling;
		// 		} else {
		// 			pp = item.parentElement.children[1].nextElementSibling;
		// 		}
		// 		const child = pp.childNodes[1];
		// 		if (item.classList.contains('active')) {
		// 			accordion();
		// 		} else {
		// 			accordion();
		// 			item.classList.add('active');
		// 			item.style.height  = child.offsetHeight + 'px';
		// 		}
		// 	} 
		// });
	};
	
	headerPopupNav.addEventListener('click', (event) => {
		const target = event.target;
		// if (target.matches('.header__popup-item-first-accordion')) {
		// 	addAccordion(target);
		// }
		if (target.matches('.header__popup-link-first-accordion')) {
			// accordion();
			target.nextElementSibling.classList.add('header__popup-item-lasts-active');
			addAccordion();
		}
	});
}

export default headerAccordionBtn;