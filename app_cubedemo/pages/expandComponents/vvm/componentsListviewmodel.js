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
 		    	params: {
 		    		appearance: {
 		    		},
 		    		option: {
 		    			splitTxt: {
 		    				name:	"分隔符",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj('/'),
 		    				readonly: false
 		    		    }
 		    		},
 		    		data: {
 		    			items:{
 		    				name:	"导航内容",
 		    				editType: 'area',
 		    				value: cube.arr([
 		    				   {
 		    					   text : '首页',
 		    					   route : '#home'
 		    				    },
 		    				   {
  		    					   text : '线损统计',
  		    					   route : '#linelossmenu'
  		    				    },
 		    				   {
  		    					   text : '省级统计',
  		    					   route : '#linelossmenu/province_statistic'
  		    				    }
 		    				]),
 		    				readonly: true
 		    			},
 		    			selectedRoute:{
 		    				name:	"当前选中route",
 		    				editType: 'txt',
 		    				value: cube.obj('#linelossmenu/province_statistic'),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_tabcontainer',
 		    	name : '标签页组件',
 		    	desc : '通过该组件，可以进行标签页内容切换/展示',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    		},
 		    		data: {
 		    			tabContents:{
 		    				name:	"标签页内容",
 		    				editType: 'area',
 		    				value: cube.arr([
 		    				   {
 		    					   text : '省级统计',
 		    					   route : 'province_statistic'
 		    				    },
 		    				   {
  		    					   text : '市级统计',
  		    					   route : 'city_statistic'
  		    				    },
 		    				   {
  		    					   text : '县级统计',
  		    					   route : 'county_statistic'
  		    				    }
 		    				]),
 		    				readonly: true
 		    			},
 		    			selectedTabRoute:{
 		    				name:	"当前选中页面",
 		    				editType: 'txt',
 		    				value: cube.obj('province_statistic'),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_modaldialog',
 		    	name : '模态对话框组件',
 		    	desc : '通过该组件，弹出/关闭模态对话框',
 		    	params:{
 		    		appearance: {
 		    			width: {
 		    				name:	"窗口宽度",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj(600),
 		    				readonly: false
 		    		    },
 		    		    height: {
		    				name:	"窗口高度",
		    				editType: 'txt', //编辑类型
		    				value: cube.obj(300),
		    				readonly: false
		    		    },
 		    		},
 		    		option: {
 		    			isShowCloseBtn: {
 		    				name:	"是否显示关闭按钮",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(true),
 		    				readonly: false
 		    		    },
 		    		   isShowConfirmBtn: {
		    				name:	"是否显示确认按钮",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			title:{
 		    				name:	"对话框标题",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj("弹出窗口"),
 		    				readonly: false
 		    			},
 		    			content:{
 		    				name:	"对话框内容",
 		    				editType: 'area',
 		    				value: cube.obj('内容'),
 		    				readonly: false
 		    			},
 		    			isShowDialog:{
 		    				name:	"是否显示对话框",
 		    				editType: 'chkbox',
 		    				value: cube.obj(false),
 		    				readonly: false
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_dropdownlist',
 		    	name : '下拉框组件',
 		    	desc : '通过该组件，弹出下拉菜单进行选择获取值',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			isSplit: {
 		    				name:	"是否分裂显示",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(true),
 		    				readonly: false
 		    		    },
 		    		    disabled: {
		    				name:	"下拉菜单是否不可用",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			items:{
 		    				name:	"下拉选项",
 		    				editType: 'area',
 		    				value: cube.arr([
 		    				   {value:"bj",text:"北京"},
		                       {value:"sh",text:"上海"},
		                       {value:"tj",text:"天津"},
		                       {value:"js",text:"江苏"}
 		    				]),
 		    				readonly: true
 		    			},
 		    			selectedValue:{
 		    				name:	"当前选中项",
 		    				editType: 'txt',
 		    				value: cube.obj('bj'),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_pageheader',
 		    	name : '标题展示组件',
 		    	desc : '通过该组件，显示主标题和副标题内容',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			titleSize: {
 		    				name:	"标题字体尺寸",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj('h5'),
 		    				readonly: true
 		    		    },
 		    		   isSubtitleWrap: {
		    				name:	"副标题是否换行",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			title:{
 		    				name:	"标题",
 		    				editType: 'txt',
 		    				value: cube.obj('标题名称'),
 		    				readonly: false
 		    			},
 		    			subTitle:{
 		    				name:	"副标题",
 		    				editType: 'txt',
 		    				value: cube.obj('副标题内容'),
 		    				readonly: false
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    }
        ]);
		
		self.setSelectedComponent = function() {
			self.selectedComponent(this);
		};
	};
	
	return PageViewModel;
});