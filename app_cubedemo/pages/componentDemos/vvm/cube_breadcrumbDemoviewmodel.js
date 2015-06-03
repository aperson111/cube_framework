define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		self.params = params;
		
		self.modifyRoute = function(e) {
			self.params.data.items.value.remove(e);
		};
		
		self.reloadData = function() {
			params.data.items.value([ {
				text : '首页',
				route : '#home'
			}, {
				text : '线损统计',
				route : '#linelossmenu'
			}, {
				text : '省级统计',
				route : '#linelossmenu/province_statistic'
			} ]);
			params.data.selectedRoute.value('#linelossmenu/province_statistic');
		};
	};
	
	return PageViewModel;
});