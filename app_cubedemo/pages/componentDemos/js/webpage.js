/*
 *结构化管理每个page
 *define的路径，是当前的相对路径
 *加载对应的组件、页面等内容。
 */
define(['text', 'webpage'], function(text,WebPage) {

	//加载方式一：显示加载，调用webpage类的组件注册和子页面注册方法，实现加载。
	var webp = new WebPage({
		components: ["cube_progressbar",
		             "cube_navbar",
		             "cube_breadcrumb",
		             "cube_tabcontainer",
		             "cube_dropdownlist",
		             "cube_pageheader",
		             "cube_modaldialog"],
		vvms: ["app_cubedemo.componentDemos.cube_progressbarDemo",
		       "app_cubedemo.componentDemos.cube_navbarDemo",
		       "app_cubedemo.componentDemos.cube_breadcrumbDemo",
		       "app_cubedemo.componentDemos.cube_tabcontainerDemo",
		       "app_cubedemo.componentDemos.cube_modaldialogDemo",
		       "app_cubedemo.componentDemos.cube_dropdownlistDemo",
		       "app_cubedemo.componentDemos.cube_pageheaderDemo"]
	});

    return webp;
});