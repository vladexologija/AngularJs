function TieListCtrl($scope, $http) {
  $http.get('ties.json').success(function(data){
  	$scope.ties = data;
  });

  $scope.sort = 'name';
}