const listElements1 = document.querySelectorAll('.features .cd-features-list li');
const listElements = document.querySelectorAll('.product .cd-features-list li');
const heightList = [];
listElements.forEach((element) => {
	heightList.push(element.offsetHeight);
});
const maxHeight = Math.max(...heightList);
let liCount = 0;
listElements1.forEach((element) => {
	element.style.lineHeight = '0px';
	element.style.minHeight = heightList[liCount];
	liCount++;
});
let valueLICount = 0;
listElements.forEach((element) => {

	element.style.minHeight = heightList[valueLICount];
	valueLICount++;
});


//for hrisov

//Divs as Button
const mobileBox1 = document.querySelector('.mobile-pricing-div:nth-child(1)');
const mobileBox2 = document.querySelector('.mobile-pricing-div:nth-child(2)');
const mobileBox3 = document.querySelector('.mobile-pricing-div:nth-child(3)');

//To Click
const itemOneSelect = document.querySelector('.tm-extra-product-options-container ul li:nth-child(1) label');
const itemTwoSelect = document.querySelector('.tm-extra-product-options-container ul li:nth-child(2) label');
const itemThreeSelect = document.querySelector('.tm-extra-product-options-container ul li:nth-child(3) label');

// Select Box One
mobileBox1.addEventListener('click', function() {
	itemOneSelect.click();
});
// Select Box Two
mobileBox2.addEventListener('click', function() {
	itemTwoSelect.click();
});
// Select Box Three
mobileBox3.addEventListener('click', function() {
	itemThreeSelect.click();
});