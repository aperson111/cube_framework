define([], function() {

	/**
	 * 面包屑导航
	 * params: 组件的视图模型设置参数
	 	items: 					导航条内容。								必须。
	 	selectedRoute:				当前选中的导航条。					可选。注意：如果外部希望得到该值，则该参数为必须。	
	 	selectedChanged:		选中变更事件								可选。
	 	splitTxt:				分隔符									可选。默认为'/'
	 */
 	function breadcrumbViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//导航条内容
		self.items = cube.initComponentProperty(params.data.items.value, [], 'arr');//params.items;
		
		//选中路由
		self.selectedRoute = cube.initComponentProperty(params.data.selectedRoute.value, null, 'obj');
		
		//分隔符
		self.splitTxt = cube.initComponentProperty(params.option.splitTxt.value, '/', 'obj');
		
		
		//选中变化处理事件。
		self.selectedChanged = params.event.selectedChanged.value!= null? params.event.selectedChanged.value : null;
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		//设置选中导航项
		self.setSelectRoute = function() {
			self.selectedRoute(this.route);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		//***********************************************************
		//开始外部事件处理************************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.selectedRoute.subscribe(function(newValue) {
			if(self.selectedChanged!=null) {
				self.selectedChanged(self.selectedItem());
			}
		});
		//***********************************************************
		//结束外部事件处理************************************************
		//***********************************************************
	}
	return breadcrumbViewModel;
});