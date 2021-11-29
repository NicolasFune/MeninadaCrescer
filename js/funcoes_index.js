prevSlide.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 100
    if(leftPositionSlide > 0){
        leftPositionSlide = -200
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -100:
            dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_02.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
        case -200:
            dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_03.style.backgroundColor = 'rgb(80, 80, 80)'
            break;
        default:
            dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
    }
    
})
nextSlide.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 100
    if(leftPositionSlide < -200){
        leftPositionSlide = 0
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -100:
            dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_02.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
        case -200:
            dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_03.style.backgroundColor = 'rgb(80, 80, 80)'
            break;
        default:
            dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
    }
    
})

dot_01.addEventListener('click',function SelecionarSlide01() {
    dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
    dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
    dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02.addEventListener('click',function SelecionarSlide02() {
    dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
    dot_02.style.backgroundColor = 'rgb(80, 80, 80)'
    dot_03.style.backgroundColor = 'rgb(255, 255, 255)'
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-100vw'
        index = index + 1
    })
    index=0
})
dot_03.addEventListener('click',function SelecionarSlide02() {
    dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
    dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
    dot_03.style.backgroundColor = 'rgb(80, 80, 80)'
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-200vw'
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
        index = index + 1
    })
    index=0
    $('.mascara').css('background-color', 'rgba(0,0,0,0.7)');
    isVisible = true
}
let TornarControlesInvisiveis = function(){
    for(let i=0;i<carrosel_controls.length;i++){
        carrosel_controls[i].style.opacity = "0"
    }
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.animation = 'slide_img 7s infinite ease-in'
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

$('#inicio').mouseover(function () { 
    $('#inicio').css('border-bottom', 'solid 3px white');
});
$('#inicio').mouseout(function () { 
    $('#inicio').css('border-bottom', 'solid 3px #dec223');
});

$('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.nav').toggleClass('mobile_nav');
    $('.ul_pags').toggleClass('mobile_ul_pags');
    $('.menu_li').toggleClass('mobile_menu_li');
    $('.ul_social').toggleClass('mobile_ul_social');
    $('.li_social').toggleClass('mobile_li_social');
    $('.bi-list').toggleClass('bi-x-lg');
});



window.addEventListener('resize',function (param) {
    if(window.innerWidth < 1080){
        $('#img_01').attr('src', 'img/Stories SONHOS.png');
        $('#img_02').attr('src', 'img/Stories PLANETA.png');
        $('#img_03').attr('src', 'img/Stories PAC.png');
    }
    $('.sec_carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
    $('.carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
    $('.mascara').css('height',document.querySelector('.img__carrosel').clientHeight);
})

if(window.innerWidth < 1080){
    $('#img_01').attr('src', 'img/Stories SONHOS.png');
    $('#img_02').attr('src', 'img/Stories PLANETA.png');
    $('#img_03').attr('src', 'img/Stories PAC.png');
}
img_carrosel_height = $('.img__carrosel').css('height');
    $('.sec_carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
    $('.carrosel').css('height',document.querySelector('.img__carrosel').clientHeight);
    $('.mascara').css('height',document.querySelector('.img__carrosel').clientHeight);
    