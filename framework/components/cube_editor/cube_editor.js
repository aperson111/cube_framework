define([], function() {

	/**
	 * 富文本编辑器组件
	 * value: 编辑内容
	 * readonly: 是否为只读
	 * editType： 编辑器类型:txt\dropdownlist\chkbox\radio\div\area
	 * editOptions：编辑器参数
	 * 
	 */
 	function editorViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		self.value = cube.initComponentProperty(params.value, '', 'obj');
		
		self.readonly = cube.initComponentProperty(params.readonly, false, 'obj');
		
		self.editType = cube.initComponentProperty(params.editType, 'txt', 'obj');
		
		self.editOptions = cube.initComponentProperty(params.editOptions, {}, 'obj');
		

		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	
		
		
		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		self.selectListItem = function() {
			self.value().list(this);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
	}
	return editorViewModel;
});