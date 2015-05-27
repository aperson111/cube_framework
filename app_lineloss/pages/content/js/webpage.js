/*
 *结构化管理每个page
 *define的路径，是当前的相对路径
 *加载对应的组件、页面等内容。
 */
define(['text', 'webpage'], function(text,WebPage) {

	
	var webp = new WebPage({
		components: ["tabcontainer","tree","dropdownlist","grid"],
		vvms: ["app_lineloss.content.home_page",/*首页*/
		       "app_lineloss.content.linelossmenu_page",/*线损菜单*/
		       "app_lineloss.content.salestatistic_page",/*统计售电*/
		       "app_lineloss.content.actionupload_page"]/*降损措施上报*/
	});

});