$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

$(document).ready(function(){

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8776538878',
        limit: 8,
        resolution: 'standard_resolution',
        accessToken: '8776538878.1677ed0.edd218ef1fc14c40815d0803fb20f607',
        sortBy: 'most-recent',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    });
    userFeed.run();
});
