const showTopButton = () => {
	const topButton = document.querySelector('.button__top');
	window.addEventListener('scroll', () => {
		if (window.scrollY >= 300) topButton.classList.add('button__top_active');
		if (window.scrollY < 300) topButton.classList.remove('button__top_active');
	});
	topButton.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
};
showTopButton();