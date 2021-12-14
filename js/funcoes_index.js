

//Define a mudança do menu desktop para menu mobile ao clicar no hamburger
$('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.nav').toggleClass('mobile_nav');
    $('.ul_pags').toggleClass('mobile_ul_pags');
    $('.menu_li').toggleClass('mobile_menu_li');
    $('.ul_social').toggleClass('mobile_ul_social');
    $('.li_social').toggleClass('mobile_li_social');
    $('.bi-list').toggleClass('bi-x-lg');
    if($('.bi-list').hasClass('bi-x-lg')){
        $('body').css('overflow', 'hidden');
    }else{
        $('body').css('overflow', 'visible');
    }
    
});
const ElementosHTML_banners={
    carrosel_controls:document.getElementsByClassName('carrosel_control'),
    carrosel:document.getElementsByClassName('carrosel'),
    slides:document.getElementsByClassName('container__img--li'),
    next_slide: document.getElementsByClassName('nextSlide--button'),
    prev_slide: document.getElementsByClassName('prevSlide--button')
}
const carroselBanners = new Carrosel(5,1,ElementosHTML_banners)
    


