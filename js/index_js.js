document.addEventListener('DOMContentLoaded',function(){
    // header gnb sticky
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
    
    // btn 만들기
    const btt=document.querySelector('#top_button')
    let scrollAmount;
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
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      });

    //   옆에서 컨텐츠 나오기
    window.addEventListener('load',function(){
        addEventListener('scroll',function(){
            if(pageYOffset>=1300||scrollY>=1300){
                this.document.querySelector(".contents3 .inner>div").classList.add('on')
            }
            if(pageYOffset>=2300||scrollY>=2300){
                this.document.querySelector(".contents4 .inner>div").classList.add('on')
            }
            if(pageYOffset>=3300||scrollY>=3300){
                this.document.querySelector(".contents5 .inner h2.h2_text").classList.add('on')
                this.document.querySelector(".store_text").classList.add('on')
                this.document.querySelector(".boxL").classList.add('on')
                this.document.querySelector(".boxR").classList.add('on')
            }
        })
    })
    var mq=window.matchMedia("screen and (min-width:768px) and (max-width:1099px)")
    if(mq.matches){
        window.addEventListener('load',function(){
            addEventListener('scroll',function(){
                if(pageYOffset>=900||scrollY>=900){
                    this.document.querySelector(".contents3 .inner>div").classList.add('on2')
                }
                if(pageYOffset>=1800||scrollY>=1800){
                    this.document.querySelector(".contents4 .inner>div").classList.add('on2')
                }
                if(pageYOffset>=2700||scrollY>=2700){
                    this.document.querySelector(".contents5 .inner h2.h2_text").classList.add('on')
                    this.document.querySelector(".store_text").classList.add('on')
                    this.document.querySelector(".boxL").classList.add('on')
                    this.document.querySelector(".boxR").classList.add('on')
                }    
            })
        })
    }
    var mq2=window.matchMedia("screen and (min-width:360px) and (max-width:767px)")
    if(mq2.matches){
        window.addEventListener('load',function(){
            addEventListener('scroll',function(){
                if(pageYOffset>=600||scrollY>=600){
                    this.document.querySelector(".contents3 .inner>div").classList.add('on3')
                }
                if(pageYOffset>=1250||scrollY>=1250){
                    this.document.querySelector(".contents4 .inner>div").classList.add('on3')
                }
                if(pageYOffset>=2000||scrollY>=2000){
                    this.document.querySelector(".contents5 .inner h2.h2_text").classList.add('on')
                    this.document.querySelector(".store_text").classList.add('on')
                    this.document.querySelector(".boxL").classList.add('on')
                    this.document.querySelector(".boxR").classList.add('on')
                }    
            })
        })
    }
})