var app = app || {};

(function () {
	'use strict';
  var Models = app.model = app.model || {};
  Models.menu = Backbone.Model.extend({
    url: "",
		idAttribute: "menu_idx",
		defaults: {
	    title : '',
			url: ''
	  }
	});
	Models.subMenu = Backbone.Model.extend({
	  url:"",
	  idAttribute: "subMenu_idx",
		defaults: {
			title: '',
			url: ''
		}
	});
	var menu = new Models.menu({
  	title: '타이틀메뉴1','타이틀메뉴2','타이틀메뉴3','타이틀메뉴4','타이틀메뉴5','타이틀메뉴6','타이틀메뉴7','타이틀메뉴8'
  	url: '/#home','/#home','/#home','/#home','/#home','/#home','/#home','/#home'
	});
	var subMenu = new Models.subMenu({
		title: '서브메뉴1','서브메뉴2','서브메뉴3','서브메뉴4','서브메뉴5','서브메뉴6','서브메뉴7','서브메뉴8'
	  url: '/#about','/#about','/#about','/#about','/#about','/#about','/#about','/#about'
	});
})();
