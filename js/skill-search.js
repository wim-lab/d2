/*!
 * summon-search.js
 * https://github.com/yaemon/
 *
 * Copyright r-jp, yaemon, wim-lab.
 * Released under the MIT license
 *
 */
'use strict';

var mode = "skill";
/* One point memo:
 var IncludeFile = (function() {
    if (document.currentScript) {
        return document.currentScript.src;
    } else {
        var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length-1];
        if (script.src) {
            return script.src;
        }
    }
})();
*/
dView[mode] = {};
dView.Status.disp[mode] =[
	"pStd", "pHalf", "pMax", 
	"rare1", "rare2", "rare3", "rare4", "rare5",
];

dView[mode].show = function(a) {
	let s;
	let stat = {"name":"", "no":0, "mode":mode, "titile":"", "hide":false};
	stat.title = document.getElementById("search").value + "を継承するには";
	s = "<h2>検索結果</h2>";

	var rList = [];
	for(let race of church.data){
		if (null == race.list){continue;}
		rList.push(race)
	}
	s+= "<h1>共通</h1>"
	for(let r of rList){
		s += "<article><h3>"+r.type+"</h3>";
		for(let d of r.list){
			if ( d.skill[0] == document.getElementById("search").value ) {
				s += "<ul>";
				s += dView.d2liBox(d, "summon");
				s += "</ul>";
			}
		}
		s += "</article>"
	}
	s+= "<h1>荒神</h1>"
	for(let r of rList){
		s += "<article><h3>"+r.type+"</h3>";
		for(let d of r.list){
			if ( d.skill[1] == document.getElementById("search").value ) {
				s += "<ul>";
				s += dView.d2liBox(d, "summon");
				s += "</ul>";
			}
		}
		s += "</article>"
	}
	s+= "<h1>加護</h1>"
	for(let r of rList){
		s += "<article><h3>"+r.type+"</h3>";
		for(let d of r.list){
			if ( d.skill[2] == document.getElementById("search").value ) {
				s += "<ul>";
				s += dView.d2liBox(d, "summon");
				s += "</ul>";
			}
		}
		s += "</article>"
	}
	s+= "<h1>異能</h1>"
	for(let r of rList){
		s += "<article><h3>"+r.type+"</h3>";
		for(let d of r.list){
			if ( d.skill[3] == document.getElementById("search").value ) {
				s += "<ul>";
				s += dView.d2liBox(d, "summon");
				s += "</ul>";
			}
		}
		s += "</article>"
	}
	s+= "<h1>防魔</h1>"
	for(let r of rList){
		s += "<article><h3>"+r.type+"</h3>";
		for(let d of r.list){
			if ( d.skill[4] == document.getElementById("search").value ) {
				s += "<ul>";
				s += dView.d2liBox(d, "summon");
				s += "</ul>";
			}
		}
		s += "</article>"
	}
//			for(let skill of d.skill){
//				if ( skill == document.getElementById("search").value ) {
//					s += "<ul>";
//					s += dView.d2liBox(d, "summon");
//					s += "</ul>";
//				}
//			}
//		}
//		s += "</article>"
//	}
//	$("#info-ic").html('<img src="' + a.detail.img + '" alt="">');
//	$("#info-name span").text(a.detail.name);
//	$("#info-grade span").text(a.detail.grade);
//	$("#info-type span").text(a.race.type);
//	$("#info-rare span").text(a.detail.rare);
	$("#result").html(s);
//	$("#info-prop li").each(function(b){$("span", this).html(a.detail.prop[b]) })

	return stat;
};
