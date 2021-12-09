
prevSlide.addEventListener('click',function VoltarSlide(){
    leftPositionSlide = leftPositionSlide + 100
    if(leftPositionSlide > 0){
        leftPositionSlide = -400
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide)
    
})
nextSlide.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 100
    if(leftPositionSlide < -400){
        leftPositionSlide = 0
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide)
})

function SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide){
    switch (leftPositionSlide) {
        case -100:
            dot_01.style.transform = 'scale(1.0)'
            dot_02.style.transform = 'scale(2.0)'
            dot_03.style.transform = 'scale(1.0)'
            dot_04.style.transform = 'scale(1.0)'
            dot_05.style.transform = 'scale(1.0)'
            break;
        case -200:
            dot_01.style.transform = 'scale(1.0)'
            dot_02.style.transform = 'scale(1.0)'
            dot_03.style.transform = 'scale(2.0)'
            dot_04.style.transform = 'scale(1.0)'
            dot_05.style.transform = 'scale(1.0)'
            break;
        case -300:
            dot_01.style.transform = 'scale(1.0)'
            dot_02.style.transform = 'scale(1.0)'
            dot_03.style.transform = 'scale(1.0)'
            dot_04.style.transform = 'scale(2.0)'
            dot_05.style.transform = 'scale(1.0)'
            break;
        case -400:
            dot_01.style.transform = 'scale(1.0)'
            dot_02.style.transform = 'scale(1.0)'
            dot_03.style.transform = 'scale(1.0)'
            dot_04.style.transform = 'scale(1.0)'
            dot_05.style.transform = 'scale(2.0)'
            break;
        default:
            dot_01.style.transform = 'scale(2.0)'
            dot_02.style.transform = 'scale(1.0)'
            dot_03.style.transform = 'scale(1.0)'
            dot_04.style.transform = 'scale(1.0)'
            dot_05.style.transform = 'scale(1.0)'
            break
    }
}

dot_01.addEventListener('click',function SelecionarSlide01() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(0)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02.addEventListener('click',function SelecionarSlide02() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-100)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-100vw'
        index = index + 1
    })
    index=0
})
dot_03.addEventListener('click',function SelecionarSlide03() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-200)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-200vw'
        index = index + 1
    })
    index=0
})
dot_04.addEventListener('click',function SelecionarSlide04() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-300)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-300vw'
        index = index + 1
    })
    index=0
})
dot_05.addEventListener('click',function SelecionarSlide05() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-400)
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-400vw'
        index = index + 1
    })
    index=0
})
let isVisible
let TornarControlesVisiveis = function(){
    for(let i=0;i<carrosel_controls.length;i++){
        carrosel_controls[i].style.opacity = "1"
    }

    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.animation = 'none'
        slides.item(index).left = '0vw'
        // slides.item(index).style.animationPlayState = 'paused'

        index = index + 1
    })
    index=0
    isVisible = true
}
let TornarControlesInvisiveis = function(){
    for(let i=0;i<carrosel_controls.length;i++){
        carrosel_controls[i].style.opacity = "0"
    }


    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.animation = 'slide_img 25s infinite ease-in'
        // slides.item(index).style.animationPlayState = 'running'

        index = index + 1
    })
    index=0


    $('.mascara').css('background-color', 'rgba(0,0,0,0.0)');
    isVisible = false
}




if(window.innerWidth > 1080){
    $('.mascara').mouseover(function () { 
        TornarControlesVisiveis()
    });
    $('.mascara').mouseout(function () { 
        TornarControlesInvisiveis()
    });
}


//Define que ao clicar no slide ele executa um toggle da visibilidade dos controles
$('.mouse__interaction__area').click(function (e) { 
    e.preventDefault();
    if(isVisible){
        TornarControlesInvisiveis()
    }else{
        TornarControlesVisiveis()
    }
}).children().click(function(e) {
    return false
 })


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


//Define Qual banner vai carregar e corrigi o tamanho da section para o tamanho do banner no EVENTO RESIZE
window.addEventListener('resize',function (param) {
    if(window.innerWidth < 1080){
        $('#img_01').attr('src', 'img/Stories SONHOS.webp');
        $('#img_02').attr('src', 'img/Stories PLANETA.webp');
        $('#img_03').attr('src', 'img/Stories FUTURO.webp');
        $('#img_04').attr('src', 'img/Stories VALORES.webp');
        $('#img_05').attr('src', 'img/Stories PAC.webp');
    }else{
        $('#img_01').attr('src', 'img/SONHOS.webp');
        $('#img_02').attr('src', 'img/PLANETA.webp');
        $('#img_03').attr('src', 'img/FUTURO.webp');
        $('#img_04').attr('src', 'img/VALORES.webp');
        $('#img_05').attr('src', 'img/PAC.webp');
    }
    $('.sec_carrosel').css('height',document.querySelector('.container__img').clientHeight);
    $('.carrosel').css('height',document.querySelector('.container__img').clientHeight);
    $('.mascara').css('height',document.querySelector('.container__img').clientHeight);
})

//Define Qual banner vai carregar e corrigi o tamanho da section para o tamanho do banner no EVENTO LOAD
if(window.innerWidth < 1080){
    $('#img_01').attr('src', 'img/Stories SONHOS.webp');
    $('#img_02').attr('src', 'img/Stories PLANETA.webp');
    $('#img_03').attr('src', 'img/Stories FUTURO.webp');
    $('#img_04').attr('src', 'img/Stories VALORES.webp');
    $('#img_05').attr('src', 'img/Stories PAC.webp');
}else{
    $('#img_01').attr('src', 'img/SONHOS.webp');
    $('#img_02').attr('src', 'img/PLANETA.webp');
    $('#img_03').attr('src', 'img/FUTURO.webp');
    $('#img_04').attr('src', 'img/VALORES.webp');
    $('#img_05').attr('src', 'img/PAC.webp');
}
$('.sec_carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
$('.carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
$('.mascara').css('height',document.querySelector('.img__carrosel').clientHeight);
    