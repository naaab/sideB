angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('StudentsCtrl', function($scope) {
  $scope.studentsList = [
    { Name: 'Ved', id: 1111 },
    { Name: 'Sayan', id: 2222 }
  ];
})

.controller('StudentCtrl', function($scope, $state) {
  $scope.student = [
    { Name: 'XXX', id: 1111 }
  ];
})

.controller('LoginCtrl', function($scope, $state, AuthModule) {

  var previousToken = window.localStorage.getItem("token")
  if(previousToken == "VALID-TOKEN")
  {
    alert("previous token found")
    $state.go('app.students');
  }
  else
  {
    alert("previous token NOT found")
  }


  $scope.doLogin = function() {
    var u = $scope.loginData.username;
    var p = $scope.loginData.password;
    var token = AuthModule.validate(u,p);
    $scope.token = token;
    
    if (token == "VALID-TOKEN")
    {
      window.localStorage.setItem("toen", token);
      
      //POST fixing the SQLite plugin installation..
      /*
      $scope.insert = function(username, password) {
          var query = "INSERT INTO logionDetails (username, username) VALUES (?,?)";
          $cordovaSQLite.execute(db, query, [username, username]).then(function(res) {
              console.log("INSERT ID -> " + res.insertId);
          }, function (err) {
              console.error(err);
          });
      }
    */

      $state.go('app.students');  //All done, marching towards new view.        
    }
    else
      $state.go('app.login');    

  };  

})

.factory('AuthModule', function() {

  return {
    validate: function(u,p) {
      var token = "";
      //
      //TBD
      //call REST API
      //
      if(u=="Nabraj")
      {
        token = "VALID-TOKEN";
      }
      return token;
    },
    authorize: function(u) {
    var studentsList = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];
      return studentsList;
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
