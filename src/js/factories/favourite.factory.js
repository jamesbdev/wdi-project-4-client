angular
.module('wdi-project-4')
.factory('Favourite', favouriteFactory);

favouriteFactory.$inject = ['API', '$resource'];
function favouriteFactory(API, $resource){
  return $resource(`${API}/favourites/:id`, { id: '@_id'});
}
