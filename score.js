/*! score.js ~ (c) 2014 Nic Mulvaney */

(function(){
	var _settings,
	_scorecard, 
	_timer,
	_defaults;

	var Score = function(settings){
		_settings = this._merge(_defaults, settings || {});
		this.set(this._get());
	};

	Score.prototype = {
			version: '0.0.5',

			set: function(score){

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
				return this;
			},
			increment: function(value){
				this.set(_scorecard.score + ((value || 1)*_settings.multiplier));
				return this;
			},
			decrement: function(value){
				this.set(_scorecard.score - ((value || 1)*_settings.multiplier));
				return this;
			},
			multiplier: function(value, time, callback){
				_settings.multiplier = value;
				if(time){
					clearTimeout(_timer);
					_timer = setTimeout(function(){
						_settings.multiplier = 1;
						if(callback){callback();}
					},time);
				}
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
				return _settings.persistant ? localStorage.setItem("nmscore", _scorecard.score) : false;
			},
			_get: function(){
				return _settings.persistant ? parseFloat(localStorage.getItem("nmscore")) || 0 : 0;
			}
	};

	_defaults = {
		level:0,
		score:0,
		multiplier:1,
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

	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = Score;
	} else {
		window.Score = Score;
	}

})();