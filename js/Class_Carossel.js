class Carrosel{
    constructor(NumeroDeSlides,NumeroDeSlidesVisiveisNaTela,ElementosHTML){
        this.NumeroDeSlides = NumeroDeSlides;
        this.NumeroDeSlidesVisiveisNaTela = NumeroDeSlidesVisiveisNaTela;
        this.ElementosHTML = ElementosHTML;
    }
    






    



    function SetaALeftPositionDeTodosOsSlides(SlideReferente,Posição){
        Array.from(SlideReferente).forEach(()=>{
            SlideReferente.item(index).style.left = Posição	+ 'vw'
            index = index+1
        })
        index = 0
    }
    
    
    
    function RetornaQuantidadeDeSlidesNaVariável(SlideReferente){
        let Quantidade = 0
        Array.from(SlideReferente).forEach(function name(params) {
            Quantidade = Quantidade+1
        })
        return Quantidade
    }
    
    
    
    
    function SelecionarDotReferenteAPosiçãoDoSlide(leftPositionSlide){
        switch (leftPositionSlide) {
            case -100:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(2.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -200:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(2.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -300:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(2.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break;
            case -400:
                dot_01_depoimentos.style.transform = 'scale(1.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(2.0)'
                break;
            default:
                dot_01_depoimentos.style.transform = 'scale(2.0)'
                dot_02_depoimentos.style.transform = 'scale(1.0)'
                dot_03_depoimentos.style.transform = 'scale(1.0)'
                dot_04_depoimentos.style.transform = 'scale(1.0)'
                dot_05_depoimentos.style.transform = 'scale(1.0)'
                break
        }
    }
}