var app = app || {};

// Year Collection - holds months

var YearCollection = Backbone.Collection.extend({
  // reference model
  model: app.Month,

  // fire when instance first initialized
  initialize: function() {
    // listen for reOrder event to set key
    this.on('reOrder', this.reOrder)
  },


  reOrder: function() {
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


// loop through months array, add to Year collection
/*
for (var i = 0; i < months.length; i++) {
  app.Year.add({
    title: months[i], // month name
    order: i + 1 // index
  });
};
*/

// It seems to be better practice to initialize a collection with it's elements,
// as opposed to adding them one by one.  I turned the `months` array of strings into
// a `queue` array of objects that'll be used during instantiation
var queue = [];
for (var i = 0; i < months.length; i++) {
  queue.push({
    order: i, // index
    title: months[i] // month name
  })
}

// create global collection
app.Year = new YearCollection(queue);