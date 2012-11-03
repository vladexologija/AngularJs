function formController($scope) {
    $scope.data= {};
   
    $scope.update = function(user) {
      $scope.data= angular.copy(user);
    };
   
    $scope.reset = function() {
      $scope.user = angular.copy($scope.data);
      
    };
   
    $scope.isUnchanged = function(user) {
      $scope.ret = angular.equals(user, $scope.data);
      return $scope.ret;
     
    };
   
    $scope.reset();
  }