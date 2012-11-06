// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            all: {
                files: {
                    'assets/css/base.styles.css': 'assets/css/base.styles.less',
                    'build/*.css': 'app/**/*.less'
                },
                options: {
                    yuicompress: true
                }
            }
        },
        mincss: {
            compress: {
                files: {
                    "assets/css/mesh-min.css": [
                        "assets/css/bootstrap.css",
                        "assets/css/base.styles.css",
                        "build/app/**/*.css"
                    ]
                }
            }
        },
        jasmine: {
            index: ['tests/specrunner.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-jasmine-task');

    grunt.registerTask('default', 'less mincss');

};
