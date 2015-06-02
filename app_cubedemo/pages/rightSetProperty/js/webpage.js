/*
 *结构化管理每个page
 *define的路径，是当前的相对路径
 *加载对应的组件、页面等内容。
 */
define(['text', 'webpage'], function(text,WebPage) {

	//加载方式一：显示加载，调用webpage类的组件注册和子页面注册方法，实现加载。
	var webp = new WebPage({
		vvms: ["app_cubedemo.rightSetProperty.main"]
	});

    return webp;
});