define([], function() {

	/**
	 * params: 组件的视图模型设置参数
	 	items:       cube.arr()类型，下拉框的选项。			必须。
	 	selectItem: 当前选中项，默认为第一个值。				可选。注意：如果外部希望得到该值，则该参数为必须。
	 	isSplit:	下拉框是否为分裂模式，默认为非分裂模式。	可选。
	 	selectedChanged: 选中内容变化处理事件。				可选。
	 */
 	function dropdownlistViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//初始化下拉框内容
		self.items = params.items != null ? params.items : cube.arr([]);
		
		//设置选中值
		self.selectedItem = params.selectedItem != null ? params.selectedItem : 
			self.items().length>0 ? cube.obj(self.items()[0]) : cube.obj(null) ;
		
		//是否为分裂下拉框
		self.isSplit = params.isSplit != null ? params.isSplit : cube.obj(false);
		
		//是否显示下拉框
		self.isShowDropdownOptions = cube.obj(false);
		
		//选中变化处理事件。
		self.selectedChanged = params.selectedChanged!= null? params.selectedChanged : null;
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************
		

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		
		//展开下拉框菜单
		self.doOpenDropdownOptions = function() {
			self.isShowDropdownOptions(true);
		};
		
		//关闭下拉框菜单
		self.doCloseDropdownOptions = function() {
			self.isShowDropdownOptions(false);
		};
		
		//选择下拉框选项
		self.selectItem = function() {
			self.selectedItem(this);
			self.isShowDropdownOptions(false);
		}
		
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		
		//***********************************************************
		//开始外部事件处理********************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.selectedItem.subscribe(function(newValue) {
			if(self.selectedChanged!=null)
				self.selectedChanged(newValue);
		});
		//***********************************************************
		//结束外部事件处理********************************************
		//***********************************************************
	}
	return dropdownlistViewModel;
});