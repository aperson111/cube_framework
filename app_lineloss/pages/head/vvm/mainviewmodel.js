define([], function() {
	var PageViewModel = function(params) {
	
		var self = this;
		
		self.navItems = params.navItems;
		
		self.currentNavRoute = params.currentNavRoute;
	};
	
	return PageViewModel;
});
