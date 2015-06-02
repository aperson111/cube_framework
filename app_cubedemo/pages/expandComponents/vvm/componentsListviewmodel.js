define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;
		
		
		
		self.selectedComponent = params.selectedComponent;
		
		self.thumbnailRootUrl = '../expandComponents/thumbnails/';
		
		self.components = cube.arr([
 		   {
 		    	value: 'cube_progressbar',
 		    	name : '进度条组件',
 		    	desc : '可以设置warning、danger属性，更直观显示进度的状态',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    		    warningValue: {
 		    				name:	"警告值",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj(0.3),
 		    				readonly: false
 		    		    },
 		    		    dangerValue: {
		    				name:	"危险值",
		    				editType: 'txt', //编辑类型
		    				value: cube.obj(1),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			progressValue:{
 		    				name:	"进度值",
 		    				editType: 'txt',
 		    				value: cube.obj(0.7),
 		    				readonly: false
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_navbar',
 		    	name : '导航条组件',
 		    	desc : '一般放置于页面顶端',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    		    isFixTop: {
 		    				name:	"是否在顶端悬浮",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(false),
 		    				readonly: false
 		    		    },
 		    		    isInverse: {
		    				name:	"是否反色",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    },
		    		    isShowDividerVertical: {
		    				name:	"是否显示分隔符",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			navTitle:{
 		    				name:	"导航条标题",
 		    				editType: 'txt',
 		    				value: cube.obj('测试导航条'),
 		    				readonly: false
 		    			},
 		    			items:{
 		    				name: "导航条内容",
 		    				editType: 'area',
 		    				value: [ {
 		    					text : '首页',
 		    					route : '#home',
 		    					hasChildren : false
 		    				}, {
 		    					text : '线损菜单',
 		    					route : '#linelossmenu',
 		    					hasChildren : true,
 		    					children : [
 		    					   {
 		    						   text : '省级统计',
 		    						   route : '#linelossmenu/province_statistic'
 		    					   },
 		    					   {
 		    						   text : '市级统计',
 		    						   route : '#linelossmenu/city_statistic'
 		    					   },
 		    					   {
 		    						   text : '县级统计',
 		    						   route : '#linelossmenu/county_statistic'
 		    					   }
 		    					]
 		    				}, {
 		    					text : '统计售电',
 		    					route : '#salestatistic',
 		    					hasChildren : false
 		    				}, {
 		    					text : '降损措施上报',
 		    					route : '#actionupload',
 		    					hasChildren : false
 		    				}],
 		    				readonly: true
 		    			},
 		    			selectedRoute: {
 		    				name:	"当前路由",
 		    				editType: 'txt',
 		    				value: cube.obj(),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_breadcrumb',
 		    	name : '面包屑导航组件',
 		    	desc : '通过该导航组件，可以快速返回上级菜单',
 		    	params:{
 		    	}
 		    },
 		   {
 		    	value: 'cube_tabcontainer',
 		    	name : '标签页组件',
 		    	desc : '通过该组件，可以进行标签页内容切换/展示',
 		    	params:{
 		    	}
 		    },
 		   {
 		    	value: 'cube_modaldialog',
 		    	name : '模态对话框组件',
 		    	desc : '通过该组件，弹出/关闭模态对话框',
 		    	params:{
 		    	}
 		    },
 		   {
 		    	value: 'cube_dropdownlist',
 		    	name : '下拉框组件',
 		    	desc : '通过该组件，弹出下拉菜单进行选择获取值',
 		    	params:{
 		    	}
 		    },
 		   {
 		    	value: 'cube_pageheader',
 		    	name : '标题展示组件',
 		    	desc : '通过该组件，显示主标题和副标题内容',
 		    	params:{
 		    	}
 		    }
        ]);
		
		self.setSelectedComponent = function() {
			self.selectedComponent(this);
		};
	};
	
	return PageViewModel;
});