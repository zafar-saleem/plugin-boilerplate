;(function ($) {

	var ModuleName = (function () {
		var init = function (options, el) {
			
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