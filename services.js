
app.service('pokeApi', ['$http', '$q', function($http, $q){
	
	var self = this;
	
	self.pokemonObj = null;
	self.requestPokemon= function(pokemon){
		
		var differed = $q.defer();
		if(!self.pokemonObj){
			$http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/').then(function(response){
				self.pokemonObj = response.data;
				differed.resolve(self.pokemonObj);
			}, function(failure){
				self.pokemonObj = null;
				differed.reject(self.pokemonObj);

			});
		}else{
			differed.resolve(self.pokemonObj);
		};
		return differed.promise;
	};
	
}]);
