/*!
 * scrifice-search.js
 * https://github.com/yaemon/
 *
 * Copyright r-jp, yaemon, wimlab.
 * Released under the MIT license
 *
 */

var mode = "scrifice";
dView[mode] = {};
dView.Status.disp[mode] = [
	"with1", "with2", "with3", "with4", "with5",
	"get1", "get2", "get3", "get4", "get5",
];
dView[mode].show = function(a) {
	var s;
	var stat = {"name":"", "no":0, "mode":mode, "titile":"", "hide":false};
	if (null == a){
		stat.title = "〇〇は何の素材になるか";
		return "";
	}
	if (null != a.notFound){
		stat.title = a.notFound + " が分かりません";
		return "";
	}
	stat = {"name":a.detail.name, "no":a.detail.no, "titile":"", "hide":false};
	a.race.type = a.race.type.trim();
	if (null == a.race.comb){
		document.title = a.detail.name + " は二身合体に使えません";
		s = "<h2>未実装</h2>",
		s += '<div id = "message">',
		s += '<p>' + a.race.type + "は素材になりません</p>",
		s += '</div>';
	}
	else
	{
		stat.title = a.detail.name + "は何の素材になるか";
		s = "<h2>検索結果</h2>";
		var rList = [];
		var rareTarget = a.detail.rare.length;

		for(let race of church.data){
			if (null == race.comb){continue;}
			for(let comb of race.comb){
				if (a.race.type == comb.n1){
					rList.push({"second":comb.n2, "summon":race});
				} else if (a.race.type == comb.n2){
						rList.push({"second":comb.n1, "summon":race});
				}
			}
		}
		for(let r of rList){
			let x = [];
			let i = 0, j = 0, z =0;
			let second = church.getRaceByName(r.second)
			while (true) {
				if (z==0) {z = Math.floor((a.detail.grade + second.list[i].grade) / 2 ) + 1};
				if (z <= r.summon.list[j].grade){
					x.push(
						{"second":second.list[i], "summon":r.summon.list[j],
						"price":church.invoice(r.summon.list[j], a.detail, second.list[i])}
					);
					z = 0, i++;
					if (i < second.max) continue;
					break;
				}
				j++;
				if (j < r.summon.max) continue;
				break;
			}
			if (x.length > 0) {
				s += '<article class="sozai-search"><h3>×' + r.second + "<br>＝" + r.summon.type + "</h3>";
				for (let e of x){
					var rareSecond = e.second.rare.length;
					var rareSummon = e.summon.rare.length;

					s += '<ul class="',
					s	+= "with" + rareSecond + " get" + rareSummon,
					s += '">';

					s += dView.d2liBox(e.second, "summon", "×");
					s += dView.d2liBox(e.summon, "scrifice", "＝");
					s += dView.p2liBox(e.price, rareSummon);
					s += "</ul>";
				}
				s += "</article>";
			}
		}
	}

	$("#info-ic").html('<img src="' + a.detail.img + '" alt="">');
	$("#info-name span").text(a.detail.name);
	$("#info-grade span").text(a.detail.grade);
	$("#info-type span").text(a.race.type);
	$("#info-rare span").text(a.detail.rare);
	$("#result").html(s);
	$("#info-prop li").each(function(b){$("span", this).html(a.detail.prop[b]) });

	return stat;
}
// vim:ts=4:sw=4:tw=78:fenc=utf-8:ff=unix:ft=javascript:noexpandtab:nolist
