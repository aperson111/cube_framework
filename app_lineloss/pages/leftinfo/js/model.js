/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define(['./webpage'], function() {

	var PageViewModel = function() {
		var self = this;
		
	};
	
	var pvm = new PageViewModel();
	
	cube.startWebPage(pvm);
});
