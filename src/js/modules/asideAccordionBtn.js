import accordion from './accordion';
const asideAccordionBtn = () => {
	const asideContainer = document.querySelector('.aside__container');
	const asideWrapper = document.querySelector('.aside__wrapper');
	
	const addAccordion = () => {
		[...asideWrapper.children].forEach(item => {
			if (item.classList.contains('aside__nav-active') ) {
				let child;
				[...item.children].forEach(item => {
					if (item.classList.contains('aside__items-active')) {
						child = item;
					};
				});
				if (item.classList.contains('active')) {
					accordion();
				} else {
					accordion();
					item.classList.add('active');
					item.style.height  = child.offsetHeight + 'px';
				};
			};
		});
	};
	
	asideContainer.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('.aside__btn-burger')) {
			addAccordion();
		}
		if (target.matches('.aside__title')) {
			addAccordion();
		}
	});
}

export default asideAccordionBtn;