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
		
		self.gridColumnOptions = [
		      {title: '区域名称',editable: true, type:'text'},
		    	  // 'dropdownlist',dropdownlistOptions: [{value:"北京"},{value:"上海"},{value:"浙江"},{value:"江苏"},{value:"江西"},{value:"湖南"},{value:"湖北"}]},  //type: text表示文本框，dropedit表示下拉框，checkbox表示复选框
		      {title: '总量',editable: true, type: 'text'},
		      {title: '收益',editable: false, type: 'text'}
		];
		self.gridColumnDatas = [
		   {values:[{value:'北京市'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'上海市'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'天津市'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'河北省'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'江苏省'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'江西省'},{value:'1424324'},{value:'42342.31'}]},
		   {values:[{value:'湖南省'},{value:'1424324'},{value:'42342.31'}]}
		];
		
		self.selectGridItem = cube.obj();
		
		self.dropdownlistItems = [{value:"北京"},{value:"上海"},{value:"浙江"},{value:"江苏"},{value:"江西"},{value:"湖南"},{value:"湖北"}];
		self.selectDropdownlistValue = cube.obj(self.dropdownlistItems[0].value);
	};
	
	return PageViewModel;
});
