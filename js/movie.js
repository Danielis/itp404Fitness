// Add data-ng-controller or so forth for html5 rules

// ng-app grabs this in index.html
var app = angular.module('rottenTomatoe', []);

// controller for the module above
app.controller('RottenController', function($scope, movieApi, movieStats){
	// Data
	$scope.results = [];

	// $scope.$watch('movies', function(){
	// 	$scope.searchTotal = movieStats.getTotal($scope.results.movies);
	// 	$scope.searchBest = movieStats.getBest($scope.results.movies);
	// 	$scope.searchWorst = movieStats.getWorst($scope.results.movies);
	// }, true);

	$scope.searchMovie = function(){
		movieApi.all($scope.searchTerm).then(function(response){
			$scope.results = response.data;
			console.log($scope.results);
			$scope.searchTotal= movieStats.getTotal($scope.results.movies);
			$scope.searchBest = movieStats.getBest($scope.results.movies);
			$scope.searchWorst = movieStats.getWorst($scope.results.movies);
		});

		$scope.searchTerm=  null;
	};
});

// create a custom service called in controller
app.factory('movieApi', function($http){
	return {
		all: function(term){
			return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q='+term+'&page_limit=40&page=1&apikey=9wrrqc2dsdpmmafqwq6x2gpv&callback=JSON_CALLBACK');
		}
	}
});

app.factory('movieStats', function(){
	function getTotal(movies){
		var sum = 0;
		movies.forEach(function(movie){
			sum++;
		});
		return sum;
	}

	function getBest(movies){
		var highest = movies[0].ratings.audience_score;
		movies.forEach(function(movie){
			if(highest < movie.ratings.audience_score){
				highest = movie.ratings.audience_score;
			}
		});
		return highest;
	}

	function getWorst(movies){
		var smallest = movies[0].ratings.audience_score;
		movies.forEach(function(movie){
			if(smallest > movie.ratings.audience_score){
				smallest = movie.ratings.audience_score;
			}
		});
		return smallest;
	}

	return  {
		getTotal: getTotal,
		getBest: getBest,
		getWorst: getWorst
	}
});