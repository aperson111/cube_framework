define([], function() {

	/**
	 * 标签容器
	 * params: 组件的视图模型设置参数
	 	tabContents: cube.arr()类型，tab容器的tab项数组			必须。
	 	selectedTabRoute: 当前选中项的路由，默认为第一个值。	可选。注意：如果外部希望得到该值，则该参数为必须。
	 	selectedChanged: 选中内容变化处理事件。				可选。
	 	disabled:		设置tab是否可用
	 */
 	function tabContainerViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//外部的tab项
		self.tabContents = cube.initComponentProperty(params.tabContents, [], 'arr');
		
		//选中tab项的路由
		self.selectedTabRoute = cube.initComponentProperty(params.selectedTabRoute, 
				self.tabContents()[0].route, 'obj');
		
		//内部视图模型属性，通过selectedchanged传递。在tabContent的模板中，可以调用该项。但是外部不允许调用和改变。
		self.selectedTab = cube.comp(function(){
			var sel = null;
			$.each(self.tabContents(),function(){
				if(self.selectedTabRoute() == this.route) {
					sel= this;
					return;
				}
			});
			return sel;
		},self);
		
		self.selectedChanged = params.selectedChanged!= null? params.selectedChanged : null;
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	
		
		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		//切换选中tab的内容（根据route切换）
		self.showTabContent = function(item) {
			self.selectedTabRoute(item.route);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		
		//***********************************************************
		//开始外部事件处理********************************************
		//***********************************************************
		self.selectedTabRoute.subscribe(function(newValue) {
			if(self.selectedChanged!=null) {
				self.selectedChanged(self.selectedTab());
			}
		});
		//***********************************************************
		//结束外部事件处理********************************************
		//***********************************************************
	}
	return tabContainerViewModel;
});