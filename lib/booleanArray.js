/*!
 * booleanArray.js
 * https://github.com/yaemon/
 *
 * Copyright yaemon.
 * Released under the MIT license
 *
 */
function bArray(names){
	'use strict';
	this.index = names;
	this.revindex_ = null;
	this.data_ = 0; // MAX_SAFE_INTEGER は2の53乗あるから、52項目は保存できる
}

bArray.prototype.revindex = function(name){
	if (null == this.revindex_){
		this.revindex_ = {};
		for(let i in this.index){
			this.revindex_[this.index[i]] = i;
		}
	}
	return this.revindex_[name];
};

bArray.prototype.toggle = function(name, value){
	var i = this.revindex(name);
	if ('undefined' == typeof(value)){
		this.toggle_(i);
	}else if(value){
		this.set_(i, true);
	}else{
		this.set_(i, false);
	}
};

bArray.prototype.toHash = function(){
	return this.data_.toString(2);
};

bArray.prototype.compare = function(bin){ // on javascript , accept decimal string.
	var ret = {};
	var x = 1;
	for (let i in names){
		if( x & this.data_ )
		{
			if (x & bin); else ret[names[i]] = false;
		}else{
			if (x & bin) ret[names[i]] = true;
		}
		x <<=1;
	}
	return ret;
};

bArray.prototype.bin = function(){
	return this.data_;
};

bArray.prototype.exists = function(){
	return (this.data_ != 0 );
};

bArray.prototype.check = function(name){
	var i = this.revindex(name);
	if(this.data_ & (1<<i)) return true;
	return false;
};

bArray.prototype.toggle_ = function(i){
	this.data_ ^= (1<<i);
};

bArray.prototype.set_ = function(i,b){
	var x = 1<<i;
	if(b) this.data_ |= x;
	else{
		if(this.data_ & x ) this.data_ ^= x;
	}
};
