import removePopup from './removePopup';
import addPopup from './addPopup';

const addRemoveBurgerHeader = () => {
	const headerBtnBurger = document.querySelector('.header__btn-burger');
	const headerИavСlose = document.querySelector('.header__popup-nav-close');

	headerBtnBurger.addEventListener('click', () => {
		addPopup();
	});
	headerИavСlose.addEventListener('click', () => {
		removePopup();
	});
}

export default addRemoveBurgerHeader;