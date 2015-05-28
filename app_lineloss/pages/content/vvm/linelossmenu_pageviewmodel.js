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
		
		
		self.dropdownlistItems = [
		                          {value:"bj",text:"北京"},
		                          {value:"sh",text:"上海"},
		                          {value:'zj',text:"浙江"},
		                          {value:'js',text:"江苏"},
		                          {value:'jx',text:"江西"},
		                          {value:'hn',text:"湖南"},
		                          {value:'hn',text:"湖北"}];
		self.selectedDropdownlistItem = cube.obj(self.dropdownlistItems[0]);
	};
	
	return PageViewModel;
});
