define([], function() {

 	function tabContainerViewModel(params) {
		var self = this;
		
		self.tabContents = params.tabContents;
		self.actTabContent = params.actTabContent;
		
		self.showTabContent = function(item) {
			self.actTabContent(item);
		}
	}
	return tabContainerViewModel;
});