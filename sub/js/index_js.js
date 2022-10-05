document.addEventListener('DOMContentLoaded',function(){
// header> gnb sticky
var $header=document.querySelector('#header');
$headerOST=$header.offsetTop;
var win=window;
win.addEventListener('scroll',function(){
    var $currentSCT=document.documentElement.scrollTop;
    if($headerOST<$currentSCT){
        $header.classList.add('sticky')
    }else{
        $header.classList.remove('sticky')
    }
})
//#section2 swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  breakpoints:{
   355:{
     slidesPerView:1
   },
   768:{
     slidesPerView:2,
   },
   1100:{
     slidesPerView:3,
   }
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
 loop:true
});



    // 탑 버튼
    const btt=document.querySelector('#top_button')
    let scrollAmount;
    console.log(window)
    window.addEventListener('scroll',function(){
        scrollAmount=this.scrollY;
        if(scrollAmount>scrollAmount/7){
            btt.classList.add('visible');
        }else{
            btt.classList.remove('visible');
        }
    })
    
    btt.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'})
    })
})
