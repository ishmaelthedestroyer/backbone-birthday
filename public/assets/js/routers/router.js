// Router

var Workspace = Backbone.Router.extend({
  routes: {
    '*order': 'reOrder'
  },

  reOrder: function(param) {
    param = param || '';

    console.log('reOrdering.', param);

    // set the current filter to be used
    if (param == 'alphabetical') {
      param = 'title';
    } else {
      param = 'order';
    }

    app.MonthOrder = param;

    // trigger a collectionf ilter event, causing hiding / unhiding
    // of Todo view items
    window.app.Year.trigger('reOrder');
  }
});

app.Router = new Workspace();
Backbone.history.start();