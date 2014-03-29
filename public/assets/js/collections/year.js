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

    this.on('reOrder', this.reOrder)
  },


  reOrder: function() {
    console.log('Sort triggered.');

    // this.sortIndex = index;
    this.comparator = function(month) {
      return month.get( app.MonthOrder || 'order' );
    };

    this.trigger('reOrder:finished');
  },

  // comparator function for ordering
  comparator: function(month) {
    return month.get('order');
  }
});

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

var queue = [];
for (var i = 0; i < months.length; i++) {
  queue.push({
    order: i, // index
    title: months[i] // month name
  })
}

// create global collection
app.Year = new YearCollection(queue);