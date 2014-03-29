var app = app || {};

// Application View

app.AppView = Backbone.View.extend({
  // bind to body
  el: '#birthdayApp',

  //sortIndex: 'order'

  // events
  // events: {},

  // initialization called when instance constructed
  initialize: function() {
    // listen to add events
    this.listenTo(app.Year, 'add', this.addOne);

    // when sort key reset, re-render
    this.listenTo(app.Year, 'reOrder:finished', this.render);

    // render list on initialization
    this.render();
  },

  // (re)rendering the app
  render: function() {

    // animate fade-out
    /*
    $('#month-list').children('li').each(function(i, element) {
      $(element).animate({
        opacity: 0,
      }, Math.ceil(Math.random() * 1) * 2500
      , function() {
        element.remove();
      });
    })
    */

    // clear child elements
    $('#month-list').html('');

    if (app.Year.length) {
      // fetch sorted list
      var sorted = app.Year.sort();

      // loop through items and render
      for (var i = 0; i < sorted.models.length; i++) {
        this.addOne(sorted.models[i]);
      }
    }

    // dispatch event
    app.Dispatcher.trigger('render');
  },

  addOne: function(item) {
    // create view from cached template + new model
    var view = new app.MonthView({
      model: item
    });

    $('#month-list').append(view.render().el);
  }

})