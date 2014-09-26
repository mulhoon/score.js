# levelup.js

A small javascript module to add levels, checkpoints and badges to a linear score. 

See the [demo](http://mulhoon.github.io/levelup.js/) or read an [introduction](https://medium.com/@mulhoon/easy-gamification-in-javascript-with-levelup-js-8ff3b67e7706)

## Quick usage
```javascript
var levelup = new LevelUp();

// set score
levelup.score(123);

// increase score by 1
levelup.increment();

// increase score by 10
levelup.increment(10);

// decrease score by 1
levelup.decrement();

// get scorecard
levelup.scorecard();
```
scorecard returns...
```javascript
{
	score:123						// current total score
	title:"Gorilla",				// current title
	quote:"You're a true soldier"	// current quote
	level:2,						// current level
	levelscore:23,					// current level score
	leveltotal:200,					// current level total
	levelprogress:11.51, 			// percentage %
	totalprogress:34.45, 			// percentage %
	levelup: false,					// did we just level up?
	totallevels:10 					// total levels
}
```
levelup.js comes with 10 levels as default These can easily be replaced with custom levels in the setup below.

## Advanced setup

```javascript
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
Written by Mulhoon 2014