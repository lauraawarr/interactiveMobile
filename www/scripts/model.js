var app = function(app){

	app.makeModel = function(){

		var model = {};

		var difficulties = model.difficulties = [ "beginner", "intermediate", "advanced"];

		var activities = model.activities = [ "core", "hang board", "campus board", "strength", "flexibility"];

		model.data = {
			"beginner" : {
				"core" : [
					{ name : "leg lifts", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
				],
				"hang board" : [
					{ name : "straight arm hang", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
					{ name : "straight arm hang", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
					{ name : "straight arm hang", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
				], 
				"campus board" : [
					{ name : "campus board", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
					{ name : "campus board", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
					{ name : "campus board", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 15 },
				], 
				"strength" : [
					{ name : "pull-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
					{ name : "pull-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
					{ name : "pull-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 15, restMinutes : 0, restSeconds : 30 },
				], 
				"flexibility" : [
					{ name : "shoulder stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "butterfly stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "downward dog", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
				]	
			},
			"intermediate" : {
				"core" : [
					{ name : "leg lifts", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
				],
				"hang board" : [
					{ name : "90° hang", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 15 },
					{ name : "straight arm hang", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 15 },
					{ name : "90° hang", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 15 },
				], 
				"campus board" : [
					{ name : "campus board", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "campus board", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "campus board", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
				], 
				"strength" : [
					{ name : "pull-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "pull-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "pull-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
					{ name : "push-ups", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 30 },
				], 
				"flexibility" : [
					{ name : "shoulder stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "butterfly stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "downward dog", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
				]	
			},
			"advanced" : {
				"core" : [
					{ name : "leg lifts", minutes : 1, seconds : 0, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 1, seconds : 0, restMinutes : 0, restSeconds : 30 },
					{ name : "leg lifts", minutes : 1, seconds : 0, restMinutes : 0, restSeconds : 30 },
				],
				"hang board" : [
					{ name : "90° hang", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "90° hang", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "90° hang", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
				], 
				"campus board" : [
					{ name : "campus board", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
					{ name : "campus board", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
					{ name : "campus board", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 30 },
				], 
				"strength" : [
					{ name : "pull-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "push-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "pull-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "push-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "pull-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
					{ name : "push-ups", minutes : 0, seconds : 45, restMinutes : 0, restSeconds : 15 },
				], 
				"flexibility" : [
					{ name : "shoulder stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "butterfly stretch", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
					{ name : "downward dog", minutes : 0, seconds : 30, restMinutes : 0, restSeconds : 5 },
				]	
			}
		};

		return model;
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables 