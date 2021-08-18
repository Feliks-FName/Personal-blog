const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('[data-close]');
const modalWindow = document.querySelectorAll('.modal');




/* Открытие модальных окон */
modalBtn.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault();

		let $this = event.currentTarget;
		let modalId = $this.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
		let modalContent = modal.querySelector('.modal__content');

		modal.classList.add('modal--active');
		body.classList.add('no-scroll');

		modalContent.addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
});

/* Закрытие модальных окон */
modalClose.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		let modalCurrent = event.currentTarget.closest('.modal');

		closeModal(modalCurrent);
	})
});

modalWindow.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		let modalCurrent = event.currentTarget;

		closeModal(modalCurrent);
	});
});

function closeModal(modalCurrent) {
	modalCurrent.classList.remove('modal--active');
	body.classList.remove('no-scroll');
}

