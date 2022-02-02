const viewportWidth = window.innerWidth;


function SetPaddingToTheSocialNav(){
    if(viewportWidth < 992){
        Array.from(nav_items_social).forEach((element)=>{
            $(element).toggleClass("px-2");
        })
        $('.navbar-nav-social').toggleClass('me-4');
    }else{
    }
    
}

SetPaddingToTheSocialNav();