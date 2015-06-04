define([], function() {
	
	var PageViewModel = function(params) {
		var self = this;

		self.selectedComponent = params.selectedComponent;
		
		self.thumbnailRootUrl = '../expandComponents/thumbnails/';
		
		self.components = cube.arr([
 		   {
 		    	value: 'cube_progressbar',
 		    	componentType: 'interact',
 		    	name : '进度条组件',
 		    	desc : '可以设置warning、danger属性，更直观显示进度的状态',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    		    warningValue: {
 		    		    	desc: '超过警告值，黄色警告',
 		    				name:	"警告值",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj(0.3),
 		    				readonly: false
 		    		    },
 		    		    dangerValue: {
 		    		    	desc: '超过危险值，红色警告',
		    				name:	"危险值",
		    				editType: 'txt', //编辑类型
		    				value: cube.obj(1),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			progressValue:{
 		    				desc: '当前进度，浮点值',
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
 		    	componentType: 'nav',
 		    	name : '导航条组件',
 		    	desc : '一般放置于页面顶端',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    		    isFixTop: {
 		    		    	desc: '悬浮则始终在页面顶端显示，不随滚动条而消失',
 		    				name:	"是否在顶端悬浮",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(false),
 		    				readonly: false
 		    		    },
 		    		    isInverse: {
 		    		    	desc: '如果反色，以黑色显示',
		    				name:	"是否反色",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    },
		    		    isShowDividerVertical: {
		    		    	desc: '每个导航条菜单中间有边框',
		    				name:	"是否显示分隔符",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    },
		    		    isHrefRoute: {
		    		    	desc: '选中导航后，是否进行锚定#[route]的方式显示',
		    				name:	"是否设置锚定值",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(true),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			navTitle:{
 		    				desc:'导航条的标题，最左侧显示，默认为空',
 		    				name:	"导航条标题",
 		    				editType: 'txt',
 		    				value: cube.obj('测试导航条'),
 		    				readonly: false
 		    			},
 		    			items:{
 		    				desc:'导航条的内容数组，不允许为空',
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
 		    				desc:'导航条的当前路由',
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
 		    	componentType: 'nav',
 		    	name : '面包屑导航组件',
 		    	desc : '通过该导航组件，可以快速返回上级菜单',
 		    	params: {
 		    		appearance: {
 		    		},
 		    		option: {
 		    			splitTxt: {
 		    				desc:'面包屑导航每个菜单中间的分隔字符，默认为/',
 		    				name:	"分隔符",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj('/'),
 		    				readonly: false
 		    		    },
 		    		   isHrefRoute: {
 		    			  desc: '选中导航后，是否进行锚定#[route]的方式显示',
		    				name:	"是否设置锚定值",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(true),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			items:{
 		    				desc: '导航条内容数组',
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
 		    				desc: '当前选中的菜单route',
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
 		    	componentType: 'container',
 		    	name : '标签页组件',
 		    	desc : '通过该组件，可以进行标签页内容切换/展示',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			isHrefRoute: {
 		    				desc: '选中标签页后，是否进行锚定#[route]的方式显示',
		    				name:	"是否设置锚定值",
		    				editType: 'chkbox',
		    				value: cube.obj(true),
		    				readonly: false
		    		    },
		    		    isContentType: {
		    		    	desc: '如果选择是，则通过innerhtml填充内容。如果选择否，则通过外部模板填充内容。',
 		    				name:	"是否以html方式填充内容",
 		    				editType: 'chkbox', 
 		    				value: cube.obj(true),
 		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			tabContents:{
 		    				desc: '标签页内容数组',
 		    				name:	"标签页内容",
 		    				editType: 'area',
 		    				value: cube.arr([
 		    				   {
 		    					   text : '省级统计',
 		    					   route : '#province_statistic',
 		    					   content: '省级统计内容 (isContentType为true)',
 		    					   templateOptions: {
		    				    		name: 'app_cubedemo.componentDemos.cube_tabcontainerTemplDemo',
		    				    		params: {title: 'tab1的模板'}
		    				    	}
 		    				    },
 		    				   {
  		    					   text : '市级统计',
  		    					   route : '#city_statistic',
  		    					   content: '市统计内容 (isContentType为true)',
  		    					 templateOptions: {
		    				    		name: 'app_cubedemo.componentDemos.cube_tabcontainerTemplDemo',
		    				    		params: {title: 'tab2的模板'}
		    				    	}
  		    				    },
 		    				   {
  		    					   text : '县级统计',
  		    					   route : '#county_statistic',
  		    					   content: '县统计内容 (isContentType为true)',
  		    					   templateOptions: {
		    				    		name: 'app_cubedemo.componentDemos.cube_tabcontainerTemplDemo',
		    				    		params: {title: 'tab3的模板'}
		    				    	}
  		    				    }
 		    				]),
 		    				readonly: true
 		    			},
 		    			selectedTabRoute:{
 		    				desc: '当前选中标签页路由',
 		    				name:	"当前选中页面",
 		    				editType: 'txt',
 		    				value: cube.obj('#province_statistic'),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_modaldialog',
 		    	componentType: 'dialog',
 		    	name : '模态对话框组件',
 		    	desc : '通过该组件，弹出/关闭模态对话框',
 		    	params:{
 		    		appearance: {
 		    			width: {
 		    				desc: '窗口宽度',
 		    				name:	"窗口宽度",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj(600),
 		    				readonly: false
 		    		    },
 		    		    height: {
 		    		    	desc: '窗口高度',
		    				name:	"窗口高度",
		    				editType: 'txt', //编辑类型
		    				value: cube.obj(300),
		    				readonly: false
		    		    }
 		    		},
 		    		option: {
 		    			isShowCloseBtn: {
 		    				desc: '是否在窗口中显示关闭按钮',
 		    				name:	"是否显示关闭按钮",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(true),
 		    				readonly: false
 		    		    },
 		    		   isShowConfirmBtn: {
 		    			    desc: '是否在窗口中显示确认按钮',
		    				name:	"是否显示确认按钮",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			title:{
 		    				desc: '模态窗口标题',
 		    				name:	"对话框标题",
 		    				editType: 'txt', //编辑类型
 		    				value: cube.obj("弹出窗口"),
 		    				readonly: false
 		    			},
 		    			content:{
 		    				desc: '模态窗口内容',
 		    				name:	"对话框内容",
 		    				editType: 'area',
 		    				value: cube.obj('内容'),
 		    				readonly: false
 		    			},
 		    			isShowDialog:{
 		    				desc: '如果选中，弹出模态窗口',
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
 		    	componentType: 'editor',
 		    	name : '下拉框组件',
 		    	desc : '通过该组件，弹出下拉菜单进行选择获取值',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			isSplit: {
 		    				desc: '选中后，点击下拉菜单和选中值分开显示',
 		    				name:	"是否分裂显示",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(true),
 		    				readonly: false
 		    		    },
 		    		    disabled: {
 		    		    	desc: '当前下拉框是否可用，默认为可用',
		    				name:	"下拉菜单是否不可用",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    },
		    		    isHrefRoute: {
		    		    	desc: '选中下拉框后，是否进行锚定#[route]的方式显示',
		    				name:	"是否设置锚定值",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(true),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			items:{
 		    				desc: '下拉框选项内容数组',
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
 		    				desc: '当前选中项的Value',
 		    				name:	"当前选中值",
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
 		    	componentType: 'pb',
 		    	name : '标题展示组件',
 		    	desc : '通过该组件，显示主标题和副标题内容',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			titleSize: {
 		    				desc: '标题字体尺寸，1号-5号选择',
 		    				name:	"标题字体尺寸",
 		    				editType: 'dropdownlist', //编辑类型
 		    				value: cube.obj('h5'),
 		    				options: cube.arr([{value:'h1',text:'1号'},
 		    				                 {value:'h2',text:'2号'},
 		    				                 {value:'h3',text:'3号'},
 		    				                 {value:'h4',text:'4号'},
 		    				                 {value:'h5',text:'5号'}
 		    				                ]),
 		    				readonly: false
 		    		    },
 		    		   isSubtitleWrap: {
 		    			  desc: '副标题是否换行，默认为否',
		    				name:	"副标题是否换行",
		    				editType: 'chkbox', //编辑类型
		    				value: cube.obj(false),
		    				readonly: false
		    		    }
 		    		},
 		    		data: {
 		    			title:{
 		    				desc: '标题内容',
 		    				name:	"标题",
 		    				editType: 'txt',
 		    				value: cube.obj('标题名称'),
 		    				readonly: false
 		    			},
 		    			subTitle:{
 		    				desc: '副标题内容',
 		    				name:	"副标题",
 		    				editType: 'txt',
 		    				value: cube.obj('副标题内容'),
 		    				readonly: false
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    },
 		   {
 		    	value: 'cube_collapsepanel',
 		    	componentType: 'container',
 		    	name : '折叠面板组件',
 		    	desc : '通过该组件，动态显示面板内容。支持html内容和模板两种方式',
 		    	params:{
 		    		appearance: {
 		    		},
 		    		option: {
 		    			isContentType: {
 		    				desc: '如果选择是，则通过innerhtml填充内容。如果选择否，则通过外部模板填充内容。',
 		    				name:	"是否以html方式填充内容",
 		    				editType: 'chkbox', //编辑类型
 		    				value: cube.obj(true),
 		    				readonly: false
 		    		    }
 		    		},
 		    		data: {
 		    			panels:{
 		    				desc: '面板的数组内容',
 		    				name:	"面板数组",
 		    				editType: 'area',
 		    				value: cube.arr([
 		    				     {
 		    				    	 route:'panel1',
 		    				    	 title: '面板1',
 		    				    	 content: '<b>这是面板1的内容</b>',
 		    				    	 templateOptions: {
 		    				    		name: 'app_cubedemo.componentDemos.cube_collapsepanel1TemplDemo',
 		    				    		params: {title: '面板1的模板'}
 		    				    	}
 		    				     },
 		    				    {
 		    				    	 route:'panel2',
 		    				    	 title: '面板2',
 		    				    	 content: '<b>这是面板2的内容</b>',
 		    				    	 templateOptions: {
 		    				    		name: 'app_cubedemo.componentDemos.cube_collapsepanel2TemplDemo',
 		    				    		params: {title: '面板2的模板'}
 		    				    	}
 		    				     }
 		    				]),
 		    				readonly: true
 		    			},
 		    			selectedPanelRoute:{
 		    				desc: '当前选择面板路由',
 		    				name:	"当前选择面板路由",
 		    				editType: 'txt',
 		    				value: cube.obj('panel1'),
 		    				readonly: true
 		    			}
 		    		},
 		    		event: {
 		    		}
 		    	}
 		    }
        ]);

		self.setSelectedComponent = function() {
			self.selectedComponent(this);
			window.location.hash = this.value;
		};
		
		self.componentTypePanels = [
		   {
			    route : 'container',
			    title : '容器类组件',
			    templateOptions : {
				    name : 'app_cubedemo.expandComponents.componentsListsTypeTmpl',
				    params : {
				    	route: 'container',
				    	components: self.components,
				    	thumbnailRootUrl: self.thumbnailRootUrl,
					    setSelectedComponent: self.setSelectedComponent
					}
				},
		   },
		   {
			   route : 'nav',
			   title : '导航类组件',
			   templateOptions : {
				   name : 'app_cubedemo.expandComponents.componentsListsTypeTmpl',
				   params : {
					   route: 'nav',
					   components: self.components,
					   thumbnailRootUrl: self.thumbnailRootUrl,
					   setSelectedComponent: self.setSelectedComponent
				   }
			   }
		   },
		   {
			   route : 'interact',
			   title : '交互类组件',
			   templateOptions : {
				   name : 'app_cubedemo.expandComponents.componentsListsTypeTmpl',
				   params : {
					   route: 'interact',
					   components: self.components,
					   thumbnailRootUrl: self.thumbnailRootUrl,
					   setSelectedComponent: self.setSelectedComponent
				   }
			   }
		   },
		   {
			   route : 'dialog',
			   title : '对话框类组件',
			   templateOptions : {
				   name : 'app_cubedemo.expandComponents.componentsListsTypeTmpl',
				   params : {
					   route: 'dialog',
					   components: self.components,
					   thumbnailRootUrl: self.thumbnailRootUrl,
					   setSelectedComponent: self.setSelectedComponent
				   }
			   }
		   },
		   {
			   route : 'pb',
			   title : '排版类组件',
			   templateOptions : {
				   name : 'app_cubedemo.expandComponents.componentsListsTypeTmpl',
				   params : {
					   route: 'pb',
					   components: self.components,
					   thumbnailRootUrl: self.thumbnailRootUrl,
					   setSelectedComponent: self.setSelectedComponent
				   }
			   }
		   }
		];
		

	};
	
	return PageViewModel;
});