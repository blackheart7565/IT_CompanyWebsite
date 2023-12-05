const MenuBurger = target => {
	const menuBtnBurger = target.closest('._menu__nav-btn')
	const menuBurger = document.querySelector('._menu__burger-mobile')
	const menuBurgerInner = document.querySelector('._menu__burger-mobile--inner')

	if (menuBtnBurger) {
		menuBtnBurger.classList.remove('_activeBtnMenu')
		menuBurger.classList.remove('_opened')
		menuBurgerInner.classList.remove('_openedInner')
	}
}
