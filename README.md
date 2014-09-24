# levelup.js

**levelup.js** is a small (2kb) javascript module to manage player progress across gaming levels. http://mulhoon.github.io/levelup.js/

[WORK IN PROGRESS]

## Quick usage
```
var levelup = new LevelUp();
levelup.score(123);

var scorecard = levelup.get();
```
scorecard returns...
```
{
	score:123						// current total score
	title:"Soldier",				// current title
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
levelup.js comes with 10 levels as default, each 100 points apart. These can easily be replaced with custom levels in the setup below.

## Setup

```
var scorecard = new LevelUp(
	{
		persistant:boolean			// uses localStorage
		levels:{}					// custom levels
		callback:function(){...}	// trigger when levelling up
	}
);

```

## Example
Check out the demo http://mulhoon.github.io/levelup.js/