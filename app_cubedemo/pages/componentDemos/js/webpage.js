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
		             "cube_modaldialog",
		             "cube_collapsepanel",
		             "cube_richeditor",
		             "cube_editor",
		             "cube_clock"],
		vvms: ["app_cubedemo.componentDemos.cube_progressbarDemo",
		       "app_cubedemo.componentDemos.cube_navbarDemo",
		       "app_cubedemo.componentDemos.cube_breadcrumbDemo",
		       "app_cubedemo.componentDemos.cube_tabcontainerDemo",
		       "app_cubedemo.componentDemos.cube_tabcontainerTemplDemo",
		       "app_cubedemo.componentDemos.cube_modaldialogDemo",
		       "app_cubedemo.componentDemos.cube_dropdownlistDemo",
		       "app_cubedemo.componentDemos.cube_pageheaderDemo",
		       "app_cubedemo.componentDemos.cube_collapsepanelDemo",
		       "app_cubedemo.componentDemos.cube_collapsepanel1TemplDemo",
		       "app_cubedemo.componentDemos.cube_collapsepanel2TemplDemo",
		       "app_cubedemo.componentDemos.cube_richeditorDemo",
		       "app_cubedemo.componentDemos.cube_editorDemo",
		       "app_cubedemo.componentDemos.cube_clockDemo"]
	});

    return webp;
});