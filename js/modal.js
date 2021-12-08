

$('.fechar-modal').click(function (e) { 
    e.preventDefault();
    $('.visible').toggleClass('invisible');
});
$('.call-saiba-mais').mouseover(function () { 
    $('.call-saiba-mais').css('transform', 'scale(1.05)');
    $('.container-modal-call-interno').css('background', '#fae32c');
    $('.call-whatapp').css('color', 'black');
});
$('.call-saiba-mais').mouseout(function () { 
    $('.call-saiba-mais').css('transform', '');
    $('.container-modal-call-interno').css('background', '#1a519a');
    $('.call-whatapp').css('color', 'white');
});