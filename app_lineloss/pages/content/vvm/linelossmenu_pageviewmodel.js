define([], function() {
	var PageViewModel = function(params) {
	
		var self = this;
		
		self.statisticTabContents = [
		     {
		    	 route: 'province_statistic',
		    	 text: '省级统计'
		     },
		     {
		    	 route: 'city_statistic',
		    	 text: '市级统计'
		     }
			];
		self.statisticActTabContent = cube.obj(self.statisticTabContents[0]);
		
		
		self.dropdownlistItems = [{value:"北京"},{value:"上海"},{value:"浙江"},{value:"江苏"},{value:"江西"},{value:"湖南"},{value:"湖北"}];
		self.selectDropdownlistValue = cube.obj(self.dropdownlistItems[0].value);
	};
	
	return PageViewModel;
});
