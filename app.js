 angular.module('tieapp', []).
    config(['$routeProvider', function($routeProvider) {
   		$routeProvider.
    		when('/ties', {templateUrl: 'tie-list.html', controller: TieListCtrl}).
    		when('/ties/:tieId', {templateUrl: 'tie-detail.html', controller: TieDetailCtrl}).
    		otherwise({redirectTo: '/ties'});
    }]);