/*!
 * church-price.js
 * https://github.com/yaemon/
 *
 * Copyright yaemon ,
 *		thanks patches from hungcat@github
 * Released under the MIT license
 *
 * Origin: 5ch Wiki
 * https://wikiwiki.jp/d2-megaten-l/%E4%BA%8C%E8%BA%AB%E5%90%88%E4%BD%93#d83c974e
 *
 * 2018-05-13
 */

'use strict';
church.unitPrice = {
	"★★★★★": {10:60000, 9:1500000, 8:3000000, 7:4200000},
	"★★★★": {9:3000, 8:6000, 7:150000, 6:300000, 5:320000},
	"★★★": {7:250, 6:500, 5:2500, 4:5000, 3:5200, 2:5400},
	"★★": {6:5, 5:5, 4:5 , 3:25, 2:50},
	"★": {5:5, 4:5, 3:5, 2:5},
};

church.gradePrice = [
	0.0, 0.150, 0.30, 0.450, 60.0,
	75, 1080, 1260, 14400, 16200
];


church.invoice = function(a, x, y){
	var sumRare = x.rare.length + y.rare.length;
	var price = church.unitPrice[a.rare][sumRare];

	var choice = Math.floor(a.grade / 10);
	var step = a.grade - (x.grade + y.grade) / 2.0;

	price += Math.floor(church.gradePrice[choice] * step);

	if (price < 0) price = 0;

	return price;
};
