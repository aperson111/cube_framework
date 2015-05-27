define([], function() {

 	function navbarViewModel(params) {
		var self = this;
		
		self.navClassTheme = params.navClassTheme!= null ? 
				params.navClassTheme:"nav nav-tab";
	
		self.items = params.items;
		
		self.activeItem = ko.observable();
		
		self.currentRoute = params.currentRoute;
		
	}
	return navbarViewModel;
});