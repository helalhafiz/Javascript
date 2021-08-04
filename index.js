document.querySelector('header').classList.add('header');
document.querySelector('.aws-search-field').classList.add('search-field');

const controleModel = document.querySelectorAll('.nv-nav-search');

controleModel.forEach(function(elm){
	elm.addEventListener('click',function(event){
		if (event.target.matches(".nv-nav-search") || !event.target.closest(".aws-search-form")) {
		const models = document.querySelectorAll('.menu-item-nav-search.minimal');
		models.forEach(function(elment){
			elment.classList.remove('active');
		});

		//add here

		
		}
	})
})

document.querySelector('.website_s').click();

document.querySelector('.nv-nav-search').addEventListener('click', function(e) {
	if (event.target.matches(".nv-nav-search") || !event.target.closest(".aws-search-form")) {
		document.querySelector('.menu-item-nav-search.minimal').classList.remove('active');
		
		// const toggleBtnModel = document.querySelector('.nv-icon.nv-search');
		// toggleBtnModel.click();
		// const isHidden = document.getElementsByClassName('.controleModel');
		// if (!isHidden.length > 0) {
		// 	controleModel.classList.add('controleModel');
		// }else{
		// 	controleModel.classList.remove('controleModel');
		// }
		
	}
});




//animation
const arButton = document.getElementById('ar-button');
arButton.addEventListener('click',function(e){
	console.log(e);
});