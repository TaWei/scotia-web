angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', function($scope, $ionicModal, $timeout) {

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
}])

.controller('ChartsCtrl', ['$scope', function($scope) {
  $scope.charts = [
    { title: 'Bar', id: 1 },
    { title: 'Histogram', id: 2 },
    { title: 'XY', id: 3 },
    { title: 'Scatter', id: 4 },
    { title: 'Surface', id: 5 },
    { title: 'Stock', id: 6 }
  ];
}])

.controller('RankingsCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  var columnDefs = [
      {headerName: "Ticker", field: "ticker"},
      {headerName: "Closing", field: "closingPrice"},
      {headerName: "MACD Weekly", field: "macdWeekly"},
      {headerName: "Signal Weekly", field: "signalWeekly"},
      {headerName: "MACD Weekly Change", field: "macdWeeklyChange"},
      {headerName: "Signal Weekly Change", field: "signalWeeklyChange"},
      {headerName: "MACD Monthly", field: "macdMonthly"},
      {headerName: "Signal Monthly", field: "signalMonthly"},
      {headerName: "MACD Monthly Change", field: "macdMonthlyChange"},
      {headerName: "Signal Monthly Change", field: "signalMonthlyChange"}
  ];

  var rowData = [
      {ticker: "TSX: AAB", closingPrice: 4.35, macdWeekly: 1422, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: MAG", closingPrice: 12.35, macdWeekly: 124, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: MAK", closingPrice: 44.35, macdWeekly: 213, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: MBA", closingPrice: 7.35, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: MBB.UN", closingPrice: 123.56, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: SBI", closingPrice: 532.55, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: SCL", closingPrice: 56.25, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: SCU", closingPrice: 78.74, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: USB", closingPrice: 37.35, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 },
      {ticker: "TSX: WDO", closingPrice: 3783.35, macdWeekly: 123, signalWeekly: 3.0, macdWeeklyChange: 10.0, signalWeeklyChange: 5.3, macdMonthly: 25000 , signalMonthly: 2333, macdMonthlyChange: 2.0, signalMonthlyChange: 12.44 }
  ];

  $scope.gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      pinnedColumnCount: 2
  };
}]);
