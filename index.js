document.querySelector('.nv-nav-search').addEventListener('click', function(e) {
	if (event.target.matches(".nv-nav-search") || !event.target.closest(".aws-search-form")) {
		document.querySelector('.menu-item-nav-search.minimal').classList.remove('active');
	}
});