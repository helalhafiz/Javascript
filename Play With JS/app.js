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
	removeBoxClass();
	this.classList.add('box-active');
	itemOneSelect.click();
});
// Select Box Two
mobileBox2.addEventListener('click', function() {
	removeBoxClass();
	this.classList.add('box-active');
	itemTwoSelect.click();
});
// Select Box Three
mobileBox3.addEventListener('click', function() {
	removeBoxClass();
	itemThreeSelect.click();
	this.classList.add('box-active');
});

//remove classes

function removeBoxClass(){
	const allBoxes = document.querySelectorAll('.box-active');
	allBoxes.forEach(function(e){
		e.classList.remove('box-active');
	});

}

//test

const classes = document.getElementsByClassName('ap5-pack-product');
const countClass = classes.length;

if (window.innerWidth > 768) {

	if (countClass == 1) {
		const porductWrapper = document.querySelector('#ap5-product-list');
		const productClass = document.querySelector('.ap5-pack-product');
		const cartPackClass = document.querySelector('.pb-right-column.col-xs-12.col-sm-4.col-md-3');
		porductWrapper.style.width = "53%";
		productClass.style.width = "85%";
		cartPackClass.style.width = "38%";
	}
}else{
		const productClass = document.querySelector('.ap5-pack-product');
		productClass.style.width = "100%";
}


div#ap5-product-list.only-one-product {
    width: 53%;
}
div.ap5-pack-product.only-one-product {
    width: 89% !important;
}
.pb-right-column.col-xs-12.col-sm-4.col-md-3.only-one-product {
    width: 38%;
}
/*pack content*/
ul#ap5-pack-product-tab-list li {
    max-height: 100px;
    min-width: 158px;
    padding: 9px 10px;
    min-height: 58px !important;
}
#ap5-pack-product-tabs-content > .tab-pane > div {
    display: block;
    width: 100%;
}
@media only screen and (max-width:768px){
div#ap5-product-list.only-one-product {
    width: 100%;
}
div.ap5-pack-product.only-one-product {
    width: 100% !important;
}
.pb-right-column.col-xs-12.col-sm-4.col-md-3.only-one-product {
    width: 88%;
}
}



//json object
{"UCID":"ETUL265331901","OrderID":0,"MaskedCardNumber":"424242XXXXXX4242","MaskedExpDate":"XXXX","EntryMethod":"Manual","CardToken":null,"AuthorizedAmount":454,"TransactionDateTime":"08022021 034650","TransactionType":"Sale","IsApproved":false,"ApprovalCode":"      ","CardVerificationResult":"","AvsResultCode":"0","TransRefCode":"","ValidationCode":"","ReponseMessage":"EXC W/D FREQ LIM","IsValidRequest":true,"InvalidFields":null,"GID":null,"Email":null,"PhoneNumber":null,"Nickname":null,"CardTokenExpDate":"01010001","CardBrand":"VISA","PurchaseOrderNumber":"23","UCRefCode":"615AA8176167E2056FF1E2755AEA892C","ErrorMessage":"","CardTokenList":null,"RemainingBalance":0}