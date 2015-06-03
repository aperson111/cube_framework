define([], function() {

	/**
	 * 进度条组件
	 * progressValue: 当前进度值
	 * warningValue: 超过warningValue，进度处于警告
	 * dangerValue: 超过dangerValue，进度处于危险
	 */
 	function propressbarViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//导航条内容
		self.progressValue = cube.initComponentProperty(params.progressValue, 0, 'obj');
		
		//进度的不同状态的阀值
		self.warningValue = cube.initComponentProperty(params.warningValue, 1, 'obj');
		self.dangerValue =  cube.initComponentProperty(params.dangerValue, 1, 'obj');
		
		//进度条的进度状态数组，内部属性
		self.progressItems = cube.comp(function(){
			var items = [];
			if(self.progressValue()< self.warningValue()) {
				items.push(self.progressValue());
				items.push(0);
				items.push(0);
				return items;
			}
			else if(self.progressValue()> self.dangerValue()) {
				items.push(self.warningValue());
				items.push(self.dangerValue()-self.warningValue());
				items.push(self.progressValue()-self.dangerValue());
				return items;
			}
			else {
				items.push(self.warningValue());
				items.push(self.progressValue()-self.warningValue());
				items.push(0);
				return items;
			}
		},self);
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************

		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
		
		//***********************************************************
		//开始外部事件处理************************************************
		//***********************************************************
		//调用外部的selectedChange事件
		self.progressValue.subscribe(function(newValue) {
			if(self.progressChanged!=null) {
				self.progressChanged();
			}
		});
		//***********************************************************
		//结束外部事件处理************************************************
		//***********************************************************
	}
	return propressbarViewModel;
});