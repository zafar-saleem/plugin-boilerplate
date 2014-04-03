;(function ($) {

	var ModuleName = (function () {
		var init = function (options, el) {
			/*
			if (typeof options === 'string') { // user enter just one string
				this.search = options;
			} else {
				// When user pass object as options
				this.search = options.search;
			}
			*/

			this.search = (typeof options === 'string') ? options : options.search;

			this.options = $.extend({}, $.fn.pluginName.options, options);
		};

		return {
			init: init
		}
	}());

	$.fn.pluginName = function (options) {
		return this.each(function () {
			var moduleinstance = Object.create(ModuleName);
			moduleinstance.init(options, this);
		});
	};

	$.fn.pluginName.options = {
		
	};
})(jQuery);