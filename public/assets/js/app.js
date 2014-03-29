var app = app || {};

$(function() {
  new app.AppView();

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

  //app.Year.add(queue);

  // loop through months array, add to Year collection
  /*
  for (var i = 0; i < months.length; i++) {
    app.Year.add({
      title: months[i], // month name
      order: i + 1 // index
    });
  };
  */

  var birthdayMonth = (function() {
    _.extend(this, Backbone.Events);

    this.listenTo(app.Dispatcher, 'click', function(model) {
      console.log('MONTH VIEW CLICKED.', model);
    });


  })();

});