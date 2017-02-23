angular
.module('wdi-project-4')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('favouritesIndex', {
    url: '/favourites',
    templateUrl: '/js/views/favourites/index.html',
    controller: 'favouritesIndexCtrl',
    controllerAs: 'favouritesIndex'
  })
  .state('favouritesNew', {
    url: '/favourites/new',
    templateUrl: '/js/views/favourites/new.html',
    controller: 'favouritesNewCtrl',
    controllerAs: 'favouritesNew'
  })
    .state('favouritesShow', {
      url: '/favourites/:id',
      templateUrl: '/js/views/favourites/show.html',
      controller: 'favouritesShowCtrl',
      controllerAs: 'favouritesShow'
    });

  $urlRouterProvider.otherwise('/');

}
