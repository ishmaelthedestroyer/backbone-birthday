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
    console.log('App view instance initialized.');

    // listen to add / reset events
    this.listenTo(app.Year, 'add', this.addOne);
    // this.listenTo(app.Year, 'reset', this.addAll);

    // listen for order event
    // this.listenTo(app.Year, 'order', this.order)

    // rerender on all changes
    //this.listenTo(app.Year, 'all', this.render)
    this.listenTo(app.Year, 'add', this.sort);

    var alias = this;
    setTimeout(function() {
      alias.render();
    }, 2000);

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

    app.Year.comparator = function(month) {
      return month.get('title');
    };

    if (app.Year.length) {
      var sorted = app.Year.sort();

      for (var i = 0; i < sorted.models.length; i++) {
        this.addOne(sorted.models[i]);
      }
    }
  },

  setSortIndex: function(index) {
    // this.sortIndex = index;
    app.Year.comparator = function(month) {
      return month.get(index);
    };

    this.render();
  },

  addOne: function(item) {
    console.log('Item added.', item);

    // create view from cached template + new model
    var view = new app.MonthView({
      model: item
    });

    $('#month-list').append(view.render().el);
  }

})