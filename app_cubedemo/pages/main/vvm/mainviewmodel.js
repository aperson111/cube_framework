/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		self.windowHeight = params.windowHeight;
		
		self.footHeight = params.footHeight;
		
		self.selectedComponent = cube.obj();
	};
	
	return PageViewModel;
});
