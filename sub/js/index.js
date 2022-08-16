$(function () {
    var firstmenu=$('#header>.inner>nav>ul>li'),
    header=$('#header'),
    headerHeight=header.height();
    h1=$('nav>ul>li:first>a'),
    h2=$("nav>ul>li>a")
    fontColor=$('')
    firstmenu.mouseenter(function(){
        firstmenu.find('ul').hide();
        $(this).find('ul').show();
        var submenuHeight=$(this).find('ul').height();
        header.stop().animate({height:submenuHeight+headerHeight}).css("background"," linear-gradient(#243c84 100px, rgba(242,242,242,.5) 51px, rgba(242,242,242,.5)")
    });
    firstmenu.mouseleave(function() {
        header.stop().animate({height:headerHeight})
        $(this).fins('ul').hide();
    });

})
