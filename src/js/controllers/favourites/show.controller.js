angular
.module('wdi-project-4')
.controller('favouritesShowCtrl', favouritesShowCtrl);

favouritesShowCtrl.$inject = ['Favourite', '$stateParams', '$http', 'API'];

function favouritesShowCtrl(Favourite, $stateParams, $http, API) {
  const vm = this;

  vm.favourite = Favourite.get($stateParams);

  vm.submit = () => {
    vm.post.favourites.push(data);
  };
}
