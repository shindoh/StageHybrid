

RestPool = function(){
	this.STAGE_REST = "http://specificconcept.cafe24.com/rest"; 
	
	this.MODIFY_TALK = this.STAGE_REST + "/talkUpdate";
	this.DELETE_TALK = this.STAGE_REST + "/talkDelete"; 
	
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
		 * description : 1. listIndex�좎룞�쇿뜝�숈삕 listCount�좎룞�숉겮�좎룞����뜝�덈씛�쇿뜝�숈삕�좎룞���좎룞�쇿뜝�숈삕�좎듅�먯삕. 
		 * 				 2. /talkList/{userId}�좎룞���좎룞�쇿뜝�숈삕燁듿뜝�숈삕�좑옙�좎뙏�먯삕 userId�좎룞���좎뙏�먯삕�좎떦�먯삕 �좎룞�쇿뜝�숈삕�좎룞����뜝�덈씛�쇿뜝�몃벝�쇿뜝�숈삕 1�좎룞�쇿뜝占썲뜝�숈삕�좎룞���좎룞�쇿뜝�숈삕�좎듅�먯삕.  
		 */
		this.GET_TALK_LIST = this.STAGE_REST + "/talkList";
		this.GET_TALK_SUB_LIST = this.STAGE_REST + "/talkSubList/"
		
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
		

		/*
		 * method : get  
		 * params : userId (required)
		 */		
		this.USER_FRIEND_LIST = this.STAGE_REST + "/userFriendOrRequest";			
		
		/*
		 * method : get  
		 * params : userId1 (required)
		 * 			userId2 (required)
		 */		
		this.USER1_RELATION_WITH_USER2 = this.STAGE_REST + "/userRelation";
		
		/*
		 * 
		 * USER_RELATION
		 * 
		 * 
		 **/		
			/*
			 * method : post  
			 * params : RELATION_PREFIX(path)
			 * 			fromId (required)
			 * 			toId (required)
			 */		
			this.POST_USER_RELATION_SET_STATE  = this.STAGE_REST + "/userRelationList/";

			/*
			 * RELATION_PREFIX
			 */
				this.REQUEST_RELATION = "R";
				this.BLOCK_RELATION  = "B";	/*not use*/
				this.FRIEND_RELATION  = "F";
				this.DENY_RELATION  = "D";
				this.MYSELF_RELATION  = "M";
				this.NONE_RELATION  = "N";
		


};

$.stage.restPool = new RestPool();
$.stageRestPool = $.stage.restPool;