var db = null;
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//angular.module('starter', ['ionic', 'ngCordova'])
//angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])
angular.module('starter', ['ionic', 'starter.controllers']) // working one
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
            //
            //POST cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git installation from terminal
            //db = $cordovaSQLite.openDB("my.db");
            //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS logionDetails (id integer primary key, username text)");
            //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS studentDetails (id integer primary key, firstname text)");
            //
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.students', {
      url: '/students',
      views: {
        'menuContent': {
          templateUrl: 'templates/studentlist.html',
          controller: 'StudentsCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/students/:studentId',
    views: {
      'menuContent': {
        templateUrl: 'templates/student.html',
        controller: 'StudentCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
