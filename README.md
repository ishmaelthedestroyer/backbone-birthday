Backbone Birthday
===========

This application was created to showcase some of Backbone's core features including models, collections, views, and routing.
<br /><br />

## Notes
* A month model is created that holds two attributes, a month's title and it's numerical placement (i.e. January = 1, Feb = 2, etc). <br />
* A year collection is instantiated with an array of Month objects. <br />
* A view is created with a template for each month as well as an app view that renders the collection. <br />
* A router is created that sets a sort parameter for ordering the months. <br />
* An event dispatcher is created that allows the views to broadcast click events. <br />
* A module (birthday month) is created that listens for events and sets the selected birthday month. <br />

## Vendor Libraries
* Twitter Bootstrap is used for styling. (http://getbootstrap.com) <br />
* Store.js is used for local storage to remember the birthday month across visits. (https://github.com/marcuswestin/store.js) <br />
* Subtle Patterns was used as a resource for the pattern background. (http://subtlepatterns.com/) <br />

## Resources
* This book by Addy Osmani, a prolific Javascript developer, was used for learning Backbone. <br />
http://www.it-ebooks.info/book/2330/