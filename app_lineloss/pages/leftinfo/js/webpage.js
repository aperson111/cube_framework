/*
 *结构化管理每个page
 *define的路径，是当前的相对路径
 *加载对应的组件、页面等内容。
 */
define(['text', 'webpage'], function(text,WebPage) {

	var webp = new WebPage({
		components: ["cube_clock"],
		vvms: ["app_lineloss.leftinfo.main"]
	});
    
    return webp;
});