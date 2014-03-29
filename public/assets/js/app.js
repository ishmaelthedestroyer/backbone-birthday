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
    // extend module
    _.extend(this, Backbone.Events);

    // special month holder
    var selected = null;

    // listen for dispatched click events
    this.listenTo(app.Dispatcher, 'click', function(e, model) {
      e.preventDefault();
      e.stopPropagation();

      // set selected month
      selected = model.attributes.title;

      $('.month-item.selected').removeClass('selected');
      $(e.currentTarget).addClass('selected');
    });

    // listen for dispatched render events
    this.listenTo(app.Dispatcher, 'render', function() {
      if (selected) {
        $('.month-item').each(function(i, element) {
          var $element = $(element);
          if ( $(element).html().indexOf(selected) > -1) {
            $element.addClass('selected');
          }
        });
      }
    });


  })();

});