//console.log('\'Allo \'Allo!');

//Pixi documentation assumes JS, not jQuery - can use jQuery
//demo will use Pixi with jQuery
//(Remember our builder uses jQuery)
$(document).ready(function(){
	//this var is used in render with our filter animator
	var count = 0;

	//create the Pixi renderer
	var renderer = PIXI.autoDetectRenderer(400,400, { transparent: true }); //int define size, transparent attr optional

	//attach renderer to element in page
	$('#addPixi').append(renderer.view);

	//make the stage - it's a container to hold the scene
	var stage = new PIXI.Container();

	//create props (sprites)
	var aquarium = PIXI.Sprite.fromImage('images/awooo.jpg');

	//set up the prop
	aquarium.anchor.x = 0.5;
	aquarium.anchor.y = 0.5;
	aquarium.position.x = 200;
	aquarium.position.y = 200;
	//set the stage
	stage.addChild(aquarium);

	//text
	var text = new PIXI.Text("Awooooo", {font:"50px Arial", dropShadow: true, fill:"white"});

	text.anchor.x = 0;
	text.anchor.y = 0;
	text.position.x = 0;
	text.position.y = 0;

	stage.addChild(text);

	//call a function to show the stage
	render();

	//our custom render function
	function render() {

		//color matrix variable to filter changing
		var colorMatrix = [
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
		];

		//pixi base filter setup
		var filter = new PIXI.filters.ColorMatrixFilter();
		//replace default with our var
		filter.matrix = colorMatrix;

		//math to change our matrix values over time
		var newValSat = 0 + Math.sin(count);
		filter.saturate(newValSat, false);
		stage.filters = [filter];
		//update count
		count += .01;

		renderer.render(stage);
		//this makes things actually appear and show frames
		requestAnimationFrame(render);
		//basic Pixi animation function
		aquarium.rotation += .001;

		if(text.position.x < 400){
			text.position.x += 1;
		}
		else{
			text.position.x = -200;
		}
		
	}
});






