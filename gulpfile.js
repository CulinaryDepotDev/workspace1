var gulp = require('gulp'),
    nodemon = require('nodemon');

gulp.task('runNodemon', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            port: 8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    })
})

