//Define quais banners vão ser carregados dependendo da viewport
const viewportWidth = window.innerWidth;
const Banners_Img_01 = document.querySelector("#banners-img-01");
const Banners_Img_02 = document.querySelector("#banners-img-02");
const Banners_Img_03 = document.querySelector("#banners-img-03");
const Banners_Img_04 = document.querySelector("#banners-img-04");
const Banners_Img_05 = document.querySelector("#banners-img-05");
const nav_items_social = document.querySelectorAll(".nav-item-social")


function SetBanners(){
    if(viewportWidth < 992){
        Banners_Img_01.setAttribute("src","../img/Banners/Stories SONHOS.webp");
        Banners_Img_02.setAttribute("src","../img/Banners/Stories PLANETA.webp");
        Banners_Img_03.setAttribute("src","../img/Banners/Stories FUTURO.webp");
        Banners_Img_04.setAttribute("src","../img/Banners/Stories VALORES.webp");
        Banners_Img_05.setAttribute("src","../img/Banners/Stories PAC.webp");
    }else{
        Banners_Img_01.setAttribute("src","../img/Banners/SONHOS.webp");
        Banners_Img_02.setAttribute("src","../img/Banners/PLANETA.webp");
        Banners_Img_03.setAttribute("src","../img/Banners/FUTURO.webp");
        Banners_Img_04.setAttribute("src","../img/Banners/VALORES.webp");
        Banners_Img_05.setAttribute("src","../img/Banners/PAC.webp");
    }
}


$(window).resize(SetBanners());

function SetPaddingToTheSocialNav(){
    if(viewportWidth < 992){
        Array.from(nav_items_social).forEach((element)=>{
            $(element).toggleClass("px-2");
        })
        $('.navbar-nav-social').toggleClass('me-4');
    }else{
    }
    
}

SetBanners();
SetPaddingToTheSocialNav();

