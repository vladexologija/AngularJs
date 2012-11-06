function TieListCtrl($scope, $http) {
  $http.get('ties.json').success(function(data){
  	$scope.ties = data;
  });

  $scope.sort = 'name';
}

function TieDetailCtrl($scope, $routeParams){
	$scope.tieId = $routeParams.tieId;
}