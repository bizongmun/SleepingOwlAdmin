$(function(){$(".datepicker").each(function(){var e=$(this);e.datetimepicker({language:window.admin.locale,icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down"}}).trigger("dp.change").on("dp.change",function(){e.find("input").change()})})}),$(function(){$(".multiselect").each(function(){var e=$(this),a=e.data("nullable");e.chosen({allow_single_deselect:a,no_results_text:window.admin.lang.select.nothing,placeholder_text_single:window.admin.lang.select.placeholder,placeholder_text_multiple:window.admin.lang.select.placeholder})})}),$(function(){$(".imageUpload").each(function(e,a){var n=$(a),t=n.closest(".form-group"),i=n.find(".errors"),o=n.find(".no-value"),l=n.find(".has-value"),s=n.find(".thumbnail img.has-value"),r=n.find(".imageValue"),d=new Flow({target:n.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:n.data("token")}});d.assignBrowse(n.find(".imageBrowse"),!1,!0),d.on("filesSubmitted",function(e){d.upload()}),d.on("fileSuccess",function(e,a){d.removeFile(e),i.html(""),t.removeClass("has-error");var n=$.parseJSON(a);s.attr("src",n.url),l.find("span").text(n.value),r.val(n.value),o.addClass("hidden"),l.removeClass("hidden")}),d.on("fileError",function(e,a){d.removeFile(e);var n=$.parseJSON(a),o="";$.each(n,function(e,a){o+='<p class="help-block">'+a+"</p>"}),i.html(o),t.addClass("has-error")}),n.find(".imageRemove").click(function(){r.val(""),o.removeClass("hidden"),l.addClass("hidden")})})}),$(function(){$(".imageUploadMultiple").each(function(e,a){var n=$(a),t=n.closest(".form-group"),i=n.find(".form-group"),o=n.find(".errors"),l=n.find(".imageValue"),s=new Flow({target:n.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:n.data("token")}}),r=function(){var e=[];n.find("img[data-value]").each(function(){e.push($(this).data("value"))}),l.val(e.join(","))};s.assignBrowse(n.find(".imageBrowse")),s.on("filesSubmitted",function(e){s.upload()}),s.on("fileSuccess",function(e,a){s.removeFile(e),o.html(""),t.removeClass("has-error");var n=$.parseJSON(a);i.append('<div class="col-xs-6 col-md-3 imageThumbnail"><div class="thumbnail"><img data-value="'+n.value+'" src="'+n.url+'" /><a href="#" class="imageRemove">Remove</a></div></div>'),r()}),s.on("fileError",function(e,a){s.removeFile(e);var n=$.parseJSON(a),i="";$.each(n,function(e,a){i+='<p class="help-block">'+a+"</p>"}),o.html(i),t.addClass("has-error")}),n.on("click",".imageRemove",function(e){e.preventDefault(),$(this).closest(".imageThumbnail").remove(),r()}),i.sortable({onUpdate:function(){r()}})})}),$(function(){$.fn.dataTable.ext.errMode=function(){$.notify(window.admin.lang.table.error,"error")},$(".datatables").each(function(){var e=$(this),a={language:window.admin.lang.table,stateSave:!0,lengthMenu:[[10,25,50,-1],[10,25,50,window.admin.lang.table.all]]};a=$.extend(a,e.data("attributes"));var n;(n=e.data("url"))&&(a.serverSide=!0,a.processing=!0,a.ajax={url:n,data:function(a){e.find(".column-filter").each(function(){var e=$(this),n=e.closest("td").data("index");(name=e.data("ajax-data-name"))&&(a.columns[n].search[name]=e.val())})}});var t=e.DataTable(a);e.find(".column-filter").each(function(){if(!($(this).parent().closest(".column-filter").length>0)){var e=$(this).data("type");window.columnFilters[e](this,t)}})})}),$(function(){!function(){var e=window.location.href;e=e.replace(window.location.search,""),e=e.replace(/\/create$/,""),e=e.replace(/\/([0-9]+)\/edit/,"");var a=$('#side-menu a[href="'+window.location.href+'"]');a.length||(a=$('#side-menu a[href="'+e+'"]')),a.addClass("active").parents("li").addClass("active").end().parents("ul").addClass("collapse").addClass("in")}(),function(){$("html").tooltip({selector:"[data-toggle=tooltip]",container:"body"})}(),function(){$('input[type="text"]:first').focus()}()}),$(function(){$("#side-menu").metisMenu()}),$(function(){$(window).bind("load resize",function(){topOffset=50,width=this.window.innerWidth>0?this.window.innerWidth:this.screen.width,width<768?($("div.navbar-collapse").addClass("collapse"),topOffset=100):$("div.navbar-collapse").removeClass("collapse"),height=this.window.innerHeight>0?this.window.innerHeight:this.screen.height,height-=topOffset,height<1&&(height=1),height>topOffset&&$("#page-wrapper").css("min-height",height+"px")})});