function inherit(obj) {
	if (Object.create) {
		return Object.create(obj);
	}
	var F = function() {};
	F.prototype = obj;
	return new F();
}

function defineSubClass(subc, superc, overrides, statics) {
	subc.prototype = inherit(superc.prototype);
	subc.prototype.constructor = subc;
	if (overrides) {
		for (var i in overrides) {
			subc.prototype[i] = overrides[i];
		}
	}
	if (statics) {
		for (var i in statics) {
			subc[i] = statics[i];
		}
	}
}