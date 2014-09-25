# levelup.js

**levelup.js** is a small (2kb) javascript module to manage player progress across gaming levels. DEMO: http://mulhoon.github.io/levelup.js/

*This is a work in progress*

## Quick usage
```
var levelup = new LevelUp();

// set score
levelup.score(123);

// increase score
levelup.increment();

// decrease score
levelup.increment();

// get scorecard
levelup.scorecard();
```
scorecard returns...
```
{
	score:123						// current total score
	title:"Gorilla",				// current title
	quote:"You're a true soldier"	// current quote
	level:2,						// current level
	levelscore:13,					// current level score
	leveltotal:200,					// current level total
	levelprogress:25, 				// percentage %
	totalprogress:34, 				// percentage %
	levelup: false,					// did we level up?
	totallevels:10
}
```
levelup.js comes with 10 levels as default These can easily be replaced with custom levels in the setup below.

## Advanced setup

```
var levelup = new LevelUp(
	{
		persistant:true				// uses localStorage -  default: true
		callback:function(){...}	// callback when levelling up
		levels: 					// custom levels
		[							
			{
				"checkmark": 0,
				"status": "noob",
				"quote": "You're just a little newbie"
			}, 
			{
				"checkmark": 500,
				"status": "champion",
				"quote": "You're halfway there"
			}, 
			{
				"checkmark": 1000,
				"status": "legend",
				"quote": "You made it!"
			}
		]
	}
);
```