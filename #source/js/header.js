const HeaderFunction = target => {
	const btnBurger = target.closest('.header__nav-btnicon')
	const btnBurgerIcon = target.closest('.header__nav-icon')

	const menuBtnBurger = document.querySelector('._menu__nav-btn')
	const menuBurger = document.querySelector('._menu__burger-mobile')
	const menuBurgerInner = document.querySelector('._menu__burger-mobile--inner')

	if (btnBurger) {
		btnBurgerIcon.classList.add('_nav-btnicon-active')

		menuBtnBurger.classList.add('_activeBtnMenu')
		menuBurger.classList.add('_opened')
		menuBurgerInner.classList.add('_openedInner')
	}
}
