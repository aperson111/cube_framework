define([], function() {

	/**
	 * 下拉框组件
	 * panels: 所有面板
	 * selectedPanelRoute: 选中面板路由
	 * isAllowShowAll: 是否允许多个面板显示？保留，暂时不实现。
	 * isContentType： 内容类型，面板的内容通过html文本赋值实现。一个折叠控件中所有面板都统一类型，都为内容或者都为模板。
	 */
 	function collapsepanelViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		self.panels = cube.initComponentProperty(params.panels,[], 'arr');
		
		self.selectedPanelRoute = cube.initComponentProperty(params.selectedPanelRoute,
				self.panels()[0].route,'obj');
		
		self.isContentType = cube.initComponentProperty(params.isContentType,true, 'obj');
		
		self.isAllowShowAll = cube.initComponentProperty(params.isAllowShowAll,false, 'obj');
		
		//内部属性
		self.selectedPanel = cube.comp(function(){
			var sel = null;
			$.each(self.panels(),function(){
				
				if(sel != null) {
					return sel;
				}
					
				if(sel == null &&  self.selectedPanelRoute() == this.route) {
					sel= this;
					return;
				}
			});
			return sel;
		},self);

		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************
		

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		self.setSelectedPanel = function() {
			self.selectedPanelRoute(this.route);
		}
		
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		
		//***********************************************************
		//开始外部事件处理********************************************
		//***********************************************************


		//***********************************************************
		//结束外部事件处理********************************************
		//***********************************************************
	}
	return collapsepanelViewModel;
});