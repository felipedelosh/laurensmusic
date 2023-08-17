/**
 * CLICK
 */
//INTERNAL LINKS



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
/**
 * hover
 */
$( ".main_nav_click_element" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("color", "white");
}).mouseleave(function() {  
    $(this).css("color", "black");
});

$( ".ico-footer-link" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
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
    if ($(window).width() < 580) { 
        //Mobile
        $('.main_nav').css("display", "none");

        $('.text_footer').removeClass("col-6");
        $('.footer_links').removeClass("col-6");
        $('.ul_footer_links').removeClass("justify-content-end");
        $('.text_footer').addClass("col-12");
        $('.text_footer').addClass("col-12");
        $('.laurens_footer_text').addClass("text-center");
        $('.ul_footer_links').addClass("justify-content-center");
        //Mobile
    }else if($(window).width() >= 580 && $(window).width() <= 982){
        //Tablet


        $('.main_nav').css("display", "block");
        
        $('.text_footer').addClass("col-6");
        $('.footer_links').addClass("col-6");
        $('.text_footer').removeClass("col-12");
        $('.text_footer').removeClass("col-12");
        $('.laurens_footer_text').removeClass("text-center");
        $('.ul_footer_links').removeClass("justify-content-center");
        $('.ul_footer_links').addClass("justify-content-end");
        //Table
    }else if($(window).width() > 982){
        //Desktop

        $('.main_nav').css("display", "block");

        $('.text_footer').addClass("col-6");
        $('.footer_links').addClass("col-6");
        $('.text_footer').removeClass("col-12");
        $('.text_footer').removeClass("col-12");
        $('.laurens_footer_text').removeClass("text-center");
        $('.ul_footer_links').removeClass("justify-content-center");
        $('.ul_footer_links').addClass("justify-content-end");
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
