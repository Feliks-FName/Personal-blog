const burger = document.getElementById('sidebarTogle');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const pageBlur = document.querySelector('.page__blur');


/* Открытие Burger-menu */
burger.addEventListener('click', function (e) {
	e.preventDefault();
	body.classList.toggle('show-sidebar');
});


/* Закрытие Burger-menu */
pageBlur.addEventListener('click', function (e) {
	e.preventDefault();
	body.classList.remove('show-sidebar');
	// let closedSidebar = event.currentTarget.closest();

	// closedSidebar.classList.remove('show-sidebar');
});

/* let page = event.currentTarget.closest('.modal'); */


