/**
 * CLICK
 */
//INTERNAL LINKS
$( ".btn-go-top" ).on( "click", function() {
    $("html, body").animate({scrollTop: 0}, 400);
});

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
    if($(this).width() >= 580){
        if ($(this).scrollTop() >= 120) {
            $('.btn-go-top').css("display", "block");
        } else {
            $('.btn-go-top').css("display", "none");
        }
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

        $('.text_lengend_in_banner').css("top", "26%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "38%");
        $('.music_in_banner').css("top", "36%");

        $('.about-me').removeClass("col-8");
        $('.about-me-events').removeClass("col-4");
        $('.about-me').addClass("col-12");
        $('.about-me-events').addClass("col-12");

        $('.laurens_img_container_1').removeClass("col-7");
        $('.laurens_text_container_1').removeClass("col-5");
        $('.laurens_img_container_1').addClass("col-12");
        $('.laurens_text_container_1').addClass("col-12");


        $('.part_legend_add_friend').removeClass("col-10");
        $('.part_btn_enter_fan_club').removeClass("col-2");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");

        
        $('.my_bio_section_who_laurens').removeClass("col-4");
        $('.my_bio_section_who_laurens').addClass("col-12");
        $('.my_bio_section_music_laurens').removeClass("col-4");
        $('.my_bio_section_music_laurens').addClass("col-12");
        $('.my_bio_section_photos_laurens').removeClass("col-4");
        $('.my_bio_section_photos_laurens').addClass("col-12");

        $('.bi-person-fill-add').css("float", "none");
        $('.bi-person-fill-add').css("margin-right", "none");
        $('.part_legend_add_friend').removeClass("col-10");
        $('.part_btn_enter_fan_club').removeClass("col-2");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");

        $('.ico_add_friend').css("display", "flex");
        $('.ico_add_friend').css("justify-content", "center");
        $('.ico_add_friend_text_title').css("text-align", "center");
        $('.ico_add_friend_text_description').css("text-align", "center");
        $('.part_btn_enter_fan_club').css("display", "grid");
        $('.part_btn_enter_fan_club').css("justify-content", "center");


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

        $('.text_lengend_in_banner').css("top", "46%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-8");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').addClass("display-6");
        $('.music_in_banner').css("left", "26%");
        $('.music_in_banner').css("top", "56%");
        
        $('.about-me').removeClass("col-12");
        $('.about-me-events').removeClass("col-12");
        $('.about-me').addClass("col-8");
        $('.about-me-events').addClass("col-4");

        $('.laurens_img_container_1').removeClass("col-12");
        $('.laurens_text_container_1').removeClass("col-12");
        $('.laurens_img_container_1').addClass("col-7");
        $('.laurens_text_container_1').addClass("col-5");

        $('.my_bio_section_who_laurens').removeClass("col-4");
        $('.my_bio_section_who_laurens').addClass("col-12");
        $('.my_bio_section_music_laurens').removeClass("col-4");
        $('.my_bio_section_music_laurens').addClass("col-12");
        $('.my_bio_section_photos_laurens').removeClass("col-4");
        $('.my_bio_section_photos_laurens').addClass("col-12");

        $('.bi-person-fill-add').css("float", "none");
        $('.bi-person-fill-add').css("margin-right", "none");
        $('.part_legend_add_friend').removeClass("col-10");
        $('.part_btn_enter_fan_club').removeClass("col-2");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");

        $('.ico_add_friend').css("display", "flex");
        $('.ico_add_friend').css("justify-content", "center");
        $('.ico_add_friend_text_title').css("text-align", "center");
        $('.ico_add_friend_text_description').css("text-align", "center");
        $('.part_btn_enter_fan_club').css("display", "grid");
        $('.part_btn_enter_fan_club').css("justify-content", "center");

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

        $('.text_lengend_in_banner').css("top", "60%");
        $('.text_lengend_in_banner').css("left", "30%");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-2");
        $('.music_in_banner').css("left", "20%");
        $('.music_in_banner').css("top", "70%");

        $('.about-me').removeClass("col-12");
        $('.about-me-events').removeClass("col-12");
        $('.about-me').addClass("col-8");
        $('.about-me-events').addClass("col-4");

        $('.laurens_img_container_1').removeClass("col-12");
        $('.laurens_text_container_1').removeClass("col-12");
        $('.laurens_img_container_1').addClass("col-7");
        $('.laurens_text_container_1').addClass("col-5");

        $('.my_bio_section_who_laurens').removeClass("col-12");
        $('.my_bio_section_music_laurens').removeClass("col-12");
        $('.my_bio_section_photos_laurens').removeClass("col-12");
        $('.my_bio_section_who_laurens').addClass("col-4");
        $('.my_bio_section_music_laurens').addClass("col-4");
        $('.my_bio_section_photos_laurens').addClass("col-4");

        $('.bi-person-fill-add').css("float", "left");  
        $('.part_legend_add_friend').removeClass("col-12");
        $('.part_btn_enter_fan_club').removeClass("col-12");
        $('.part_legend_add_friend').removeClass("col-12");
        $('.part_btn_enter_fan_club').removeClass("col-12");
        $('.part_legend_add_friend').addClass("col-10");
        $('.part_btn_enter_fan_club').addClass("col-2");
        $('.bi-person-fill-add').css("margin-right", "2%");
        $('.ico_add_friend').css("display", "block");
        $('.ico_add_friend').css("justify-content", "normal");
        $('.ico_add_friend_text_title').css("text-align", "start");
        $('.ico_add_friend_text_description').css("text-align", "start");
        $('.part_btn_enter_fan_club').css("display", "block");
        $('.part_btn_enter_fan_club').css("justify-content", "normal");

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


function hideALLSections(){
    $('.banner_img').css("display", "block");
    $('.article').css("display", "block");
    $('.about_my_bio').css("display", "block");
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
hideALLSections();
