/*! levelup.js ~ (c) 2014 Nic Mulvaney */

(function(){
	var _settings,
	_scorecard, 
	_defaults = {
		level:0,
		score:0,
		persistant: true,
		levels:[
			{
				"checkmark": 0,
				"status":"turtle",
				"quote":"You're just a little newbie"
			},
			{
				"checkmark": 50,
				"status":"sheep",
				"quote":"You're certainly not following the herd"
			},
			{
				"checkmark": 150,
				"status":"pig",
				"quote":"Oh my god, smokey bacon!"
			},
			{
				"checkmark": 300,
				"status":"rabbit",
				"quote":"Ok, I'll admit you're a speed deamon"
			},
			{
				"checkmark": 600,
				"status":"cat",
				"quote":"Your powers are strong my friend"
			},
			{
				"checkmark": 1200,
				"status":"octopus",
				"quote":"Your reach is far"
			},
			{
				"checkmark": 2000,
				"status":"bee",
				"quote":"The busiest player i've ever seen"
			},
			{
				"checkmark": 2500,
				"status":"horse",
				"quote":"Oh boy, you're a powerful stallion"
			},
			{
				"checkmark": 3000,
				"status":"gorilla",
				"quote":"You're a true survivor, grrr!"
			},
			{
				"checkmark": 4000,
				"status":"dolphin",
				"quote":"You've arrived! you will be known forever as a Legend"
			}
		],
		callback:function(){}
	};

	var LevelUp = function(settings){
		_settings = this._merge(_defaults, settings || {});
		this.score(this._get());
	};

	LevelUp.prototype = {
			version: '0.0.1',

			score: function(score){

				score = score !== undefined ? score : 0;
				var total = 0, next, current;
				var levelCount = _settings.levels.length;

				for(var level in _settings.levels){
					next = _settings.levels[level];
					if(score < next.checkmark){
						current = _settings.levels[level-1];
						break;
					}else{
						total += next.checkmark;
					}
				}
				if(!current){
					level = levelCount;
					current = _settings.levels[levelCount-1];
				}

				var levelscore = score - current.checkmark;
				var leveltotal = next.checkmark - current.checkmark;

				var levelprogress = (levelscore/leveltotal * 100).toFixed(2);
				levelprogress = isFinite(levelprogress) ? levelprogress : 100;

				var totalprogress = this._restrict(score/_settings.levels[levelCount-1].checkmark *100).toFixed(2);
				var levelup = _settings.level!==level;
				_settings.level = level;

				_scorecard = this._merge({
					score:score,
					level:level,
					levelscore:levelscore,
					levelprogress:levelprogress,
					leveltotal:leveltotal,
					totalprogress:totalprogress,
					levelup:levelup,
					totallevels:_settings.levels.length
				}, current);
				if(levelup){
					_settings.callback(_scorecard);
				}
				this._save();
			},
			increment: function(value){
				this.score(_scorecard.score + (value || 1));
			},
			decrement: function(value){
				this.score(_scorecard.score - (value || 1));
			},
			scorecard: function(){
				return _scorecard;
			},
			_restrict: function(value){
				return Math.max(Math.min(value, 100), 0);
			},
			_merge: function(obj1, obj2){
				for (var key in obj2){ 
					obj1[key] = obj2[key]; 
				}
				return obj1;
			},
			_save: function(){
				return _settings.persistant ? localStorage.setItem("levelupscore", _scorecard.score) : false;
			},
			_get: function(){
				return _settings.persistant ? parseFloat(localStorage.getItem("levelupscore")) || 0 : 0;
			}
	};


	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = LevelUp;
	} else {
		window.LevelUp = LevelUp;
	}

})();