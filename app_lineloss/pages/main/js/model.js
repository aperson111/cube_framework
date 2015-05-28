/*
 * 每个page的视图模型。每个page的index本身也是一个视图模板
 */
//页面视图模型绑定的数据内容

define(['./webpage'], function() {
	
	

	var PageViewModel = function() {
		var self = this;
		
		
	};
	
	var pvm = new PageViewModel();
	
	//并没能解决ie下模板加载的问题。仍然需要将模板写在最外层。
	$(document).ready(function(){
		cube.startWebPage(pvm);
	});
});
