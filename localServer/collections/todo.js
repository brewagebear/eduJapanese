var app = app || {};

(function () {
	'use strict';
  //*localstorage에 저장되는 콜렉션
	var CategoryList = app.collection = app.collection || {};
  CategoryList = Backbone.Collection.extend({
		model : app.Models;
		initialize: function () {
	  }
  });
  // **Todos** 전역 콜렉션 생성
  CategoryList = new CategoryList();
})();
