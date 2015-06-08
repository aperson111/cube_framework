define([], function() {

	/**
	 * 富文本编辑器组件
	 * contentHtml: 内容html。允许拷贝到页面直接用。
	 */
 	function richeditorViewModel(params) {
		var self = this;
		
		//***********************************************************
		//开始初始化视图模型数据**************************************
		//***********************************************************	
		
		//内部属性
		self.isShowFontFamilyOptions = cube.obj(false);
		
		//内部属性
		self.isShowFontSizeOptions = cube.obj(false);
		
		//内部属性，字体选项列表
		self.fontFamilyOptions = [
		     {name:'宋体'},
		     {name:'微软雅黑'},
		     {name:'楷体'},
		     {name:'Serif'},
		     {name:'Sans'},
		     {name:'Arial'},
		     {name:'Arial Black'},
		     {name:'Courier'},
		     {name:'Courier New'},
		     {name:'Comic Sans MS'},
		     {name:'Helvetica'},
		     {name:'Impact'},
		     {name:'Lucida Grande'},
		     {name:'Lucida Sans'},
		     {name:'Tahoma'},
		     {name:'Times'},
		     {name:'Times New Roman'},
		     {name:'Verdana'}
		];
		
		//内部属性，字体大小列表
		self.fontSizeOptions = [
		     {name:'大号',value:5},
		     {name:'中号',value:3},
		     {name:'小号',value:1}
		];
		
		//内部属性，字体主题
		self.actFontFamily = cube.obj(self.fontFamilyOptions[0]);
		
		//内部属性，字体大小
		self.actFontSize = cube.obj(self.fontSizeOptions[0]);
		
		//内部属性，是否加粗
		self.isFontBold = cube.obj(false);
		
		//内部属性，是否斜体
		self.isFontItalic = cube.obj(false);
		
		//内部属性，是否删除格式
		self.isFontStrikethrough = cube.obj(false);
		
		//内部属性，是否下划线
		self.isFontUnderline = cube.obj(false);
		
		//是否加圆形项目编号
		self.isFontBulletlist = cube.obj(false);
		
		//是否加数字项目编号
		self.isFontNumberlist = cube.obj(false);
		
		//是否加缩进
		self.isFontIndent = cube.obj(false);
		
		//左右对齐布局
		self.fontAlign = cube.obj('left');//默认左对齐。其他值：right/center/justify
		
		//是否显示链接
		self.isShowHyperlink = cube.obj('');
		
		//html文本内容
		self.contentHtml = cube.initComponentProperty(params.contentHtml, '输入内容...', 'obj');

		//***********************************************************
		//结束初始化视图模型数据**************************************
		//***********************************************************	
		
		
		//***********************************************************
		//开始事件处理************************************************
		//***********************************************************

		//设置字体
		self.showFontFamilyOptions = function() {
			self.isShowFontFamilyOptions(true);
		}
		self.hiddenFontFamilyOptions = function() {
			self.isShowFontFamilyOptions(false);
		}
		self.setActFontFamily = function() {
			self.actFontFamily(this);
			self.isShowFontFamilyOptions(false);
		}
		
		//设置字体大小
		self.showFontSizeOptions = function() {
			self.isShowFontSizeOptions(true);
		}
		self.hiddenFontSizeOptions = function() {
			self.isShowFontSizeOptions(false);
		}
		self.setActFontSize = function() {
			self.actFontSize(this);
			self.isShowFontSizeOptions(false);
		}
		//***********************************************************
		//结束事件处理************************************************
		//***********************************************************
	}
	return richeditorViewModel;
});