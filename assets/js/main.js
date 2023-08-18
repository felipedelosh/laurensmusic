/**
 * CLICK
 */
//INTERNAL LINKS
$( ".btn-go-top" ).on( "click", function() {
    $("html, body").animate({scrollTop: 0}, 400);
});


//EXTERNAL LINKS
$( ".go-song-chula" ).on( "click", function() {
    openNewTab("https://www.youtube.com/watch?v=y2bdiRUnsz0");
});

$( ".go-song-futbolin" ).on( "click", function() {
    openNewTab("https://www.youtube.com/watch?v=KWGtd2zodQ4");
});

$( ".go-youtube" ).on( "click", function() {
    openNewTab("https://www.youtube.com/channel/UCV87mEQ7dWl_lsTy11dYH_A");
});

$( ".go-spotify" ).on( "click", function() {
    openNewTab("https://open.spotify.com/intl-es/artist/5JyRHckUXvb8WRG8BGFWXk");
});

$( ".go-instagram" ).on( "click", function() {
    openNewTab("https://www.instagram.com/1laurensmusic1/");
});

$( ".go-facebook" ).on( "click", function() {
    openNewTab("https://web.facebook.com/profile.php?id=100081984716795&paipv=0&eav=AfZK8JEPmLthkPluSAvgZ_QEyxBiQMUwppxaphQ-dRbuzEgEhTzFeAqoCUtxKwAW2hI");
});

/**
 * MEDIAQUERY
 */
$(window).resize(function(){
    responsiveRefresh();
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 120) {
        $('.btn-go-top').css("display", "block");
    } else {
        $('.btn-go-top').css("display", "none");
    }
});


/**
 * hover
 */
$( ".main_nav_click_element" ).hover(function() {
    $(this).css("color", "white");
}).mouseleave(function() {  
    $(this).css("color", "black");
});


$( ".ico-footer-link-youtube" ).hover(function() {
    $(this).css("color", "#e74c3c");
}).mouseleave(function() {  
    $(this).css("color", "black");
});

$( ".ico-footer-link-spotify" ).hover(function() {
    $(this).css("color", "#e74c3c");
}).mouseleave(function() {  
    $(this).css("color", "black");
});

$( ".ico-footer-link-instagram" ).hover(function() {
    $(this).css("color", "#e74c3c");
}).mouseleave(function() {  
    $(this).css("color", "black");
});

$( ".ico-footer-link-facebook" ).hover(function() {
    $(this).css("color", "#e74c3c");
}).mouseleave(function() {  
    $(this).css("color", "black");
});



/**
 * Methods
 */

/**
 * Reponsive desing
 */
function responsiveRefresh(){
    //To resize
    if ($(window).width() < 580) { 
        //Mobile
        $('.main_nav').css("display", "none");

        $('.about-me').removeClass("col-8");
        $('.about-me-events').removeClass("col-4");
        $('.about-me').addClass("col-12");
        $('.about-me-events').addClass("col-12");

        $('.text_footer').removeClass("col-6");
        $('.footer_links').removeClass("col-6");
        $('.ul_footer_links').removeClass("justify-content-end");
        $('.text_footer').addClass("col-12");
        $('.text_footer').addClass("col-12");
        $('.laurens_footer_text').addClass("text-center");
        $('.ul_footer_links').addClass("justify-content-center");
        $('.btn-go-top').css("display", "none");
        //Mobile
    }else if($(window).width() >= 580 && $(window).width() <= 982){
        //Tablet
        $('.main_nav').css("display", "block");
        
        $('.about-me').removeClass("col-12");
        $('.about-me-events').removeClass("col-12");
        $('.about-me').addClass("col-8");
        $('.about-me-events').addClass("col-4");

        $('.text_footer').addClass("col-6");
        $('.footer_links').addClass("col-6");
        $('.text_footer').removeClass("col-12");
        $('.text_footer').removeClass("col-12");
        $('.laurens_footer_text').removeClass("text-center");
        $('.ul_footer_links').removeClass("justify-content-center");
        $('.ul_footer_links').addClass("justify-content-end");
        if($(this).scrollTop() >= 120){
            $('.btn-go-top').css("display", "block");
        }
        //Table
    }else if($(window).width() > 982){
        //Desktop
        $('.main_nav').css("display", "block");

        $('.about-me').removeClass("col-12");
        $('.about-me-events').removeClass("col-12");
        $('.about-me').addClass("col-8");
        $('.about-me-events').addClass("col-4");

        $('.text_footer').addClass("col-6");
        $('.footer_links').addClass("col-6");
        $('.text_footer').removeClass("col-12");
        $('.text_footer').removeClass("col-12");
        $('.laurens_footer_text').removeClass("text-center");
        $('.ul_footer_links').removeClass("justify-content-center");
        $('.ul_footer_links').addClass("justify-content-end");
        if($(this).scrollTop() >= 120){
            $('.btn-go-top').css("display", "block");
        }
        //Desktop
    }

}

/**
 * Enter a URL and open in new tab
 * @param {*} url 
 */

function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function openLocalTab(url){
    var win = window.open(url, '_self');
    win.focus();
}

function openHTML(url){
    window.open(url, "_self");
}

responsiveRefresh();
