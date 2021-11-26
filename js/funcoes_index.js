prevSlide.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 100
    if(leftPositionSlide > 0){
        leftPositionSlide = -100
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
            break;
        default:
            dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
    }
})
nextSlide.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 100
    if(leftPositionSlide < -100){
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
            break;
        default:
            dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
            dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
            break;
    }
})

dot_01.addEventListener('click',function SelecionarSlide01() {
    dot_01.style.backgroundColor = 'rgb(80, 80, 80)'
    dot_02.style.backgroundColor = 'rgb(255, 255, 255)'
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02.addEventListener('click',function SelecionarSlide02() {
    dot_01.style.backgroundColor = 'rgb(255, 255, 255)'
    dot_02.style.backgroundColor = 'rgb(80, 80, 80)'
    Array.from(slides).forEach(function name(params) {
        slides.item(index).style.left= '-100vw'
        index = index + 1
    })
    index=0
})
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
}
Array.from(mouse__interaction__areas).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis)
    
})
Array.from(mouse__interaction__areas).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis)
    
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
    if(window.innerWidth < 1024){
        $('#img_01').attr('src', 'img/Stories SONHOS.png');
        $('#img_02').attr('src', 'img/Stories PLANETA.png');
    }
})

if(window.innerWidth < 1024){
    $('#img_01').attr('src', 'img/Stories SONHOS.png');
    $('#img_02').attr('src', 'img/Stories PLANETA.png');

    let img_carrosel_height = $('.img__carrosel').height();
    $('.carrosel').height(img_carrosel_height);
}
