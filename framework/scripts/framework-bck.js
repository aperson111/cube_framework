/*
 * 功能1：获取框架路径，为app的路径提供依据
 * 功能2：使用require注册公用的模块
 */

var DEBUG_MODE = true;

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

/*
 * 获取加载模块名称
 */
function _getBundleName(p_moduleName)
{
    var path = null;

    return "appName";
}

/*
 * 获取根目录
 */
function _getRootPath(p_url)
{
    var url = p_url;
    var path = rootPath;
    var parts = url.split("/");
    var moduleName = null;
    var bundleName = null;
    
    if (parts.length > 1)
    {
        moduleName = parts[1];
    
        if (moduleName != "mx")
        {
            bundleName = _getBundleName(moduleName);
        }
        
        if (url.indexOf("~/") == 0)
        {
            if (moduleName != "mx")
            {
                path += (bundleName == null ? "" : "/" + bundleName);
            }
        }
    }
    
    return _endsWith(path, "/") ? path : (path + "/");
}

/*
 * 返回一个 App 对应的地址。
 * 
 * @param p_url
 *            一个字符串，表示特定的地址。 
 *            <p>
 *            该参数的形式包括:
 *            <ul>
 *            <li><b>~/</b> - 以“~/”开头表示获取 UAP项目 的根目录地址或网站虚拟路径。</li>
 *            <li><b>~/../</b> - 在模块项目中使用本框架时，如果引用其他模块项目的资源必须以该格式或者完整路径。
 *            <li><b>./</b> - 以“./”开头表示获取 框架的根目录地址。</li>
 */
function mapPath(p_url) {
	if (typeof (p_url) != "string") return null;
	
	var url = p_url;
	
	if (url.indexOf("~/../") == 0)
    {
    	if (_endsWith(rootPath, "/"))
    	{
        	url = rootPath + url.substr(5);
    	}
    	else
    	{
    		url = rootPath + url.substr(4);
    	}
    }
    else if (url.indexOf("~/") == 0)
    {
        var parts = url.split("/");
        var moduleName = null;
        var path = url;
        if (parts.length > 1)
        {
            moduleName = parts[1];
            if (moduleName.indexOf("$") != -1)
            {
                var newModuleName = moduleName.replace(/\$/g, "/");
                path = url.replace(moduleName, newModuleName);
            }
        }
        
        url = _getRootPath(url) + path.substr(2);
    }
    else if (url.indexOf("./") == 0)
    {
        url = _getRootPath(url) + "framework" + url.substr(1);
    }

    return url;
}

var require = {
		baseUrl: rootPath,
	    paths: {
	    	"knockout":             	"framework/scripts/libs/knockout-3.2.0.debug",
	        "text":                 	"framework/scripts/libs/require.text",
			"jquery":					"framework/scripts/libs/jquery-1.11.1.min",
			"sammy":					"framework/scripts/libs/sammy",
			"webpage":					"framework/scripts/WebPage"
	    }
};



document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/bootstrap2.3.2.css"+ ">");
document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/jqx.base.css"+ " media='screen'>");
document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/jqx.arctic.css"+ " media='screen'>");

document.write("<link rel='stylesheet' href="+rootPath+"/framework/resources/css/cube.css"+ ">");

document.write("<script type='text/javascript' src="+rootPath+"/framework/scripts/libs/jquery-1.11.1.min.js></script>");

var componentsLibs = ["navbar","calendar", "tabcontainer","clock","tree","grid","dropdownlist"];

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

CUBE = function()
{
	
}
cube = new CUBE();
