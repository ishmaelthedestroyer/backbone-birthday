// Router

var Workspace = Backbone.Router.extend({
  routes: {
    '*order': 'reOrder'
  },

  reOrder: function(param) {
    param = param || '';

    // set the current filter to be used
    if (param == 'alphabetical') {
      param = 'title';
    } else {
      param = 'order';
    }

    app.MonthOrder = param;

    // trigger reOrder event on route change
    window.app.Year.trigger('reOrder');
  }
});

app.Router = new Workspace();
Backbone.history.start();