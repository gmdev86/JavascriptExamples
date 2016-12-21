/*	_ Object Constructor
========================*/

function _(id) {

	// About object is returned if there is no 'id' parameter
	var about = {
		Version: 0.1,
		Author: "Nathan Davis",
		Created: "12/09/2016",
		Updated: ""
	};

	// see if id or class

	if (id) {

		// Avoid clobbering the window scope: 
		// return a new _ object if we're in the wrong scope
		if (window === this) {
			return new _(id);
		}

		// We're in the correct object scop:
		// Init our element object and return the object
		// Let's check to see if searching by id or class
		var sCheck = id.charAt(0);
		var sLength = id.length;
		var sElement = id.slice(1,sLength);

		switch(sCheck){
			case '#':
				this.e = document.getElementById(sElement);
				return this;
			case '.':
				this.e = document.getElementsByClassName(sElement);
				return this;
			default:
				return about;
		}
		
	} else {
		// No 'id' paramter was given, return the 'about' object
		return about;
	}
}

/*	_ Prototype Functions
============================*/

_.prototype = {
	hide:	function () {
				this.e.style.display = 'none';
				return this;
			},

	show:	function () {
				this.e.style.display = 'inherit';
				return this;
			},

	bgcolor: function (color) {
				this.e.style.background = color;
				return this;
			},

	val:	function (newval) {
				this.e.value = newval;
				return this;
			},

	toggle: function () {
				if (this.e.style.display !== 'none') {
					this.e.style.display = 'none';
				} else {
					this.e.style.display = '';
				}
				return this;
			},

	size:	function (height, width) {
				this.e.style.height = height + 'px';
				this.e.style.width = width + 'px';
				return this;
			},
	about:	function(){
		        var o = new _();
				this.e.innerHTML = 'Author:&nbsp;&nbsp;&nbsp;' + o.Author + '<br />Created:&nbsp;&nbsp;' + o.Created + '<br />Updated:&nbsp;' + o.Updated + '<br />Version:&nbsp;&nbsp;' + o.Version; 
			},
	codeIt: function(){
				var sInnerText = this.e.innerHTML;
				var arrLines = new Array();
				arrLines = sInnerText.split('\n');

				var sFunction = '<span style="color:blue;">function</span>';
				this.e.innerHTML = sInnerText.replace("function",sFunction);
				//console.log(arrLines.length);
				//console.log(sInnerText);
				return this;
			}
};