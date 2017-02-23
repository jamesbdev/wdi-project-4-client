angular
.module('wdi-project-4')
.config(setUpInterceptor);

setUpInterceptor.$inject = ['$httpProvider'];
function setUpInterceptor($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}
