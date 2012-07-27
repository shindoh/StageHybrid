$.stage.component = {};

/*
 *
 * @listview
 * 
 * @parameters
 * 	   eleId : listview element id
 *     tmpId : script element id
 *       url : target url (get method type)
 *    params : get parameters (json type)
 *      func : callback function
 *   options : (json type, can be omitted)
 *              -listIndex (default 0)
 *              -listCount (default 25)
 *              -autoLoad  (default true)
 *             
 */
$.stage.component.listview = function(
		
		eleId,tmpId,url,params,func,options)
{
	var listIndex = 0;
	var listCount = 25;
	var autoLoad = true;
	if(options)
	{
		if(options.listIndex)
			listIndex = options.listIndex;
		if(options.listCount)
			listCount = options.listCount;
		if(options.autoLoad==false)
			autoLoad = false;
	}
	console.log("autoLoad : "+autoLoad);
	$.mobile.showPageLoadingMsg("b", "loading...", true);
	
	if(!params)
	{
		var params={};		
		params.listIndex = listIndex;
		params.listCount = listCount;
	}
	 ///���대�遺��꾩쓽 if �덉뿉留��ㅼ뼱媛�㈃ 
								////param��null���꾨땺�뚮뒗 object 泥섎━留��댁꽌 �ｌ뼱二쇰㈃ �좉쾬 媛숈븷.
	$.stageAjax.getJson(url,params,function(result){
		var listData = result.list;
		var list = $('#'+eleId);
		$('#'+tmpId).tmpl(listData).appendTo(list);
		list.listview("refresh");
		func();
		$.mobile.hidePageLoadingMsg();
	},true);
	
	if(autoLoad)
	{
		$('#'+eleId).bind("scrollstop",function(){
			var yDistance = $(window).scrollTop();
			var height = $(window).height();
			if($(document).height()-40 < (yDistance+height))
			{
				$.mobile.showPageLoadingMsg("b", "loading...", true);
				params.listIndex += listCount;
				params.listCount = listCount;		
				$.stageAjax.getJson(url,params,function(result){
					var listData = result.list;
					var list = $('#'+eleId);
						
					$('#'+tmpId).tmpl(listData).appendTo(list);
					list.listview("refresh");
					func();
					$.mobile.hidePageLoadingMsg();
				},true);
			}
		});		
	}

}

/*
*
*
* @infoview
* 
* @parameters
* 	   eleId : infoview element id
*     tmpId : script element id
*       url : target url (get method type)
*    params : get parameters (json type)
*      func : callback function
*   options : (json type, can be omitted)
*              -listIndex (default 0)
*              -listCount (default 25)
*              -autoLoad  (default true)
*             
*/

$.stage.component.infoview = function(eleId,tmpId,url,params,func)
{
	var ID = params;
	$.mobile.showPageLoadingMsg("b", "loading...", true);
	
	///////
	//var params={};	
	//params.userId = ID;
	//parameter�먯꽌 ID 媛앹껜 �앹꽦 援щЦ

	$.stageAjax.getJson(url,params,function(result){
		var infoData = result.data;
		var info = $('#'+eleId);
		$('#'+tmpId).tmpl(infoData).appendTo(info);
		if(info.listview);
			info.listview("refresh"); //由ъ뒪�몃럭瑜��꾪븳 援щЦ
		func();
		$.mobile.hidePageLoadingMsg();

	},true);
	
}

$.stage.component.infosend = function(eleId,tmpId,url,params,func)
{
	var ID = params;
	$.mobile.showPageLoadingMsg("b", "loading...", true);
	
	///////
	//var params={};	
	//params.userId = ID;
	//parameter�먯꽌 ID 媛앹껜 �앹꽦 援щЦ

	$.stageAjax.postJson(url,params,function(result){
		var infoData = result.data;
		var info = $('#'+eleId);
		$('#'+tmpId).tmpl(infoData).appendTo(info);
		info.listview("refresh"); //由ъ뒪�몃럭瑜��꾪븳 援щЦ
		func();
		$.mobile.hidePageLoadingMsg();

	},true);
	
}

/*
 * @pass params 
 * 
 * @parameters
 *  jsonParams : send data to move page(type json)
 */
$.stage.component.pageParam = function(jsonParams)
{
	if(jsonParams)
	{
		localStorage.setItem("pageParams",JSON.stringify(jsonParams));		
	}
	return JSON.parse(localStorage.getItem("pageParams"));
}

/*
 * @pagemove
 *
 * @parameters 
 *  	  page : move page (type jquery selector)
 *  jsonParams : send data to move page(type json)
 *     options : jquery options of $.mobile.changePage method required(type json)
 */ 
$.stage.component.pageMove = function(page,jsonParams,doSessionCheck,options)
{
	console.log("pageMove doSessionCheck : "+doSessionCheck);
	if(doSessionCheck && !$.stage.component.hasSession())
	{
		$.mobile.changePage("../session/login.html");
		return;
	}
	
	if(jsonParams)
	{
		localStorage.setItem("pageParams",JSON.stringify(jsonParams));		
	}		

	$.mobile.changePage(page,options);
}

/*
 * @has session 
 * 
 */
$.stage.component.hasSession = function()
{
	var userInformation = JSON.parse(localStorage.getItem("userInformation"));
	var result = false;
	if(userInformation && userInformation.userId)
	{
		result = true
	}
	return result;
}


/*
 * @session setting  
 * 
 */
$.stage.component.setSession = function(userId,pass)
{
	var userInformation = {
			userId : userId,
			pass : pass
	}
	localStorage.setItem("userInformation",JSON.stringify(userInformation));
}


/*
 * @get session  
 * 
 */
$.stage.component.getSession = function()
{
	var strUserInform = localStorage.getItem("userInformation");
	var userInformation = null;
	if(strUserInform)
	{
		userInformation = JSON.parse(strUserInform);
	}
	return userInformation;
}

/*
 * @session out (logout)  
 * 
 */
$.stage.component.sessionOut = function()
{
	localStorage.setItem("userInformation",null);
}


$.stageComponent = $.stage.component;
