
var myApp = angular.module('myApp', []);

/*
var myApp = angular.module('myApp', []).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://192.168.1.131:3002/**'
    //'https://nodejs.zootle.co.uk/api/**'
  ]); 
});
*/



myApp.controller('MainCtrl', function ($scope, $http) {


   $http.get('media/search/a').success(function(data) {
  //$http.get('http://192.168.1.131:3002/media/search/a').success(function(data) {
    $scope.medias=data.result[0];
    console.log($scope.medias);
  });    


});



/*
myApp.controller('MainCtrl', function ($scope) {


  $scope.medias=
  
  	 [
      {
        "_id": "53304ba06b80b0cbdce868de",
        "Type": "CD",
        "Artist": "Nirvana",
        "Title": "Nevermind",
        "Tracklist": [
          {
            "Track": 1,
            "Title": "Smells Like Teen Spirit",
            "Length": "5:02"
          },
          {
            "Track": 2,
            "Title": "In Bloom",
            "Length": "4:15"
          }
        ]
      },
      {
        "_id": "53306c8a6b80b0cbdce868df",
        "Type": "CD",
        "Artist": "Nirvana",
        "Title": "In Utero",
        "Tracklist": [
          {
            "Track": 1,
            "Title": "Serve the Servants",
            "Length": "3:36"
          },
          {
            "Track": 2,
            "Title": "Scentless Apprentice",
            "Length": "3:48"
          }
        ]
      }
    ]
  
  ; 


});

*/