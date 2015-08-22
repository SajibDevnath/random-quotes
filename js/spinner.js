(function(global, $) {

	var Spin = function (selector) {
		return new Spin.init(selector);
	}

	Spin.prototype = {
		text: function () {
			
		}
	}

	Spin.init = function (selector) {
		var self = this;
		self.selector = document.querySelectorAll(selector) || '';

	}

	Spin.init.prototype = Spin.prototype;

	global.Spin = global.$$ = Spin;

}(window, jQuery))