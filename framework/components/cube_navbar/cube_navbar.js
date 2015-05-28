define([], function() {

	/**
	 * params: 组件的视图模型设置参数
	 	navTitle:   			导航的标题，在导航条最左侧显示。			可选。
	 	items: 					导航条内容。								必须。
	 	isSplit:				下拉框是否为分裂模式，默认为非分裂模式。	可选。
	 	selectedItem:				当前选中的导航条。						可选。注意：如果外部希望得到该值，则该参数为必须。	
	 	isShowDividerVertical:	是否显示导航条分隔符。					可选。	
	 	selectedChanged:		选中变更事件
	 */
 	function navbarViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//导航标题。默认为空
		self.navTitle = params.navTitle != null ? params.navTitle : cube.obj("");
		
		//导航条内容
		self.items = params.items;
		
		//是否显示导航条分隔符，默认显示
		self.isShowDividerVertical = params.isShowDividerVertical != null ?
			params.isShowDividerVertical : cube.obj();
		
		//当前选中项
		self.selectedItem = params.selectedItem != null ? params.selectedItem : cube.obj(self.items()[0]);//默认为第一个

		//选中变化处理事件。
		self.selectedChanged = params.selectedChanged!= null? params.selectedChanged : null;
		//鼠标经过菜单项，为hover样式。
		self.hoverItem = cube.obj();
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		//设置选中导航项
		self.setSelectItem = function() {
			self.selectedItem(this);
		}
		//如果有子菜单，显示子菜单
		self.openSubItems = function() {
			self.hoverItem(this);
		}
		//如果没有子菜单，隐藏子菜单
		self.closeSubItems = function() {
			self.hoverItem(null);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		//***********************************************************
		//开始外部事件处理************************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.selectedItem.subscribe(function(newValue) {
			if(self.selectedChanged!=null)
				self.selectedChanged(newValue);
		});
		//***********************************************************
		//结束外部事件处理************************************************
		//***********************************************************
	}
	return navbarViewModel;
});