
jQuery(".menu-list").on('click','li',function(){ 
    jQuery(this).addClass("active").siblings().removeClass("active"); 
  });

/* HAMBURGUER MENU*/

document.querySelector('.more-button').addEventListener('click', 
    function () {
        document.querySelector('.list-container').classList.toggle('active');
});