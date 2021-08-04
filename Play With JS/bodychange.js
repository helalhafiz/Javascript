const targetNode = document.body;
const config = { childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
        	console.log('df');
            const loadingSpinner = document.querySelector('#loading-spinner');
				loadingSpinner.addEventListener('click',function(){
					loadingSpinner.classList.add('ar-active');
					console.log('clicked');
					setTimeout(function(){
						loadingSpinner.classList.remove('ar-active');
				},3000);
			});
        }
    }
};