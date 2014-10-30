 module.exports = function(grunt) {

         // Project configuration.
         grunt.initConfig({
             pkg: grunt.file.readJSON('package.json'),
             sass: {                              // Task
                dist: {                            // Target
                  options: {                       // Target options
                    style: 'expanded'
                  },
                  files: {                         // Dictionary of files
                    'css/main.css': 'css/main.scss'
                  }
                }
              },
              watch: {
                css: {
                  files: '**/*.scss',
                  tasks: ['sass'],
                  options: {
                    livereload: true
                  }
                }
              },
              autoprefixer: {
                  options: {
                    browsers: ['last 2 versions', 'ios7','i0S', 'ie 8', 'ie 9']
                  },
                  your_target: {
                   // What goes here?
                  },
                },
                uglify: {
                   my_target: {
                     files: {
                       // 'dest/output.min.js': ['src/input1.js', 'src/input2.js']
                     }
                   }
                 }

         });

         grunt.loadNpmTasks('grunt-contrib-sass');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-autoprefixer');
         grunt.loadNpmTasks('grunt-contrib-uglify');

         // Default task(s).
         grunt.registerTask('default', ['sass','watch','autoprefixer','uglify']);

 };