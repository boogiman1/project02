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