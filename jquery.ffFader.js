var x = 0;
(function($) {
	var f = {
		init : function(options) { 
		  
		},
		startpager : function(n) {
			x = x + 1; y = x + 1;
			if (x == n) { y = 1; }
			cur = ".test" + x;
			nxt = ".test" + y;
			$(cur).fadeOut(500);
			$(nxt).fadeIn(500);
			if (x == n) { x = 0; }
		}
	};

	$.fn.pager = function() {
  		var n = 0;
		this.children('li').each(function () {
			n = n + 1;
			test = "test" + n;
			$(this).addClass(test);
			if (n > 1) { $(this).hide(); }
		});
		var int=self.setInterval(function(){f.startpager(n)},2000);
		
	};
})(jQuery);