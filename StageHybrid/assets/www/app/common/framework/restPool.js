

RestPool = function(){
	this.STAGE_REST = "http://specificconcept.cafe24.com/rest"; 
	
	/*
	 * 
	 * SESSION
	 * 
	 * 
	 **/		
		/*
		 * method : post  
		 * params : id (required) - limit length = 10
		 * 			pass (required) - min 6 ~ max 12
		 * 			mail (required)
		 * 			sex (required)
		 */		
		this.JOIN_USER = this.STAGE_REST + "/join";		
		
		/*
		 * method : post  
		 * params : id (required)
		 * 			pass (required)
		 */		
		this.LOGIN_USER = this.STAGE_REST + "/login";		
	
	
	
	/*
	 * 
	 * TALK
	 * 
	 * 
	 **/
		/*
		 * method : get
		 * params : listIndex (required)
		 * 			listCount (required)
		 * 			{userId}
		 * description : 1. listIndex占쏙옙占쏙옙 listCount占쏙옙큼占쏙옙 타占쌈띰옙占쏙옙占쏙옙 占쏙옙占쏙옙占승댐옙. 
		 * 				 2. /talkList/{userId}占쏙옙 占쏙옙占쏙옙秊占쏙옙占�占쌔댐옙 userId占쏙옙 占쌔댐옙占싹댐옙 占쏙옙占쏙옙占쏙옙 타占쌈띰옙占싸듸옙占쏙옙 1占쏙옙占�占쏙옙占쏙옙 占쏙옙占쏙옙占승댐옙.  
		 */
		this.GET_TALK_LIST = this.STAGE_REST + "/talkList";
		this.GET_TALK_SUB_LIST = this.STAGE_REST + "/talkSubList/"
		
		/*
		 * method : post
		 * params : talkIdx (require)
		 * 			userId (required) 
		 * 			comment (required) 
		 * 			imgUrl  
		 */				
		this.MODIFY_TALK = this.STAGE_REST + "/talkUpdate";
		
		/*
		 * method : post
		 * params : talkIdx (require)
		 * 			userId (required) 
		 */				
		this.DELETE_TALK = this.STAGE_REST + "/talkDelete";	
		/*
		 * method : post
		 * params : userId (required) 
		 * 			comment (required)
		 * 			imgUrl (required) default = ""
		 * 			type (required) default = 1
		 */		
		this.POST_TALK = this.STAGE_REST+"/talk";
		
		
		/*   
		 * method : post
		 * params : userId (required) 
		 * 			talkIdx (required)		 * 
		 * 			comment (required)
		 * 			imgUrl (required) default = "" 
		 */		
		this.POST_SUB_TALK = this.STAGE_REST+"/talkSub";		

	
	/*
	 * 
	 * PARTY
	 * 
	 * 
	 **/
		/*
		 * method : get  
		 * params : no-parameters
		 */
		this.GET_PARTY_LIST = this.STAGE_REST + "/partyList";

		/*
		 * method : get  
		 * params : {party index}(path)
		 */		
		this.GET_PARTY_INFORM = this.STAGE_REST + "/party/";
		
		
	/*
	 * 
	 * USER
	 * 
	 * 
	 **/		
		/*
		 * method : get  
		 * params : userId (required)
		 */		
		this.GET_USER_INFORM = this.STAGE_REST + "/user/contacts";
		
		/*
		 * method : get  
		 * params : idChunk (required)
		 */		
		this.GET_USER_SEARCH = this.STAGE_REST + "/user/search";
		
		/*
		 * method : post  
		 * params : id (required)
		 * 			thumnail
		 *  		frontPhoto
		 *  		frontComment
		 *  		age
		 *  		lookingFor 
		 */		
		this.POST_USER_INFORM_MODIFY = this.STAGE_REST + "/user/contacts";
		
	
		
		/*
		 * method : get  
		 * params : userId (required)
		 * 			listIndex
		 * 			listCount
		 */		
		this.GET_USER_PHOTO_ALBUM = this.STAGE_REST + "/user/photoAlbumList";
	
		/*
		 * method : post  
		 * params : userId (required)
		 * 			photoUrl (required)
		 * 			thumnail (required)
		 */		
		this.POST_USER_PHOTO_ALBUM = this.STAGE_REST + "/user/photoAlbum";
		
		
		/*
		 * method : post  
		 * params : userId (required)
		 * 			photoIdx (path)
		 */		
		this.DELETE_USER_PHOTO_ALBUM = this.STAGE_REST + "/user/photoAlbum/delete/";		
		


};

$.stage.restPool = new RestPool();
$.stageRestPool = $.stage.restPool;