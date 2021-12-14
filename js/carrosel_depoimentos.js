
let carrosel_controls_depoimentos = document.getElementsByClassName('carrosel_control_depoimentos')
let carrosel_depoimentos = document.getElementsByClassName('carrosel_depoimentos')
let slides_depoimentos = document.getElementsByClassName('container__depoimentos--li')
let slides_constrols = document.getElementsByClassName('RunAnimation')


let dots_SlideShow02 = $('.dot_SlideShow02')
let dot_01_depoimentos = document.getElementById('dot_01_depoimentos')
let dot_02_depoimentos = document.getElementById('dot_02_depoimentos')
let dot_03_depoimentos = document.getElementById('dot_03_depoimentos')
let dot_04_depoimentos = document.getElementById('dot_04_depoimentos')
let dot_05_depoimentos = document.getElementById('dot_05_depoimentos')

let index = 0
let leftPositionSlide_02 = 0

$('.nextSlide--button_depoimentos').click(function (e) { 
    e.preventDefault();
    leftPositionSlide_02 = leftPositionSlide_02 - 100
    if(leftPositionSlide_02 < (RetornaQuantidadeDeSlidesNaVariável(slides) - 1)*-100){
        leftPositionSlide_02 = 0
    }
    SetaALeftPositionDeTodosOsSlides(slides_depoimentos,leftPositionSlide_02)
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide_02)
});

$('.prevSlide--button_depoimentos').click(function (e) { 
    e.preventDefault();
    leftPositionSlide_02 = leftPositionSlide_02 + 100
    if(leftPositionSlide_02 > 0){
        leftPositionSlide_02 = (RetornaQuantidadeDeSlidesNaVariável(slides_depoimentos) - 1)*-100
    }
    SetaALeftPositionDeTodosOsSlides(slides_depoimentos,leftPositionSlide_02)
    SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide_02)
});



dot_01_depoimentos.addEventListener('click',function SelecionarSlide01() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(0)
    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_02 = 0
})
dot_02_depoimentos.addEventListener('click',function SelecionarSlide02() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-100)
    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.left= '-100vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_02 = -100
})
dot_03_depoimentos.addEventListener('click',function SelecionarSlide03() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-200)
    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.left= '-200vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_02 = -200
})
dot_04_depoimentos.addEventListener('click',function SelecionarSlide04() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-300)
    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.left= '-300vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_02 = -300
})
dot_05_depoimentos.addEventListener('click',function SelecionarSlide05() {
    
    SelecionarDotReferenteAPosiçãoDoSlide(-400)
    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.left= '-400vw'
        index = index + 1
    })
    index=0
    leftPositionSlide_02 = -400
})





let isVisible
let TornarControlesVisiveis = function(){
    for(let i=0;i<carrosel_controls_depoimentos.length;i++){
        carrosel_controls_depoimentos[i].style.opacity = "1"
    }

    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.animation = 'none'
        slides_depoimentos.item(index).left = '0vw'
        // slides.item(index).style.animationPlayState = 'paused'

        index = index + 1
    })
    index=0
    isVisible = true
}
let TornarControlesInvisiveis = function(){
    for(let i=0;i<carrosel_controls_depoimentos.length;i++){
        carrosel_controls_depoimentos[i].style.opacity = "0"
    }


    Array.from(slides_depoimentos).forEach(function name(params) {
        slides_depoimentos.item(index).style.animation = 'slide_img 25s infinite ease-in'
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
    $('.carrosel_depoimentos').css('height',document.querySelector('.container__img').clientHeight);
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
$('.carrosel_depoimentos').css('height',document.querySelector('.img__carrosel').clientHeight);
$('.mascara').css('height',document.querySelector('.img__carrosel').clientHeight);