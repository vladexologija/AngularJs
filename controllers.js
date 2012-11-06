function TieListCtrl($scope, $http) {
  $http.get('ties.json').success(function(data){
  	$scope.ties = data;
  });

  $scope.sort = 'name';
}

function TieDetailCtrl($scope, $routeParams, $http){
	$http.get('ties.json').success(function(data){
  		$scope.tie = data[$routeParams.tieId - 1];
  });
}