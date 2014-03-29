var app = app || {};

// Month Item View

// the DOM element
app.MonthView = Backbone.View.extend({
  // list tag
  tagName: 'li',

  // cache the template
  template: _.template( $('#item-template').html() ),

  // DOM events
  events: {
    'click': 'dispatchClick'
  },

  dispatchClick: function(e) {
    app.Dispatcher.trigger('click', e);
  },

  // initialization function, called when instance first constructed
  initialize: function() {
    // ...
  },

  // (re)renders the months
  render: function() {
    // inject model into template
    this.$el.html( this.template ( this.model.toJSON() ));

    return this;
  }

});