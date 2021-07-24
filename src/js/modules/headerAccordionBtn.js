
const headerAccordionBtn = () => {
	const headerPopupNav = document.querySelector('.header__popup-nav');
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
					acardeon();
				} else {
					acardeon();
					item.classList.add('active');
					// console.log('item: ', item);
					item.style.height  = child.offsetHeight + 'px';
					// if (item.classList.contains('header__item-lasts')) {
					// } else {
					// 	item.style.height  = child.offsetHeight + 'px';
					// }
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
		if (target.closest('.header__items-last-theory')) {
			[...headerItemsLastTheory.children].forEach((item, index) =>  {
				if (item === target.parentElement || item === target) {
					addActiveClass(mainWrapTheory, index, 'main__items-active');
					removePopup();
				};
			});
		};
	});
}

export default headerAccordionBtn;