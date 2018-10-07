/*!
 * d2-view.js
 * https://github.com/yaemon/
 *
 * Copyright r-jp, yaemon.
 * Released under the MIT license
 *
 */
'use strict';
const dView = {};
dView.Status = {
	"disp":{"common":["search-remove", "price"]},
}

/* 
 * event
 *  {{{1
 */
$(window).one("load", function(){
	dView.setAutoComplete();
	church.init();
	dView.Status.init();

 	$("head").append("<style></style>");

	$('input[type="checkbox"]').change(function(){
 		dView.Status.detail.showHide(
			$(this).attr("id"), $(this).prop("checked") );
	});

	const search = $("#search");
	search.keypress(function(i){
		13 == i.which && "" != search.val() && dView.Status.change(search.val());
   });
	$("#search-btn").click(function(){
		"" != search.val() && dView.Status.change(search.val());
	});
})

$(window).on("load hashchange onpopstate", function(){
	if (history.state)dView.Status.detail.restore(history.state)
	else dView.Status.detail.fromHash(location.hash);
	$("#search").focus();
})

$(document).on('ready', function(){ 
	$("#search").focus();
}).on('click', '.scrifice, .summon', function(){
		// const dom = $(this);
		// dView.Status.move( dom[0].className, dom.find('.memo').text());
		dView.Status.move( $(this)[0].className, $(this).find('.memo').text());
}).on('click', '.price', function(){
		// 同上
		var dom = $(this);
		dView.Status.move( dom[0].className, dom.find('.memo').text());
}).on( 'mouseenter mouseleave', '.scrifice, .summon', function(){
			$( this ).toggleClass( "ui-state-hover" );
});

/* }}}1 
 * dView.Status
 *  {{{1
 */

dView.Status.init = function(){
	dView.Status.detail = new vSecretary(mode);
	$("#copyright").append ( " " +  church.version().OneLiner );
};

dView.Status.flags = function(){
	return dView.Status.disp.common.concat(dView.Status.disp[mode]);
};

dView.Status.change = function(name){
	if(dView.Status.detail.target() == name)return;
	dView.clean();
	// 最終的には一行に戻す
	var stat = dView[mode].show(church.searchDaemonByName(name));
	if(stat) dView.Status.detail.update(stat);
};

dView.Status.move = function(mode, to){
	console.log( mode + " " + to );
};
/*
 * }}}1 
 * class vSecretary
 *  {{{1
 */

function vSecretary(mode){
	this.mode = ('undefined' == typeof(mode))? "": mode;
	this.no = 0;
	this.name = "";
	this.hidden = new bArray(dView.Status.flags());
	this.history_ = {};
}

vSecretary.prototype.target = function(){
	return this.name;
};

vSecretary.prototype.update = function(a){
	this.no = a.no;
	this.name = a.name;
	window.history.pushState(this.attash(), document.title, this.toHash());
	document.title = a.title
	this.showHide("search-remove", a.hide);
	this.selectForDaemon();
};

// on defact, vSecretary is like Singleton. note prototype :-)
//
vSecretary.prototype.toHash = function(){ // toHash() <-> fromHash()
	var s = "#mode="+mode;
	if (0 != this.no) s+= "#no=" + this.no;
	return s;
};

vSecretary.prototype.attash = function(){		// attash() <-> restore()
	return [this.mode, this.no];
};

vSecretary.prototype.showHide = function(attr, val){
	if(this.hidden.check(attr))
	{
		if (!val){
			this.hidden.toggle(attr, false);
			const c = "." + attr + "{display:none !important}";
			$("head style").html($("head style").html().replace(c, ""));
			this.history_[this.no] = this.hidden.bin();
		}
	}else if (val){
			this.hidden.toggle(attr, true);
			$("head style").append("." + attr + "{display:none !important}");
			this.history_[this.no] = this.hidden.bin();
	}
};

vSecretary.prototype.withButton_ = function(attr, val){
		$( '#' + attr).prop('checked' , val);
};

vSecretary.prototype.fromHash = function(hash){
	var no = null, mode = null;
	if (!hash || ""==hash){ return;}
	hash.split('#').forEach(function(t){
		const u = t.split('=');
		// switch(u[0]){
		if('no'==u[0]) no = u[1];
		else if('mode'==u[0]) mode = u[1];
	});
	this.restore([mode, no]);
	window.history.pushState(this.attash(), document.title, this.toHash());
};

vSecretary.prototype.restore = function(seed){
	if (seed[0] && this.mode != seed[0]) this.modeChange(seed[0]);
	if (seed[1] && this.no != seed[1]){
		let stat = dView[mode].show(church.searchDaemonByNumber(seed[1]));
		if (!stat){return false;}
		this.showHide("search-remove", stat.hide);
		this.name = stat.name;
		this.no = stat.no;
		$("#search").val(stat.name);
	}
	this.selectForDaemon();
};

vSecretary.prototype.selectForDaemon= function(){
	if (this.history_[this.no])
	{
		const change = this.hidden.compare(this.history_[this.no])
		for(const attr in change){
			this.showHide(attr, change[attr]);
			this.withButton_(attr, change[attr]);
		}
	}
};

vSecretary.prototype.modeChange = function(){
};
/* 
 * }}}1 
 * tools
 * {{{1
 */
dView.setAutoComplete = function(){
	$('#search').autocomplete({
		source: church.getDaemonNames(),
		autoFocus: true,
		delay: 0,
		minLength: 1
	});
};

dView.clean = function(){
  $("#info-name span, #info-grade span, #info-type span, #info-rare span").text(" ");
  $("#info-ic, #result, #search").empty();
};

// vim:ts=4:sw=4:tw=78:fenc=utf-8:ff=unix:ft=javascript:noexpandtab:nolist:foldmethod=marker:foldenable
