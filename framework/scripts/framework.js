/*
 * 功能1：获取框架路径，为app的路径提供依据
 * 功能2：使用require注册公用的模块
 */

var DEBUG_MODE = false;

//路径获取
var scripts = document.getElementsByTagName("script");

//框架最初加载，所以框架路径应该是会在scripts数组的第一个
var src = scripts[0].src;

var _frameworkPath = "/framework/scripts/framework.js";
var _frameworkMinPath = "/framework/scripts/framework.min.js";

var rootPath = "";

//获取跟路径
if (_endsWith(src, _frameworkPath))
{
    rootPath = src.substr(0, src.length - _frameworkPath.length);
}

/*
 * 判断字符串末尾是否匹配末尾
 */
function _endsWith(p_str1, p_str2)
{
    return p_str1.substring(p_str1.length - p_str2.length) == p_str2;
}


//资源加载
var require = {
		baseUrl: rootPath,
	    paths: {
	    	"text":                 	"framework/scripts/libs/require.text",
			"jquery":					"framework/scripts/libs/jquery-1.11.1.min",
			"sammy":					"framework/scripts/libs/sammy",
			"webpage":					"framework/scripts/WebPage"
	    }
};



document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/bootstrap2.3.2.css"+ ">");

document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/cube.css"+ ">");

document.write("<script type='text/javascript' src="+rootPath+"/framework/scripts/libs/jquery-1.11.1.min.js></script>");
document.write("<script type='text/javascript' src="+rootPath+"/framework/scripts/libs/knockout-3.2.0.debug.js></script>");


/*
 * 解决IE下不支持Array的IndexOf方法
 */
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

//注册模板
//IE下，必须将模板先写入到页面中，否则无法显示。
document.write('<script id="treeTmpl" type="text/html"> \
	<li class="jqx-tree-item-li jqx-tree-item-li-arctic jqx-disableselect jqx-disableselect-arctic" \
        style="margin-left: 0px; float: none;"> \
        <!-- ko if:hasChildren--> \
		<span style="height: 17px; border: none; float: left; clear: both; width: 16px; margin-top: 3px; background-color: transparent;" \
               data-bind="click: modifyExpand, \
               css:{\'jqx-tree-item-arrow-collapse jqx-tree-item-arrow-collapse-arctic jqx-icon-arrow-right jqx-icon-arrow-right-arctic\':isExpand()==false, \
               	\'jqx-tree-item-arrow-expand jqx-tree-item-arrow-expand-arctic jqx-icon-arrow-down jqx-icon-arrow-down-arctic\':isExpand \
               }"></span> \
         <!-- /ko --> \
	<div style="display: inline-block;" class="draggable jqx-rc-all jqx-rc-all-arctic \
											   jqx-tree-item jqx-tree-item-arctic  \
											  jqx-item jqx-item-arctic" \
         data-bind="text:text, css:{\'jqx-tree-item-selected jqx-tree-item-selected-arctic\':isAct, \
         							\'jqx-tree-item-hover jqx-tree-item-hover-arctic\':isHover}, \
                    click: actItem,event:{mouseover:showHover,mouseout:hiddenHover}"></div> \
		<!-- ko if:isExpand--> \
		<ul class="jqx-tree-dropdown jqx-tree-dropdown-arctic" style="overflow: hidden;" \
		    data-bind="template: {name: \'treeTmpl\',foreach: children }"> \
		</ul> \
		<!-- /ko --> \
	</li> \
</script>');


//管理全局内容，对knockout的封装。
//后续如果替换mvvm的框架，或者该框架重新实现，框架升级时，不影响业务系统。
CUBE = function()
{
	var self = this;
	//全局数组
	self.componentsLibs = ["cube_navbar","cube_tabcontainer","cube_clock","cube_dropdownlist"];
	self.importedComponents = [];
	self.loadedPagePartVVM = [];
	self.loadedPagePart = [];//保留
	
	self.compWritable = function(p_obj) {
		return ko.computed(p_obj);
	};
	
	self.comp = function(p_func, p_obj) {
		return ko.computed(p_func,p_obj);
	};
	//对象
	self.obj = function(p_obj) {
		return ko.observable(p_obj);
	}
	//数组
	self.arr = function(p_arr) {
		return ko.observableArray(p_arr);
	}
	
	//绑定页面，开始试图展现
	self.startWebPage = function(p_pvm) {
		ko.applyBindings(p_pvm);
	}
	//注册公共组件
	self.importComponent = function(p_componentName) {
		if(DEBUG_MODE && typeof(console) != "undefined" && typeof(console.log) != "undefined")
			console.log("加载组件："+p_componentName);
		if(p_componentName == null) {
			return;
		}
		else if(self.componentsLibs.indexOf(p_componentName) > -1 ) {
			if(self.importedComponents.indexOf(p_componentName)  < 0) {//避免重复加载
				ko.components.register(p_componentName, {
					viewModel :  {
						require : rootPath+'/framework/components/'+p_componentName+'/'+p_componentName+'.js'
					},
					template : {
						require : 'text!'+rootPath+'/framework/components/'+p_componentName+'/'+p_componentName+'.html'
					}  
				});
				self.importedComponents.push(p_componentName);
			}else {
				if(DEBUG_MODE && typeof(console) != "undefined" && typeof(console.log) != "undefined")
					console.log("组件"+p_componentName+"已经注册。");
			}
		} else {
			alert('组件'+p_componentName+'不存在');
		}
	};
	
	//注册webpart内的vvm
	self.loadSubWebPartVVM = function(p_vvm) {
		if(DEBUG_MODE  && typeof(console) != "undefined" && typeof(console.log) != "undefined")
			console.log("加载vvm："+p_vvm);
		if(p_vvm == null) {
			return;
		}
		else if(self.loadedPagePartVVM.indexOf(p_vvm) < 0) {
			var pathStrs = p_vvm.split('.');
			if(pathStrs.length == 3) {
				ko.components.register(p_vvm, {
					viewModel : {
						require : rootPath+'/'+pathStrs[0]+'/pages/'+pathStrs[1]+'/vvm/'+pathStrs[2]+'viewmodel.js'
					},
					template : {
						require : 'text!' + rootPath+'/'+pathStrs[0]+'/pages/'+pathStrs[1]+'/vvm/'+pathStrs[2]+'view.html'
					}
				});
				self.loadedPagePartVVM.push(p_vvm);
			}
			else {
				alert('字符串错误');
			}
		} else {
			if(DEBUG_MODE  && typeof(console) != "undefined" && typeof(console.log) != "undefined")
				console.log("webpart vvm: "+p_vvm+"已经注册。");
		}
	};
	
	//判断浏览器是否支持html5
	self.isSupportHtml5 = function() {
		if (window.applicationCache) {
            return true;
        } else {
            return false;
        }
	}
};
cube = new CUBE();
