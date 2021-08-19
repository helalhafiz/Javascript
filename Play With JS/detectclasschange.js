window.onload = function(){

	
 //More Details https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 // select the target node
var target = document.querySelector('.swiper-wrapper')
// create an observer instance
var observer = new MutationObserver(function(mutations) {
	const firstCount = document.querySelector('.fr-current-cunt');
	const currentItem = jQuery(".swiper-slide-active").index();
	
  	if(currentItem > 0){
		let frCount = currentItem+1;
	   firstCount.innerText = "0" + frCount +" ";
	 }else{
	   firstCount.innerText = "01 ";
	 }
});
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
// pass in the target node, as well as the observer options
observer.observe(target, config);		
		

};