document.addEventListener('click', event => {
	const targetElement = event.target
	if (targetElement) {
		HeaderFunction(targetElement) // кнопка бургера заголовка
		MenuBurger(targetElement) // меню бургера
	} else {
		console.log('Элемента нету на странице!')
	}
})
