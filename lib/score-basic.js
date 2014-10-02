/*! score.js ~ (c) 2014 Nic Mulvaney */
/* 2014-10-02 */

(function(){
	var _settings,
	_scorecard, 
	_timer;

	var Score = function(settings){
		_settings = this._merge(this._defaults, settings || {});
		this.set(this._get().score);
	};

	Score.prototype = {
			version: '0.0.7',

			set: function(obj){

				// Do we have settings?
				if(!Object.keys(_settings).length){throw "No default settings found";}

				// Check if obj is a score or scorecard
				var score = 
				obj !== undefined ? 
				((typeof obj === 'number' || typeof obj === 'string') ? obj
					: (typeof obj === 'object' ? ('score' in obj ? obj.score : 0) : 0)) 
				: 0;

				score = parseFloat(score);

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
					totallevels:_settings.levels.length,
					prestige:_scorecard.prestige || 0
				}, current);
				if(levelup){
					this._callback(_settings.callback, _scorecard);
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
						this._callback(callback);
					},time);
				}
				return this;
			},
			prestige: function(){
				if(_scorecard.totalprogress>=100){
					_scorecard.prestige++;
					this.set(0);
				}
				return this;
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
			_callback: function(c, data){
				if(c){
					c(data);
				}
			},
			_save: function(){
				return _settings.persistant ? localStorage.setItem("sjsscore", JSON.stringify(_scorecard)) : false;
			},
			_get: function(){
				var d = {score:0, prestige:0};
				_scorecard = _settings.persistant ? JSON.parse(localStorage.getItem("sjsscore")) || d : d;
				return _scorecard;
			},
			_defaults: {}
	};
	


	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = Score;
	} else {
		window.Score = Score;
	}

})();
