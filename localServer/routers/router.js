var app = app || {};
(function() {
    'use strict';
    var views = app.view = app.view || {};

    app.Router = Backbone.Router.extend({
        routes: {
            'situation': 'situationRoute',
            'video': 'videoRoute',
            'culture': 'cultureRoute',
            //와일드카드 디폴트 라우터는 맨 마지막에 삽입.
            '*home': 'homeRoute'
        },
        _bindRoutes: function() {
          if (!this.routes) return;
          this.routes = _.result(this, 'routes');
          var route, routes = _.keys(this.routes);
          while ((route = routes.pop()) != null) {
            this.route(route, this.routes[route]);
          }
        },
        initialize: function() {
            // create the layout once here
            this.layout = new views.Application({
                el: 'body',
            });
        },
        homeRoute: function() {
            var view = new views.Home();
            this.layout.setContent(view);
        },
        situationRoute: function() {
            var view = new views.Stuation();
            this.layout.setContent(view);
        },
        videoRoute: function() {
            var view = new views.Video();
            this.layout.setContent(view);
        },
        cultureRoute: function(){
            var view = new views.Culture();
            this.layout.setContent(view);
        }
      });
      var router = new app.Router();
      Backbone.history.start();
})();
