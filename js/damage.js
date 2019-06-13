/*!
 * damage.js
 * https://github.com/wim-lab/
 *
 * Copyright wim-lab.
 * Released under the MIT license
 *
 */
'use strict';

function BrandsCalc(){
	document.getElementById("Brands-Atk-Percentage").value =
	Number(document.getElementById("a-Head-Atk-Percentage").value) +
	Number(document.getElementById("a-RArm-Atk-Percentage").value) +
	Number(document.getElementById("a-LArm-Atk-Percentage").value) +
	Number(document.getElementById("a-Body-Atk-Percentage").value) +
	Number(document.getElementById("a-Leg-Atk-Percentage").value) ;
	document.getElementById("Brands-Atk-Real").value =
	Number(document.getElementById("a-Head-Atk-Real").value) +
	Number(document.getElementById("a-RArm-Atk-Real").value) +
	Number(document.getElementById("a-LArm-Atk-Real").value) +
	Number(document.getElementById("a-Body-Atk-Real").value) +
	Number(document.getElementById("a-Leg-Atk-Real").value) ;
	document.getElementById("Brands-MAtk-Percentage").value =
	Number(document.getElementById("a-Head-MAtk-Percentage").value) +
	Number(document.getElementById("a-RArm-MAtk-Percentage").value) +
	Number(document.getElementById("a-LArm-MAtk-Percentage").value) +
	Number(document.getElementById("a-Body-MAtk-Percentage").value) +
	Number(document.getElementById("a-Leg-MAtk-Percentage").value) ;
	document.getElementById("Brands-MAtk-Real").value =
	Number(document.getElementById("a-Head-MAtk-Real").value) +
	Number(document.getElementById("a-RArm-MAtk-Real").value) +
	Number(document.getElementById("a-LArm-MAtk-Real").value) +
	Number(document.getElementById("a-Body-MAtk-Real").value) +
	Number(document.getElementById("a-Leg-MAtk-Real").value) ;
	StatusCalc();
};

function StatusCalc() {
	document.getElementById("a-Atk").value = Math.floor(
	((100 + Number(document.getElementById("Brands-Atk-Percentage").value)) / 100 ) * 
	(50 + (2.1 * Number(document.getElementById("a-St").value)) +
	(5.6 * Number(document.getElementById("a-Lv").value))) +
	Number(document.getElementById("Brands-Atk-Real").value)
	) ;
	document.getElementById("a-MAtk").value = Math.floor(
	((100 + Number(document.getElementById("Brands-MAtk-Percentage").value)) / 100 ) * 
	(50 + (2.1 * Number(document.getElementById("a-Ma").value)) +
	(5.6 * Number(document.getElementById("a-Lv").value))) +
	Number(document.getElementById("Brands-MAtk-Real").value)
	) ;
	DamageCalc();
};

function DamageCalc(){
	var dmg = Math.floor(
	 ( 0.4 * document.getElementById("a-Atk").value - 0.2 * document.getElementById("d-Def").value )
	 * ( document.getElementById("pwr").value / 100 )
	 * ( 1 + document.getElementById("dmg").value / 100 )
	) ;
	var msg = "ダメージ：" + dmg;
	document.getElementById("Damage").innerHTML = msg;
};
