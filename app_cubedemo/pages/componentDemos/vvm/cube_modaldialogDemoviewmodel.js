define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		self.params = params;
		
		self.showModalDialog = function() {
			params.data.isShowDialog.value(true);
		}
	};
	
	return PageViewModel;
});