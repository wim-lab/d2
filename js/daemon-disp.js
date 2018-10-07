/*!
 * daemon-disp
 * https://github.com/yaemon/
 *
 * Copyright r-jp, yaemon.
 * Released under the MIT license
 */
'use strict';
dView.priceFormat = new Intl.NumberFormat('en-US');

dView.d2liBox = function(a, b, c){
  var c = typeof c !== 'undefined' ?  c : "";

	return '<li class ="' + b + '">' +
	  '<span class = "memo">' +  	a.no  + '</span>' +
		'<span class="result-name">' + c + a.name + '</span>' +
		'<div class="result-item"><img src="' + a.img + '" alt=""/>' + 
		'<span class="result-rare">' + a.rare + '</span>' +
		'<span class="result-grade">Grade <span class="result-grade-num">' +
		a.grade + '</span></span>' +
		'</div></li>';
};

dView.p2liBox = function(a, b){
	var basePrice = (typeof b == 'undefined') ? "" : 	(b < 4 )? "" : (b == 4)? 
		"<br />" + dView.priceFormat.format(Math.ceil(a / 2)) : (b ==5)?
		"<br />" + dView.priceFormat.format(Math.ceil(a * 0.7)) : "Error";

	return '<li class ="price">' + 
		'<span class = "memo">' 	+ a  + "</span>"  + 
		dView.priceFormat.format(a) + basePrice +'</li>';
}
