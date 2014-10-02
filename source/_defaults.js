Score.prototype._defaults = {
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