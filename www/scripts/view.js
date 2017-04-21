var app = function(app){

	app.makeView = function(stage, stageW, stageH, layoutManager, model, assets){

		var view = {};

		var bgColor = "#eaeaea";
	
		var startColor = "#94ceb4";
		var difficultyColor = view.difficultyColor = "#6dab8b";
		var activityColor = view.activityColor = "#f26c67";

		var timerColor = "#353334";
		var timerFont = "Raleway Bold, sans-serif";


		// START PAGE

		var start = view.start = new zim.Container( stageW, stageH );
		start.name = "Start Page";

		var logoContainer = new zim.Container(500, 100)
			.addTo(start);

		var logoBack = new zim.Rectangle({
			width: 490,
			height: 100, 
			color: "#353334",
			corner: 5})
			.center(logoContainer);

		var logo1 = assets.logoSmallGrey.clone();
		logo1.scale(0.9);
		logoContainer.addChild(logo1);

		// Main Button
		var startButton = start.button = new zim.Container(500,500)
			.addTo(start);
		var button = new zim.Rectangle({
			width: 490 , 
			height: 490, 
			color: startColor,
			corner: 10 })
			.center(startButton);
		var startLabel = new zim.Label({
				text: "START",
				size: 90,
				color: "#fff",
				font: "Raleway Bold, sans-serif",
				fontOptions: "small-caps" 
			})
			.center(startButton);
		startLabel.y -= 20;
		startLabel.x += 10;
		var trainingLabel = new zim.Label({
				text: "training",
				size: 70,
				color: "#fff",
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
			.center(startButton);
		trainingLabel.y += 40;
		trainingLabel.x -= 25;

		// Footer Buttons
		var footer = start.footer = new zim.Container(500, 200)
			.addTo(start);

		var activityButton = start.activityButton = new zim.Container(250, 200)
			.center(footer);
		activityButton.x -= 125;
		var activityBack = new zim.Rectangle({
			width: 242.5 , 
			height: 242.5, 
			color: activityColor,
			corner: 10 })
			.addTo(activityButton);
		activityBack.x += 5;
		var activityLabel = new zim.Label({
				text: "activities",
				color: "#fff",
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
			.center(activityButton);
		activityLabel.x -= 10;
		activityLabel.y += 10;

		var difficultyButton = start.difficultyButton = new zim.Container(250, 200)
			.center(footer);
		difficultyButton.x += 127.5;
		var activityBack = new zim.Rectangle({
			width: 242.5 , 
			height: 242.5, 
			color: difficultyColor,
			corner: 10 })
			.addTo(difficultyButton);
		var difficultyLabel = new zim.Label({
				text: "difficulty",
				color: bgColor,
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
			.center(difficultyButton);
		difficultyLabel.x -= 15;
		difficultyLabel.y += 10;

		// START LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: start,
				regions: [
					{object: logoContainer, marginTop: 1, maxWidth: 100, align: "center", valign: "top"},
					{object:startButton, marginTop:0, width: 100, align: "center"},
					{object:footer, marginTop:0, width: 100}
				],
				lastMargin: 3,
				// regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);

		///////////////////////////////////////

		// BACK TAB 

		function createBackTab( holder , text ){
			if ( text == null ) text = "BACK";
			var width = 500;
			var height = 100;
			var obj = new zim.Container(width, height )
			.addTo(holder);
			obj.back = new zim.Rectangle({
				width: width,
				height: height, 
				color: "#353334",
				corner: 10 })
				.addTo(obj);
			obj.label = new zim.Label({ 
				text: text,
				color: bgColor,
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
				.center(obj);

			return obj;
		};

		///////////////////////////////////////

		// ACTIVITY

		var activity = view.activity = new zim.Container( stageW, stageH );
		activity.name = "Activity";

		var activityHead = activity.head = new zim.Container( 300, 100 )
			.addTo(activity);

		var activityHeadLabel = new zim.Label({
			text: "activities",
			color: "#575354",
			size: 80,
			font: "Raleway Light, sans-serif",
			fontOptions: "small-caps" })
			.center(activityHead);
		activityHeadLabel.x -= 30;
		activityHeadLabel.y -= 20;

		var activityList = activity.activityList = new zim.Container(500,500)
			.addTo(activity);

		// Create Activity Button 
		function createActivity(name, marginTop){
			var height = 75;
			var width = 500;
			var obj = new zim.Container(width,height)
				.addTo(activityList);
			obj.name = name;
			obj.y += ( obj.height + marginTop )* ( activityList.children.length - 1 );
			obj.back = new zim.Rectangle({
				width: width,
				height: height, 
				color: bgColor,
				borderColor: activityColor,
				borderWidth: 8,
				corner: height/2 })
				.addTo(obj);
			obj.label = new zim.Label({ 
				text: name,
				color: activityColor,
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
				.addTo(obj)
				.pos(30, height/4);
			obj.selected = false;

			return obj;
		};

		// Create all buttons - if active in localstorage, change colour
		for (var i=0; i < model.activities.length; i++){
			var n = model.activities[i];
			var a = createActivity ( n , 15);
			if (localStorage[ a.name ] && JSON.parse(localStorage[ a.name ])){
				a.back.color = activityColor;
				a.label.color = bgColor;
				a.selected = true;
			} 
		}


		var footer2 = new zim.Container(500, 100)
			.addTo(activity);

		var backButton = activity.backButton = createBackTab( footer2 );

		// ACTIVITY LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: activity,
				regions: [
					{object: activityHead, marginTop: 5, maxWidth: 80, height: 10, align: "center", valign: "top"},
					{object: activityList, marginTop:1, maxWidth:90, align: "center"},
					{object: footer2, marginTop:5, maxWidth: 80, height:10}
				],
				lastMargin: 3,
				// regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);


		///////////////////////////////////////

		// DIFFICULTY

		var difficulty = view.difficulty = new zim.Container( stageW, stageH );
		difficulty.name = "Difficulty";

		var difficultyHead = difficulty.head = new zim.Container( 300, 100 )
			.addTo(difficulty);

		var difficultyHeadLabel = new zim.Label({
			text: "difficulty",
			color: "#575354",
			size: 80,
			font: "Raleway Light, sans-serif",
			fontOptions: "small-caps" })
			.center(difficultyHead);
		difficultyHeadLabel.x -= 30;
		difficultyHeadLabel.y -= 20;

		var difficultyList = difficulty.difficultyList = new zim.Container(500,500)
			.addTo(difficulty);

		// Define Difficulty Button object
		function createDifficulty(name, marginTop){
			var height = 100;
			var width = 500;
			var obj = new zim.Container(width, height )
			.addTo(difficultyList);
			obj.name = name;
			obj.y += ( obj.height + marginTop ) * ( difficultyList.children.length - 1 );
			obj.back = new zim.Rectangle({
				width: width,
				height: height, 
				color: bgColor,
				borderColor: difficultyColor,
				borderWidth: 8,
				corner: 50 })
				.addTo(obj);
			obj.label = new zim.Label({
				text: name,
				color: difficultyColor,
				font: "Raleway Light, sans-serif",
				fontOptions: "small-caps" })
				.addTo(obj)
				.pos(30, height/3);

			return obj;
		};

		// Create all buttons - if active in localstorage, change colour
		for (var i=0; i < model.difficulties.length; i++){
			var n = model.difficulties[i];
			var d = createDifficulty( n, 15 );
			if (localStorage[ n ] && JSON.parse(localStorage[ n ])){
				d.back.color = difficultyColor;
				d.label.color = bgColor;
				d.selected = true;
			} 
		}

		var footer3 = new zim.Container(500, 100)
			.addTo(difficulty);

		var backButton = difficulty.backButton = createBackTab( footer3 );


		// DIFFICULTY LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: difficulty,
				regions: [
					{object: difficultyHead, marginTop: 5, maxWidth: 80, height: 10, align: "center", valign: "top"},
					{object: difficultyList, marginTop:1, maxWidth:90, align: "center"},
					{object:footer3, marginTop:5, maxWidth:80, height:20}
				],
				lastMargin: 3,
				// regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);


		///////////////////////////////////////

		// PLAYLIST

		var playlist = view.playlist = new zim.Container( stageW, stageH );
		playlist.name = "Playlist";

		var playlistBg = new zim.Rectangle( stageW, stageH, startColor )
			.addTo(playlist);

		var logo4 = playlist.logo = assets.logoSmall.clone();
			playlist.addChild(logo4);

		// PLAYLIST PAGE 1
		playlist.page1 = new zim.Container(500,500);
		var timer = new zim.Label({
			text: '0:00', 
			color: timerColor,
			font: timerFont,
			fontOptions: "small-caps",
			size: 200})
			.center(playlist.page1);
		timer.y -= 100;

		var currentActivity = new zim.Label({
			text: '45° HANG', 
			color: timerColor,
			font: "Raleway Light, sans-serif",
			fontOptions: "small-caps",
			lineWidth: 350,
			size: 80})
			.center(playlist.page1);
		currentActivity.y += 170;
		currentActivity.x -= 60;

		// PLAYLIST PAGE 2
		playlist.page2 = new zim.Container(500,500);
		var timer = new zim.Label({
			text: '0:05', 
			color: timerColor,
			font: timerFont,
			fontOptions: "small-caps",
			size: 200})
			.center(playlist.page2);
		timer.y -= 100;

		var next = new zim.Label({
			text: 'NEXT ACTIVITY', 
			color: timerColor,
			font: "Raleway Light, sans-serif",
			fontOptions: "small-caps",
			size: 30})
			.center(playlist.page2);
		next.y += 90;
		next.x -= 110;

		var nextActivity = new zim.Label({
			text: 'PLANK', 
			color: timerColor,
			font: "Raleway Light, sans-serif",
			fontOptions: "small-caps",
			lineWidth: 350,
			size: 80})
			.center(playlist.page2);
		nextActivity.y += 170;
		nextActivity.x -= 60;

		// SUBPAGES 

		var subpages = view.subpages = new zim.Pages({
			holder: playlist,
			pages:[
				{page: playlist.page1, swipe:[null, playlist.page2, null,null]},
				{page: playlist.page2, swipe:[null, playlist.page1, null,null]},
			],
			transition:"slide",
	   		speed:1000
		});
		subpages.addTo(playlist);

		// PLAYLIST FOOTER
		var footer4 = new zim.Container(500, 100)
			.addTo(playlist);

		var backButton = playlist.backButton = createBackTab( footer4 , "QUIT");

		// PLAYLIST LAYOUT

		layoutManager.add(
			new zim.Layout({
				holder: playlist,
				regions: [
					{object: logo4, marginTop: 2, maxWidth: 96, height: 10, align: "left", valign: "top"},
					{object: subpages, marginTop:5, width:100, align: "center"},
					{object:footer4, marginTop:5, maxWidth:80, height:20}
				],
				lastMargin: 3,
				// regionShape: new zim.Shape(),
				scalingObject: stage
			})
		);

		
		return view;
	}; //end makePages

	return app;

}(app || {}); //use modual pattern to avoid overwriting variables 