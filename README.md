# score.js

A small javascript module to add levels, checkpoints and badges to a linear score. 

See the [demo](http://mulhoon.github.io/score.js/) or read an [introduction](https://medium.com/@mulhoon/easy-gamification-in-javascript-with-levelup-js-8ff3b67e7706)

[<img src='http://img.shields.io/badge/Download-4.17kb-green.svg' />](https://raw.githubusercontent.com/mulhoon/score.js/master/lib/score.js)
[<img src='http://img.shields.io/badge/Download%20Minified-2.4kb-green.svg' />](https://raw.githubusercontent.com/mulhoon/score.js/master/lib/score.min.js)

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
	prestige:0 						// prestige level see below
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

## Multipliers
Handy when you want to give your user double or triple points for a given duration.

```javascript
// multiply all increments and decrements by 2 from now on
score.multipler(2);

// multiply all increments and decrements by 3 for the next 5 seconds
score.multipler(3, 5000);

// multiply all increments and decrements by 4 for the next 5 seconds 
// with a callback
score.multipler(4, 5000, function(){ ... });
```

## Prestige levels
To provide an infinite score, you can allow your players to reset their score after completing all levels. 

```javascript
score.prestige();
```
This resets the score to ```0``` and increments ```scorecard.prestige```. This only works if ```scorecard.totalprogress``` is 100%.

## License

The MIT License

Copyright (c) 2010-2014 Nic Mulvaney

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Written by Mulhoon 2014.
Please report any [issues](https://github.com/mulhoon/score.js/issues) or suggestions.