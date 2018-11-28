/*!
 * moon.js
 * https://github.com/wim-lab/
 *
 * Copyright wim-lab.
 * Released under the MIT license
 *
 */
'use strict';

var NextFullMoonTime = new Date(2018,10,1,0,31,0);
var LunarPhase = 0;

function InitializeMoon() {
	var nowTime = new Date();
	while(NextFullMoonTime.getTime() < nowTime.getTime()){
		NextFullMoonTime.setMinutes(NextFullMoonTime.getMinutes()+118);
	}
}

function AddZero(number) {
	if( number < 10 ) { number = "0" + number; }
	return number;
}

function LunarPhaseCheck() {
	var nowTime = new Date();

	if( NextFullMoonTime.getTime() < nowTime.getTime() ){
		NextFullMoonTime.setMinutes( NextFullMoonTime.getMinutes() + 118 );
	}

	LunarPhase = ( NextFullMoonTime.getTime() - nowTime.getTime() ) / 60000;
	if( LunarPhase > 108 ){var msg = '<img src="img/ic_s_moon00.png" alt="">Full Moon';}
	else if(LunarPhase > 101){var msg = '<img src="img/ic_s_moon01.png" alt="">7/8 Moon';}
	else if(LunarPhase > 94){var msg = '<img src="img/ic_s_moon02.png" alt="">6/8 Moon';}
	else if(LunarPhase > 87){var msg = '<img src="img/ic_s_moon03.png" alt="">5/8 Moon';}
	else if(LunarPhase > 80){var msg = '<img src="img/ic_s_moon04.png" alt="">4/8 Moon';}
	else if(LunarPhase > 73){var msg = '<img src="img/ic_s_moon05.png" alt="">3/8 Moon';}
	else if(LunarPhase > 66){var msg = '<img src="img/ic_s_moon06.png" alt="">2/8 Moon';}
	else if(LunarPhase > 59){var msg = '<img src="img/ic_s_moon07.png" alt="">1/8 Moon';}
	else if(LunarPhase > 49){var msg = '<img src="img/ic_s_moon08.png" alt="">New Moon';}
	else if(LunarPhase > 42){var msg = '<img src="img/ic_s_moon09.png" alt="">1/8 Moon';}
	else if(LunarPhase > 35){var msg = '<img src="img/ic_s_moon10.png" alt="">2/8 Moon';}
	else if(LunarPhase > 28){var msg = '<img src="img/ic_s_moon11.png" alt="">3/8 Moon';}
	else if(LunarPhase > 21){var msg = '<img src="img/ic_s_moon12.png" alt="">4/8 Moon';}
	else if(LunarPhase > 14){var msg = '<img src="img/ic_s_moon13.png" alt="">5/8 Moon';}
	else if(LunarPhase > 7){var msg = '<img src="img/ic_s_moon14.png" alt="">6/8 Moon';}
	else if(LunarPhase > 0){var msg = '<img src="img/ic_s_moon15.png" alt="">7/8 Moon';}

	document.getElementById("Lunar phase").innerHTML = msg;
}

