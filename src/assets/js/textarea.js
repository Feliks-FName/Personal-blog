const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
	let textAreaHeight = item.offsetHeight;

	item.addEventListener('input', function (e) {
		e.preventDefault();

		let $this = event.currentTarget;

		$this.style.height = textAreaHeight + "px";
		$this.style.height = $this.scrollHeight + "px";


	});
});