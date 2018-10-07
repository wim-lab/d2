/*!
 * church-interfaces.js
 * https://github.com/yaemon/
 *
 * Copyright r-jp, yaemon.
 * Released under the MIT license
 *
 */
 'use strict';
const church = {};

// Interfaces.
church.init = function(){
	church.setRaceIndex();
	church.loadImages();
};

church.searchDaemonByName = function(a) {
	for (let e in church.data)
		for (let t in church.data[e].list)
			if (a == church.data[e].list[t].name)
				return {"race":church.data[e], "rank":t, "detail":church.data[e].list[t]};
	return {"notFound": a};
}

church.searchDaemonByNumber = function(a) {
	for (let e in church.data)
		for (let t in church.data[e].list)
			if (a == church.data[e].list[t].no)
				return {"race":church.data[e], "rank":t, "detail":church.data[e].list[t]};
	return null;
}

church.getDaemonNames =function(){
	var daemonNames = [];
	for(let d in church.data)
		for(let n in church.data[d].list)
			daemonNames.push(church.data[d].list[n].name);
	return daemonNames;
};

church.getRaceByName = function(a) {
	if (!  church.raceIndexMaked){
		church.setRaceIndex();
	}
	return (church.data[church.raceIndex[a]]);
}

// For filescope.
church.raceIndex = {};
church.raceIndexMaked = false;

// Inner Functions.
church.setRaceIndex = function(){
	for (let i in church.data){
		church.raceIndex[church.data[i].type] = i;
		church.data[i].max = church.data[i].list.length;
	}
	church.raceIndexMaked = true;
};

church.loadImages = function(){
	for(let d in church.data)
		for(let n in church.data[d].list)
			new Image().src = church.data[d].list[n].img
};
