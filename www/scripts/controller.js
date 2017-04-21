var app = function(app){

	app.makeController = function(frame, stage, view, model, pages){

		/* SETTINGS */
		var difficulties = view.difficulty.difficultyList.children;
		var activities = view.activity.activityList.children;
		var bgColor = "#eaeaea";
		var countDown = null;

		var playlist = {};
		playlist.timer = view.playlist.page1.children[0];
		playlist.activity = view.playlist.page1.children[1];

		var rest = {};
		rest.timer = view.playlist.page2.children[0];
		rest.nextActivity = view.playlist.page2.children[2];

		// Define hotspots 
		var hotSpots = new zim.HotSpots([
			{page: view.start, rect: view.start.button, call:function(){
				var tempList = preparePlaylist();
				console.log(playlist.activity)
				var current = tempList[0];
				playlist.activity.text = current.name;
				rest.nextActivity.text = tempList[1].name;

				startTimer(current.minutes, current.seconds, playlist.timer, tempList); 

				pages.go(view.playlist, "down", "slide", 500); }},
			{page: view.start, rect: view.start.activityButton, call:function(){ pages.go(view.activity, "left", "slide", 500); }},
			{page: view.start, rect: view.start.difficultyButton, call:function(){ pages.go(view.difficulty, "right", "slide", 500); }},
			{page: view.activity, rect: view.activity.backButton, call:function(){ pages.go(view.start, "right", "slide", 500); }},
			{page: view.difficulty, rect: view.difficulty.backButton, call:function(){ pages.go(view.start, "left", "slide", 500); }},
			{page: view.playlist, rect: view.playlist.backButton, call:function(){
				if (countDown) clearInterval( countDown ); 
				pages.go(view.start, "up", "slide", 500); }},
		]);

		// Select/deselect activities
		for (var i=0; i < activities.length; i++){
			activities[i].on("mousedown", function( ev ){
				if (this.selected){
					this.back.color = bgColor;
					this.label.color = view.activityColor;
					this.selected = false;
				} else {
					this.back.color = view.activityColor;
					this.label.color = "#fff";
					this.selected = true;
				}
				localStorage[this.name] = JSON.stringify(this.selected);
			});
		};

		// Select/deselect difficulties
		for (var i=0; i < difficulties.length; i++){
			difficulties[i].on("mousedown", function( ev ){
				if (!this.selected){
					for (var j=0; j < difficulties.length; j++){
						var d = difficulties[j];
						if (d.selected){
							d.back.color = bgColor;
							d.label.color = view.difficultyColor;
							d.selected = false;
							localStorage[d.name] = JSON.stringify(d.selected);
						}
					}
					this.back.color = view.difficultyColor;
					this.label.color = "#fff";
					this.selected = true;
					localStorage[this.name] = JSON.stringify(this.selected);
					
				} 
			})
		}

		function changePage( array ){
			var current = array[0];
			var next = array[1];

			if (view.subpages.page == view.playlist.page1){

				(next) ? rest.nextActivity.text = next.name : rest.nextActivity.text = "finish!";
				startTimer(current.restMinutes, current.restSeconds, rest.timer, array);
				view.subpages.go(view.playlist.page2, "right", "slide", 800);


			} else if (view.subpages.page == view.playlist.page2){
				(next) ? playlist.activity.text = next.name: pages.go(view.start, "up", "slide", 500);
				array.shift();
				startTimer(current.minutes, current.seconds, playlist.timer, array);
				view.subpages.go(view.playlist.page1, "right", "slide", 800);

			};

			stage.update();
		};

		function changeColor( obj, type ){
			if (obj.selected){
				obj.back.color = type + "Color";
				obj.label.color = "#fff";
			} else {
				obj.back.color = "#fff";
				obj.label.color = type + "Color";
			}
		}

		// Creates an object containing selected activities and difficulty
		function getSelected(){
			var useActivities = [];
			for (var i=0; i < activities.length; i++){
				if ( activities[i].selected ){
					useActivities.push( activities[i].name);
				}
			};
			for (var i=0; i < difficulties.length; i++){
				if ( difficulties[i].selected ){
					useDifficulty = difficulties[i].name;
				}
			};

			return { activities : useActivities, difficulty: useDifficulty };
		};

		/* Returns an array of objects containing activity, duration, and rest duration*/
		function preparePlaylist(){
			var settings = getSelected();
			var actObjs = [];
			for (var i=0; i < settings.activities.length; i++){
				var a = settings.activities[i];
				var act = model.data[ settings.difficulty ][a]; //gets time object based on difficulty
				actObjs = actObjs.concat( act );
			};

			return actObjs;
		};

		function startTimer(min, sec, el, array){
			var total = 60*min + sec;
	
			countDown = setInterval(function(){ 
				total--;
				var seconds = total%60;
				if (seconds < 10) seconds = "0" + seconds;
				var minutes = Math.floor( total/60 );
				el.text = minutes + ":" + seconds;
				if (total <= 0){
					console.log( "DONE!");
					clearInterval( countDown );
					changePage(array);
				};
				stage.update(); 
			}, 1000);
		};


	}; //end makeController

	return app;

}(app || {});