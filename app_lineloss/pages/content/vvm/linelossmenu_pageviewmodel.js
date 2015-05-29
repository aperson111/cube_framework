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
		     },
		     {
		    	 route: 'county_statistic',
		    	 text: '县级统计'
		     }
			];
		
		//选中tab的路由
		self.tabRoute = params.tabRoute;
		
		self.modifyTabContent = function(e) {
			if(DEBUG_MODE)
				alert("tab页发生变化，当前："+e.text);
			self.tabRoute(e.route);
		};
		
		self.dropdownlistValue=cube.obj("bj");
		
		self.dropdownlistItems = [
		                          {value:"bj",text:"北京"},
		                          {value:"sh",text:"上海"},
		                          {value:'zj',text:"浙江"},
		                          {value:'js',text:"江苏"},
		                          {value:'jx',text:"江西"},
		                          {value:'hn',text:"湖南"},
		                          {value:'hn',text:"湖北"}];
		//默认选择第一个
		self.selectedDropdownlistItem = cube.obj(self.dropdownlistItems[0]);
		
		self.showValue = function(e){
			self.selectedDropdownlistItem(e);
		};
	};
	
	return PageViewModel;
});
