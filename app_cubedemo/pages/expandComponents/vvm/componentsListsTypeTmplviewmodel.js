define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		self.components =  params.components;
		self.route = params.route;
		self.thumbnailRootUrl = params.thumbnailRootUrl;
		
		self.setSelectedComponent = params.setSelectedComponent;
	};
	
	return PageViewModel;
});