/**
 * CLICK
 */
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
 * Methods
 */

/**
 * Reponsive desing
 */

function responsiveRefresh(){
    if ($(window).width() < 580) { 
        //Mobile



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
