Socialplace
===========

##Description

Uses Marionette.js & Require.js per usual, but has Zurb's Foundation 5 responsive framework in place for the front-end instead of the usual Twitter Bootstrap front-end responsive framework. Some people prefer to use Foundation 5, one of the biggest reasons for this being the use of Sass instead of the Less.

##Directions

1.  Install Node.js & clone repo.  
2.  Install Nodemon library globally.  
    `[sudo] npm install nodemon -g`  
3.  If Grunt has been used globally, remove it.  
     `[sudo] npm uninstall -g grunt`  
4.  Install latest Grunt  
     `[sudo] npm install -g grunt-cli`  
5.  Inside project folder  
     `npm install`  
6.  Next run Nodemon. This starts Node.js web server. It restarts upon file change!  
     `nodemon`  
7.  App at `http://localhost:8008`  
8.  Jasmine test suite at `http://localhost:8008/specs.html`  
9.  Type `grunt` to run build & create minified .js & .css  


##Notes

### Environment

Local JavaScript variable in index, `production`, is used to communicate production or development.

### Helper Methods

* `loadCSS(url, callback)` - Asynchronously includes a CSS file to a page
* `loadJS(file, callback)` - Asynchronously includes a JavaScript file to the page
* `loadFiles(production, obj, callback)` - Calls the `loadCSS()` and `loadJS()` methods internally to asynchronously include CSS & JavaScript files 

### Production Mode v Development Mode

* Production uses a single compressed JS file (via almond, not require) for all of the core JavaScript functionality & a single CSS file as well.
* Development uses Require only and not Almond.

---

App.js
------

Global `Marionette.Application` object starts here. Defines Backbone & Marionette as dependencies, but Require.js won't load dependencies more than once.

Remember: Best practice = list all dependencies for every file.

---

AppRouter.js
------------

Configure routes in an `appRoutes` map. Variation of Backbone.Router. When a route is fired, `controller` handles it. 

---

Collection.js
------------------

Backbone.js Collection class to store all of your Backbone Models. Lists jquery, backbone, and UserModel.js as dependencies.

---

Gruntfile.js
------------

   - Grunt.js, 
   - Require Optimizer
   - almond.js

__NOTE: Need to run Jasmine & Grunt.__
  
   - Marionette  
   - Handlebars  
   - Require  
   - Backbone  
   - Lodash  
   - Almond  
   - jQuery
   - Bootstrap
   - Require-handlebars-plugin (`hbs`)  
   - grunt-contrib-requirejs plugin to run the Require.js optimizer  
   - grunt-contrib-jshint plugin automates JSHint code quality checking