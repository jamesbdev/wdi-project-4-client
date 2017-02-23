angular
.module('wdi-project-4')
.controller('favouritesNewCtrl', favouritesNewCtrl);

favouritesNewCtrl.$inject = ['Favourite', '$state', 'CurrentUserService'];
function favouritesNewCtrl(Favourite, $state, CurrentUserService){
  const vm = this;
  vm.submit = () => {
    vm.favourite.user_id = CurrentUserService.currentUser.id;
    Favourite
    .save(vm.favourite)
    .$promise
    .then((data) => {
      console.log(data);
      // $state.go('favouritesShow()');
    });
  };
}
