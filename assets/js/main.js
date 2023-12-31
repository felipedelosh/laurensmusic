/**
 * CLICK
 */
//INTERNAL LINKS
$( ".btn-go-top" ).on( "click", function() {
    $("html, body").animate({scrollTop: 0}, 400);
});

$( ".btn-show-home" ).on( "click", function() {
    showHomeSection();
});

$( ".btn-show-about" ).on( "click", function() {
    showAboutSection();
});

$( ".btn-show-gallery" ).on( "click", function() {
    showGallerySection();
});

$( ".btn-show-blog" ).on( "click", function() {
    showBlogSection();
});

$( ".btn-show-contact" ).on( "click", function() {
    showContactSection();
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
    updateColorCurrentPageMenu();
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
    _calculateMediaPlayerToMovileDevices();
    //To resize
    if ($(window).width() < 580) { 
        //Mobile
        $('.main_nav').css("display", "none");
        $('.mobile_main_nav').css("display", "flex");

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
        
        $('.gallery_element').removeClass("col-4");
        $('.gallery_element').addClass("col-12");

        $('.blog_section_blog').removeClass("col-8");
        $('.blog_section_navigation').removeClass("col-4");
        $('.blog_section_blog').addClass("col-12");
        $('.blog_section_navigation').addClass("col-12");

        $('.bi-person-fill-add').css("float", "none");
        $('.bi-person-fill-add').css("margin-right", "none");
        $('.part_legend_add_friend').removeClass("col-10");
        $('.part_btn_enter_fan_club').removeClass("col-2");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");

        $('.contact_links').removeClass("col-4");
        $('.contact_from').removeClass("col-8");
        $('.contact_links').addClass("col-12");
        $('.contact_from').addClass("col-12");
        $('.container_form_inputs').removeClass("row");
        $('.contact_from_input_container').removeClass("col");

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
        $('.mobile_main_nav').css("display", "none");

        
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

        $('.gallery_element').removeClass("col-4");
        $('.gallery_element').addClass("col-12");

        $('.blog_section_blog').removeClass("col-8");
        $('.blog_section_navigation').removeClass("col-4");
        $('.blog_section_blog').addClass("col-12");
        $('.blog_section_navigation').addClass("col-12");

        $('.bi-person-fill-add').css("float", "none");
        $('.bi-person-fill-add').css("margin-right", "none");
        $('.part_legend_add_friend').removeClass("col-10");
        $('.part_btn_enter_fan_club').removeClass("col-2");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");
        $('.part_legend_add_friend').addClass("col-12");
        $('.part_btn_enter_fan_club').addClass("col-12");

        $('.contact_links').addClass("col-4");
        $('.contact_from').addClass("col-8");
        $('.container_form_inputs').addClass("row");
        $('.contact_from_input_container').addClass("col");
        $('.contact_links').removeClass("col-12");
        $('.contact_from').removeClass("col-12");
	    $('.contact_from_input_container').css("margin-top", "none");

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
        $('.mobile_main_nav').css("display", "none");

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

        $('.gallery_element').removeClass("col-12");
        $('.gallery_element').addClass("col-4");
    
        $('.blog_section_blog').removeClass("col-12");
        $('.blog_section_navigation').removeClass("col-12");
        $('.blog_section_blog').addClass("col-8");
        $('.blog_section_navigation').addClass("col-4");

        $('.bi-person-fill-add').css("float", "left");  
        $('.part_legend_add_friend').removeClass("col-12");
        $('.part_btn_enter_fan_club').removeClass("col-12");
        $('.part_legend_add_friend').removeClass("col-12");
        $('.part_btn_enter_fan_club').removeClass("col-12");
        $('.part_legend_add_friend').addClass("col-10");
        $('.part_btn_enter_fan_club').addClass("col-2");
        $('.bi-person-fill-add').css("margin-right", "2%");

        $('.contact_links').addClass("col-4");
        $('.contact_from').addClass("col-8");
        $('.container_form_inputs').addClass("row");
        $('.contact_from_input_container').addClass("col");
        $('.contact_links').removeClass("col-12");
        $('.contact_from').removeClass("col-12");
	    $('.contact_from_input_container').css("margin-top", "none");

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


function _calculateMediaPlayerToMovileDevices(){
    //Iphone 12/13
    var _w = $(window).width();
    var _h = $(window).height();
    var iphoneMiniH = _w >= 360 && _w <= 399 && _h >= 800 && _h <= 850;
    var iphoneProH = _w >= 400 && _w <= 450 && _h >= 900 && _h <= 999;
    var iphone5SEH = _w >= 300 && _w <= 340 && _h >= 550 && _h <= 600;
    var iphone678PlUSH = _w >= 380 && _w <= 440 && _h >= 710 && _h <= 750;
    var iphoneXH = _w >= 365 && _w <= 398 && _h >= 800 && _h <= 899;
    var iphoneXRH = _w >= 400 && _w <= 420 && _h >= 880 && _h <= 910;
    var iphoneSEH = _w >= 350 && _w <= 385 && _h >= 650 && _h <= 700;
    var kindleH = _w >= 780 && _w <= 820 && _h >= 1260 && _h <= 1300;
    var androidBasicH = _w >= 580 && _w <= 620 && _h >= 940 && _h <= 980;  
    var androidPixelH = _w >= 400 && _w <= 420 && _h >= 800 && _h <= 840;    
    var notDisplayH = _w < 280 && _h <= 340;

    $('.text_lengend_in_banner').css("display", "block");
    $('.music_in_banner').css("display", "block");
    if(iphoneMiniH){
        $('.text_lengend_in_banner').css("top", "20%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "42%");
        $('.music_in_banner').css("top", "26%");    
    }else if(iphoneProH){
        $('.text_lengend_in_banner').css("top", "20%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "42%");
        $('.music_in_banner').css("top", "26%");
    }else if(iphone5SEH){
        $('.text_lengend_in_banner').css("top", "24%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "46%");
        $('.music_in_banner').css("top", "30%");
    }else if(iphone678PlUSH){
        $('.text_lengend_in_banner').css("top", "24%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "46%");
        $('.music_in_banner').css("top", "30%");
    }else if(iphoneXH){
        $('.text_lengend_in_banner').css("top", "18%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "42%");
        $('.music_in_banner').css("top", "24%");
    }else if(iphoneXRH){
        $('.text_lengend_in_banner').css("top", "18%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "42%");
        $('.music_in_banner').css("top", "22%");
    }else if(iphoneSEH){
        $('.text_lengend_in_banner').css("top", "20%");
        $('.text_lengend_in_banner').css("left", "26%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "42%");
        $('.music_in_banner').css("top", "26%");
    }else if(kindleH){
        $('.text_lengend_in_banner').css("top", "20%");
        $('.text_lengend_in_banner').css("left", "18%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "22%");
        $('.music_in_banner').css("top", "26%");
    }else if(androidBasicH){;
        $('.text_lengend_in_banner').css("top", "22%");
        $('.text_lengend_in_banner').css("left", "18%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "28%");
        $('.music_in_banner').css("top", "26%");
    }else if(androidPixelH){
        $('.text_lengend_in_banner').css("top", "22%");
        $('.text_lengend_in_banner').css("left", "20%");
        $('.text_banner_img').removeClass("display-2");
        $('.text_banner_img').removeClass("display-6");
        $('.text_banner_img').addClass("display-8");
        $('.music_in_banner').css("left", "40%");
        $('.music_in_banner').css("top", "26%");
    }else if(notDisplayH){
        $('.text_lengend_in_banner').css("display", "none");
        $('.music_in_banner').css("display", "none");
    }else{
        //calculate from desktop or table
        if(_w < 580){ // Mobile default
            $('.text_lengend_in_banner').css("top", "26%");
            $('.text_lengend_in_banner').css("left", "26%");
            $('.text_banner_img').removeClass("display-2");
            $('.text_banner_img').removeClass("display-6");
            $('.text_banner_img').addClass("display-8");
            $('.music_in_banner').css("left", "38%");
            $('.music_in_banner').css("top", "36%");
        }else if(_w >= 580 && _w <= 982){ //Tablet default
            $('.text_lengend_in_banner').css("top", "46%");
            $('.text_lengend_in_banner').css("left", "26%");
            $('.text_banner_img').removeClass("display-8");
            $('.text_banner_img').removeClass("display-2");
            $('.text_banner_img').addClass("display-6");
            $('.music_in_banner').css("left", "26%");
            $('.music_in_banner').css("top", "56%");
        }else if(_w > 982){ // Desktop default
            $('.text_lengend_in_banner').css("top", "60%");
            $('.text_lengend_in_banner').css("left", "30%");
            $('.text_banner_img').removeClass("display-6");
            $('.text_banner_img').addClass("display-2");
            $('.music_in_banner').css("left", "20%");
            $('.music_in_banner').css("top", "70%");
        }
    }
}


function hideALLSections(){
    //PUT Buttons off
    $('.main_nav_click_element').css("color", "black");
    $('.banner_img').css("display", "none");
    $('.article').css("display", "none");
    $('.about_my_bio').css("display", "none");
    $('.gallery_box').css("display", "none");
    $('.blog_section').css("display", "none");
    $('.contact_me').css("display", "none");
}


/***
 * 
btn-show-home
btn-show-about
btn-show-gallery
btn-show-blog
btn-show-contact
*/
function showHomeSection(){
    hideALLSections();
    $('.banner_img').css("display", "block");
    $('.article').css("display", "block");
    $('.btn-show-home').css("color", "white");
    localStorage.setItem('current_view', "HOME");
}

function showAboutSection(){
    hideALLSections();
    $('.about_my_bio').css("display", "block");
    localStorage.setItem('current_view', "ABOUT");
    updateColorCurrentPageMenu();
}

function showGallerySection(){
    hideALLSections();
    $('.gallery_box').css("display", "block");
    localStorage.setItem('current_view', "GALLERY");
    updateColorCurrentPageMenu();
}

function showBlogSection(){
    hideALLSections();
    $('.blog_section').css("display", "block");
    localStorage.setItem('current_view', "BLOG");
    updateColorCurrentPageMenu();
}

function showContactSection(){
    hideALLSections();
    $('.contact_me').css("display", "block");
    localStorage.setItem('current_view', "CONTACT");
    updateColorCurrentPageMenu();
}

function updateColorCurrentPageMenu(){
    if(localStorage.getItem('current_view') !== null){
        if(localStorage.getItem('current_view') === "HOME"){
            $('.btn-show-home').css("color", "white");
        }else if(localStorage.getItem('current_view') === "ABOUT"){
            $('.btn-show-about').css("color", "white");
        }else if(localStorage.getItem('current_view') === "GALLERY"){
            $('.btn-show-gallery').css("color", "white");
        }else if(localStorage.getItem('current_view') === "BLOG"){
            $('.btn-show-blog').css("color", "white");
        }else if(localStorage.getItem('current_view') === "CONTACT"){
            $('.btn-show-contact').css("color", "white");
        }
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
showHomeSection();
