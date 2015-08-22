function Rotate() {
	this.d = 0;
	var _this = this;
	this.rotateImg = function (element, direction) {
		elem = document.getElementById(element);
		if ( direction == 'cw') { this.d = this.d - 1.5 } else { this.d = this.d + 1.5}
		elem.style.transform = "rotate(" + this.d + "deg)";
		if (this.d > 359) {
			this.d = 1;
		} else if ( this.d < -359) {
			this.d = -1;
		}
		setTimeout(function () { _this.rotateImg(element, direction);}, 40)
	}
}