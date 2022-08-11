$(function () {
    var firstmenu=$('#header>.inner>nav>ul>li'),
    header=$('#header'),
    headerHeight=header.height();
    firstmenu.mouseenter(function(){
        firstmenu.find('ul').hide();
        $(this).find('ul').show();
        var submenuHeight=$(this).find('ul').height();
        header.stop().animate({height:submenuHeight+headerHeight})
        // $('overlay').addClass('show')
    })
    firstmenu.mouseleave(function() {
        header.stop().animate({height:headerHeight})
        $(this).fins('ul').hide();
        // $('overlay').removeClass('show')
    })
})
