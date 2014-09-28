# score.js

A small javascript module to add levels, checkpoints and badges to a linear score. 

See the [demo](http://mulhoon.github.io/score.js/) or read an [introduction](https://medium.com/@mulhoon/easy-gamification-in-javascript-with-levelup-js-8ff3b67e7706)

## Quick usage
```javascript
var score = new Score();

// set score
score.set(123);

// increase score by 1
score.increment();

// increase score by 10
score.increment(10);

// decrease score by 1
score.decrement();

// get scorecard
score.scorecard();
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
score.js comes with 10 levels as default. These can be replaced with custom levels using the advanced setup below.

## Advanced setup


```javascript
var score = new Score(
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

## Bonus feature - multiplier

```javascript
// multiply all increments and decrements by 2 from now on
score.multipler(2);

// multiply all increments and decrements by 3 for the next 5 seconds
score.multipler(3, 5000);

// multiply all increments and decrements by 4 for the next 5 seconds 
// with a callback
score.multipler(4, 5000, function(){ ... });
```

Written by Mulhoon 2014.
Please report any [issues](https://github.com/mulhoon/score.js/issues)