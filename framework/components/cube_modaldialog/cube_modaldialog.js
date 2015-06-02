define([], function() {

	/**
	 * 模态对话框
	 * title: 标题，可选，默认为空
	 * content: 内容。
	 * isShowDialog: 是否显示对话框。 可选，默认为false。 
	 * isShowCloseBtn: 是否显示关闭按钮。可选，默认为true。
	 * isShowConfirmBtn: 是否显示确定按钮。可选，默认为true。
	 * width: 整个对话框的宽度，可选，默认为300。
	 * height:整个对话框的高度，可选，默认为100。
	 */
 	function modaldialogViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//导航条内容
		self.title = cube.initComponentProperty(params.title, '', 'obj');
		
		//选中变化处理事件。
		self.content = cube.initComponentProperty(params.content, '', 'obj');
		
		//是否显示对话框
		self.isShowDialog = cube.initComponentProperty(params.isShowDialog, false, 'obj');
		
		//是否显示关闭按钮
		self.isShowCloseBtn = cube.initComponentProperty(params.isShowCloseBtn, true, 'obj');
		
		//是否显示确定按钮
		self.isShowConfirmBtn = cube.initComponentProperty(params.isShowConfirmBtn, true, 'obj');
		
		//内部属性，动画显示
		self.animatShowBck = cube.obj();
		
		//内部属性，动画显示
		self.animatShowDialog = cube.obj();
		
		//导航条内容
		self.width = cube.initComponentProperty(params.width, 300, 'obj');
		
		//导航条内容
		self.height = cube.initComponentProperty(params.height, 100, 'obj');

		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	

		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************
		//关闭对话框
		self.closeDialog = function() {
			self.isShowDialog(false);
		}
		
		//点击确定按钮
		self.confirmDialog = function() {
			self.isShowDialog(false);
		}
		
		//关闭或打开对话框动画特效
		self.isShowDialog.subscribe(function(newValue){
			if(newValue == true) {
				self.animatShowBck(newValue);
				window.setTimeout(function(){
					self.animatShowDialog(newValue);
				},150);
			}
			else
				window.setTimeout(function(){
					self.animatShowBck(newValue);
				},310);
				window.setTimeout(function(){
					self.animatShowDialog(newValue);
				},10);
		});
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************

	}
	return modaldialogViewModel;
});