// gnb
$(function(){
    var firstmenu = $('#header>.inner>nav>ul>li'),
    header = $('#header'),
    headerHeight = header.height(),
    h1 = $('nav>ul>li:first>a'),
    h2 = $("nav>ul>li>a")
fontColor = $('')
firstmenu.mouseenter(function () {
    firstmenu.find('ul').hide();
    $(this).find('ul').show();
    var submenuHeight = $(this).find('ul').height();
    header.stop().animate({ height: submenuHeight + headerHeight }).css("background", " linear-gradient(#243c84 100px, rgba(242,242,242,.5) 51px, rgba(242,242,242,.5)")
    h2.css("color", "#f2f2f2")
    $('.overlay').addClass('show')
});
firstmenu.mouseleave(function () {
    header.stop().animate({ height: headerHeight })
    header.css("background", "unset")
    h2.css("color", "#000")
    h1.css("color", "#062e6b")
    $('.overlay').removeClass('show')
    $(this).fins('ul').hide();
});
})


// 모바일 메뉴
$(function () {

     $('.mobile_menu').click(function (e) {
         e.preventDefault();

         $('header').addClass('on').slideDown('fast');
     })
     $('.closePop').click(function (e) {
         e.preventDefault();
         $('header header_cont').addClass('on').slideUp('fast');
         $('header').removeClass('on')

     })
})

// jqury swiper

  $(document).ready(function () {
    $(".bxslider").bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 488,
    });
  });

  // 옆에서 나오기