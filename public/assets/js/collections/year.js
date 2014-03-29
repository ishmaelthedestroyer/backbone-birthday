var app = app || {};

// Year Collection - holds months

var YearCollection = Backbone.Collection.extend({
  // reference model
  model: app.Month,

  // fire when instance first initialized
  initialize: function() {
    // console.log('Instance of YearCollection created.')
    /*
    this.on('add', function() {
      console.log('Sorted.', this.sort());
    });
    */
  },



  // comparator function for ordering
  comparator: function(month) {
    return month.get('order');
  }
});

// create global collection
app.Year = new YearCollection();