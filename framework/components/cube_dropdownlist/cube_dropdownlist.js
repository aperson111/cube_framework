define([], function() {

	/**
	 * 下拉框组件
	 * params: 组件的视图模型设置参数
	 	items:       cube.arr()类型，下拉框的选项。			必须。
	 	selectedValue: 当前选中项，默认为第一个值。				可选。注意：如果外部希望得到该值，则该参数为必须。
	 	isSplit:	下拉框是否为分裂模式，默认为非分裂模式。	可选。
	 	selectedChanged: 选中内容变化处理事件。				可选。
	 	disabled:		设置下拉按钮是否可用
	 	isHrefRoute:            是否设置锚定值
	 */
 	function dropdownlistViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//初始化下拉框内容
		self.items = cube.initComponentProperty(params.items, [], 'arr');
		
		//设置选中值
		self.selectedValue = cube.initComponentProperty(params.selectedValue, 
				self.items().length>0?self.items()[0].value:"", 'obj');
			
		//内部模型属性，下拉框选中项
		self.selectedItem = cube.comp(function(){
			var sel = null;
			$.each(self.items(),function(){
				if(self.selectedValue() == this.value) {
					sel= this;
					return;
				}
			});
			return sel;
		},self);
		
		//是否为分裂下拉框
		self.isSplit = cube.initComponentProperty(params.isSplit, false, 'obj');
		
		//内部属性是否显示下拉框
		self.isShowDropdownOptions = cube.obj(false);
		
		//选中变化处理事件。
		self.selectedChanged = params.selectedChanged!= null? params.selectedChanged : null;
		
		//下拉框是否可用
		self.disabled = cube.initComponentProperty(params.disabled, true, 'obj');
		
		//是否设置锚定值
		self.isHrefRoute = cube.initComponentProperty(params.isHrefRoute, false, 'obj');
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************
		

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		
		//展开下拉框菜单
		self.doOpenDropdownOptions = function() {
			if(self.disabled()==false)
				self.isShowDropdownOptions(true);
		};
		
		//关闭下拉框菜单
		self.doCloseDropdownOptions = function() {
			if(self.disabled()==false)
				self.isShowDropdownOptions(false);
		};
		
		//选择下拉框选项
		self.selectItem = function() {
			self.selectedValue(this.value);
			self.isShowDropdownOptions(false);
		}
		
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		
		//***********************************************************
		//开始外部事件处理********************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.selectedValue.subscribe(function(newValue) {
			if(self.selectedChanged!=null) {
				self.selectedChanged(self.selectedItem());
			}
			
			if(self.isHrefRoute()) {
				window.location.hash = newValue;
			}
		});
		//***********************************************************
		//结束外部事件处理********************************************
		//***********************************************************
	}
	return dropdownlistViewModel;
});