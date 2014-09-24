# levelup.js

**levelup.js** is a small (2kb) javascript module to manage player progress across gaming levels. DEMO: http://mulhoon.github.io/levelup.js/

*This is a work in progress*

## Quick usage
```
var levelup = new LevelUp();

// get score
levelup.score();

// set score
levelup.score(123);
```
score() returns...
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
levelup.js comes with 10 levels as default, each 100 points apart. These can easily be replaced with custom levels in the setup below.

## Setup

```
var scorecard = new LevelUp(
	{
		persistant:boolean			// uses localStorage (TBC)
		levels:{}					// custom levels (more explanation soon)
		callback:function(){...}	// trigger when levelling up
	}
);

```