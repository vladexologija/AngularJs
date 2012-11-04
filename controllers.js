function TieListCtrl($scope) {
  $scope.ties = [
    {"name": "Burrbery",
     "price": 100},
    {"name": "Aquascutum",
     "price": 80},
    {"name": "Ben Sherman",
     "price": 50}
  ];

  $scope.sort = 'name';
}