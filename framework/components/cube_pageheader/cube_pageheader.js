define([], function() {

	/**
	 * 标题组件
	 * title:    标题，必须
	 * subTitle: 副标题，可选。默认为空
	 * titleSize: 标题尺寸，默认为'h1'，可选。
	 * isSubtitleWrap: 副标题是否换行标志，可选，默认不换行。
	 */
 	function pageheaderViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//标题
		self.title = cube.initComponentProperty(params.title,"", 'obj');
		
		//副标题
		self.subTitle = cube.initComponentProperty(params.subTitle, '', 'obj');
		
		//标题尺寸
		self.titleSize = cube.initComponentProperty(params.titleSize, 'h1', 'obj');
		
		//副标题是否换行
		self.isSubtitleWrap = cube.initComponentProperty(params.isSubtitleWrap, true, 'obj');
		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	
	}
	return pageheaderViewModel;
});