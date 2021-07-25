const accordion = () => {
	const headerItemsLast = document.querySelectorAll('.header__popup-item-lasts');
	const asideNavMain = document.querySelector('.aside__nav-main');
	const asideNavTheory = document.querySelector('.aside__nav-theory');
	const asideNavPaktika = document.querySelector('.aside__nav-paktika');
	headerItemsLast.forEach(item => {
		item.style.height = '0px';
		item.classList.remove('active');
	});
	if (outerWidth <= 768) {
	asideNavMain.style.height = '0px';
	asideNavTheory.style.height = '0px';
	asideNavPaktika.style.height = '0px';
	}
	asideNavMain.classList.remove('active');
	asideNavTheory.classList.remove('active');
	asideNavPaktika.classList.remove('active');
};
export default accordion;