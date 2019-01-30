/*!
 * damage.js
 * https://github.com/wim-lab/
 *
 * Copyright wim-lab.
 * Released under the MIT license
 *
 */
'use strict';

function DamageCalc(){
	var dmg = Math.floor(
	 ( 0.4 * document.getElementById("atk").value - 0.2 * document.getElementById("def").value )
	 * ( document.getElementById("pwr").value / 100 )
	 * ( 1 + document.getElementById("dmg").value / 100 )
	);
	var msg = "ダメージ：" + dmg;
	document.getElementById("Damage").innerHTML = msg;
}
