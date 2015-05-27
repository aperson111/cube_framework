define([], function() {

 	function treeViewModel(params) {
		var self = this;
	
		self.items = params.items;
		
		self.activeItem = self.items[0];
		
	}
	return treeViewModel;
});