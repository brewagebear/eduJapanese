var app = app || {};
(function() {
    'use strict';
    //views linitalize
    var views = app.view = app.view || {};
    views.Application = Backbone.View.extend({
        initialize: function() {
            // caching the jQuery object on init
            this.$content = this.$('#container');
            //this.$loading = this.$('#loading');
        },
        setContent: function(view) {
            var content = this.content;
            if (content) content.remove();
            content = this.content = view;
            //content rednering
            this.$content.html(content.render().el);
        },
        showSpinner: function() {
          this.$loading.show();
        },
        hideSpinner: function() {
          this.$loading.hide();
        }
    });
    views.Home = Backbone.View.extend({
      render: function(html) {
       var templateName = 'home';
       var tmpl_dir = '../assets/static';
       var tmpl_url = tmpl_dir + '/' + templateName + '.html';
       var tmpl_string = '';

       $.ajax({
           url: tmpl_url,
           method: 'GET',
           async: false,
           dataType : html,
           success: function (data) {
               tmpl_string = data;
           }
       });

       var template = _.template(tmpl_string);
       this.$el.html(template);
       return this;
      }
    });
    views.Stuation = Backbone.View.extend({
      render: function() {
       var template = _.template("<strong><% print('Hello ' + page); %></strong>");
       var pageTxt = {page: "About"};
       var html = template(pageTxt);
       this.$el.html(html);
       return this;
      }
    });
    views.Video = Backbone.View.extend({
      render: function() {
       var template = _.template("<strong><% print('Hello ' + page); %></strong>");
       var pageTxt = {page: "Contact"};
       var html = template(pageTxt);
       this.$el.html(html);
       return this;
      }
    });
    views.Culture = Backbone.View.extend({
      render: function() {
       var template = _.template("<strong><% print('Hello ' + page); %></strong>");
       var pageTxt = {page: "Contact"};
       var html = template(pageTxt);
       this.$el.html(html);
       return this;
      }
    });
})();
