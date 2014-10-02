/*
	by Nic Mulvaney
*/



module.exports = function(grunt) {

	// Folder settings
	var SOURCE = "source/";
	var BUILD = "lib/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// JSHint
		jshint: {
			files: [SOURCE+'score.js'],
			options: {
				laxcomma: true,
				boss: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				es3: true,
				browser: true,
				smarttabs: true,
				"-W099": true, // Relax rules on mixed tabs and spaces
				globals: {
					jQuery: true
				}
			}
		},
		// Concatatenated Javascript
		concat: {
			options: {
				process: true
			},
			main: {
				src: [SOURCE+'score.js', SOURCE+'_defaults.js',],
				dest: BUILD+'score.js'
			},
			basic: {
				src: [SOURCE+'score.js'],
				dest: BUILD+'score-basic.js'
			}
		},
		// Minified Javascript
		uglify: {
		  options: {
				banner: '/*! score.js ~ (c) 2014 Nic Mulvaney */\n'+'/*! Compiled @ <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n',
				mangle: true
			},
			main: {
				src: BUILD+'score.js',
				dest: BUILD+'score.min.js'
			},
			basic: {
				src: BUILD+'score-basic.js',
				dest: BUILD+'score-basic.min.js'
			}			
		},
		// Watch files and build when they change
		watch: {
			js: {
				files: [SOURCE+'score.js'],
				tasks: ['build']
			}
		},
		notify_hooks: {
			options: {
				enabled: true,
				max_jshint_notifications: 2, 
				title: "Oops!" 
			}
		}

	});

	// Load grunt different tasks
	require('load-grunt-tasks')(grunt);
	grunt.task.run('notify_hooks');
	
	grunt.registerTask('build', ['jshint', 'concat:main', 'concat:basic', 'uglify:main', 'uglify:basic']);

	// Register grunt tasks
	grunt.registerTask('default', ['build', 'watch:js', 'notify:watch']);


};