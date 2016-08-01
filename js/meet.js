$(function(){
    $("#cBtn").click(function(){
        if($(this).hasClass("show")){
            $("#classify").animate({marginLeft:"-250px"});
            $("#meet_con").animate({marginLeft:"65px"});
            $(this).removeClass("show");
        }else{
            $("#classify").animate({marginLeft:"-2px"});
            $("#meet_con").animate({marginLeft:"315px"});
            $(this).addClass("show");
        }
    });
    $(".lev").click(function(){
        if($(this).hasClass("show")){
            $(this).parent().stop().animate({height:"52"});
            $(this).parent().find("span:first-child").removeClass("ani");
            $(this).removeClass("show");
        }else{
            $(this).parent().stop().animate({height:"255"});
            $(this).parent().find("span:first-child").addClass("ani");
            $(this).addClass("show");
        };
    });
    $(".ewm").click(function(){
        var m_qrcode = $(this).find("img:first-child").attr("meeting_qrcode");
        var m_id = $(this).find("img:first-child").attr("meeting_id");
        $("#page_ewm").css({display:"block"});
        $("#page_ewm img").attr("src",m_qrcode);
        $("#page_ewm .id span").text(m_id);
    });
    $(".close").click(function(){
        $("#page_ewm").css({display:"none"});
    });
    document.getElementById("page_meet").addEventListener("touchstart",function(e)
    {
        _xs =e.touches[0].pageX;
        console.log("start",_xs)
    });
    document.getElementById("page_meet").addEventListener("touchend",function(e)
    {
        _xe=e.changedTouches[0].pageX;
        console.log("end",_xe);
        //先判断是否纯在 cBtn
        if(document.getElementById("cBtn")){
            if( _xe - _xs > 80){
                if(!$("#cBtn").hasClass("show")){
                    $("#classify").animate({marginLeft:"-2px"});
                    $("#meet_con").animate({marginLeft:"315px"});
                    $("#cBtn").addClass("show");
                }
            }
            if(_xe - _xs < -80){
                if($("#cBtn").hasClass("show")){
                    $("#classify").animate({marginLeft:"-250px"});
                    $("#meet_con").animate({marginLeft:"65px"});
                    $("#cBtn").removeClass("show");
                }
            }
        }


    })
});