function NextFullMoon() {
	LunarPhaseCheck()

	var msg = '<h1 class="moon">';
	if( LunarPhase > 108 ){msg += '<img src="img/ic_m_moon00.png" alt="">Full Moon';}
	else if(LunarPhase > 101){msg += '<img src="img/ic_m_moon01.png" alt="">7/8 Moon';}
	else if(LunarPhase > 94){msg += '<img src="img/ic_m_moon02.png" alt="">6/8 Moon';}
	else if(LunarPhase > 87){msg += '<img src="img/ic_m_moon03.png" alt="">5/8 Moon';}
	else if(LunarPhase > 80){msg += '<img src="img/ic_m_moon04.png" alt="">4/8 Moon';}
	else if(LunarPhase > 73){msg += '<img src="img/ic_m_moon05.png" alt="">3/8 Moon';}
	else if(LunarPhase > 66){msg += '<img src="img/ic_m_moon06.png" alt="">2/8 Moon';}
	else if(LunarPhase > 59){msg += '<img src="img/ic_m_moon07.png" alt="">1/8 Moon';}
	else if(LunarPhase > 49){msg += '<img src="img/ic_m_moon08.png" alt="">New Moon';}
	else if(LunarPhase > 42){msg += '<img src="img/ic_m_moon09.png" alt="">1/8 Moon';}
	else if(LunarPhase > 35){msg += '<img src="img/ic_m_moon10.png" alt="">2/8 Moon';}
	else if(LunarPhase > 28){msg += '<img src="img/ic_m_moon11.png" alt="">3/8 Moon';}
	else if(LunarPhase > 21){msg += '<img src="img/ic_m_moon12.png" alt="">4/8 Moon';}
	else if(LunarPhase > 14){msg += '<img src="img/ic_m_moon13.png" alt="">5/8 Moon';}
	else if(LunarPhase > 7){msg += '<img src="img/ic_m_moon14.png" alt="">6/8 Moon';}
	else if(LunarPhase > 0){msg += '<img src="img/ic_m_moon15.png" alt="">7/8 Moon';}
	msg += "<br>";
	if( LunarPhase > 108 ){
		msg += "満月：効果消滅まで" + AddZero(Math.floor((LunarPhase-108)/60)) + ":" + AddZero(Math.floor((LunarPhase-108)%60)) + ":" + AddZero(Math.floor((LunarPhase-108)*60%60)) + "<br>";
		msg += "新月：効果発動まで" + AddZero(Math.floor((LunarPhase-59)/60)) + ":" + AddZero(Math.floor((LunarPhase-59)%60)) + ":" + AddZero(Math.floor((LunarPhase-59)*60%60));
	}else if(LunarPhase > 59){
		msg += "満月：効果発動まで" + AddZero(Math.floor(LunarPhase/60)) + ":" + AddZero(Math.floor(LunarPhase%60)) + ":" + AddZero(Math.floor(LunarPhase*60%60)) + "<br>";
		msg += "新月：効果発動まで" + AddZero(Math.floor((LunarPhase-59)/60)) + ":" + AddZero(Math.floor((LunarPhase-59)%60)) + ":" + AddZero(Math.floor((LunarPhase-59)*60%60));
	}else if(LunarPhase > 49){
		msg += "満月：効果発動まで" + AddZero(Math.floor(LunarPhase/60)) + ":" + AddZero(Math.floor(LunarPhase%60)) + ":" + AddZero(Math.floor(LunarPhase*60%60)) + "<br>";
		msg += "新月：効果消滅まで" + AddZero(Math.floor((LunarPhase-49)/60)) + ":" + AddZero(Math.floor((LunarPhase-49)%60)) + ":" + AddZero(Math.floor((LunarPhase-49)*60%60));
	}else{
		msg += "満月：効果発動まで" + AddZero(Math.floor(LunarPhase/60)) + ":" + AddZero(Math.floor(LunarPhase%60)) + ":" + AddZero(Math.floor(LunarPhase*60%60)) + "<br>";
		msg += "新月：効果発動まで" + AddZero(Math.floor((LunarPhase+59)/60)) + ":" + AddZero(Math.floor((LunarPhase+59)%60)) + ":" + AddZero(Math.floor((LunarPhase+59)*60%60));
	}
	msg += "</h1>";
	document.getElementById("Next Full Moon").innerHTML = msg;
}

function FullMoonCalendar() {
	var CheckTime = new Date();
	var FullMoonTime = new Date(NextFullMoonTime.getTime());
	var msg ='<div class="calendar">満月予報';
	
	if( CheckTime.getDate() != FullMoonTime.getDate() ) {
		var FullMoonYear = CheckTime.getFullYear();
		var FullMoonMonth = AddZero(CheckTime.getMonth()+1);
		var FullMoonDate = AddZero(CheckTime.getDate());
		msg += "<br>" + FullMoonYear + "/" + FullMoonMonth + "/" + FullMoonDate;
		CheckTime.setDate( FullMoonTime.getDate());
	}
	while ( CheckTime.getMonth() == FullMoonTime.getMonth() ) {
		var FullMoonYear = FullMoonTime.getFullYear();
		var FullMoonMonth = AddZero(FullMoonTime.getMonth()+1);
		var FullMoonDate = AddZero(FullMoonTime.getDate());
		msg += "<br>" + FullMoonYear + "/" + FullMoonMonth + "/" + FullMoonDate + " ";
		while ( CheckTime.getDate() == FullMoonTime.getDate() ) {
			var FullMoonHour = AddZero(FullMoonTime.getHours());
			var FullMoonMinute = AddZero(FullMoonTime.getMinutes());
			var FullMoonSecond = AddZero(FullMoonTime.getSeconds());
			msg += FullMoonHour + ":" + FullMoonMinute + " ";
			FullMoonTime.setMinutes( FullMoonTime.getMinutes() + 118 );
		}
		CheckTime.setDate( FullMoonTime.getDate());
	}
	CheckTime.setMonth(FullMoonTime.getMonth());
	while ( CheckTime.getMonth() == FullMoonTime.getMonth() ) {
		var FullMoonYear = FullMoonTime.getFullYear();
		var FullMoonMonth = AddZero(FullMoonTime.getMonth()+1);
		var FullMoonDate = AddZero(FullMoonTime.getDate());
		msg += "<br>" + FullMoonYear + "/" + FullMoonMonth + "/" + FullMoonDate + " ";
		while ( CheckTime.getDate() == FullMoonTime.getDate() ) {
			var FullMoonHour = AddZero(FullMoonTime.getHours());
			var FullMoonMinute = AddZero(FullMoonTime.getMinutes());
			var FullMoonSecond = AddZero(FullMoonTime.getSeconds());
			msg += FullMoonHour + ":" + FullMoonMinute + " ";
			FullMoonTime.setMinutes( FullMoonTime.getMinutes() + 118 );
		}
		CheckTime.setDate( FullMoonTime.getDate());
	}
	msg += "</div>";
	document.getElementById("Full Moon Calendar").innerHTML = msg;
}
