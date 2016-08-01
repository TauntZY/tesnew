$(function(){

    //---获取屏幕宽高比
    var screenH =  $(window).height();
    var screeW =  $(window).width();

   if(screenH/screeW < 1.5){
       //document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
       //加载adobe animate.js
       document.getElementById("Stage1").style.transform = "scale(x,0.8)"
       document.getElementById("Stage2").style.transform = "scale(x,0.8)"
   }


    //----禁止 微信下拉查看网址
    $('body').on('touchmove', function (event) {event.preventDefault();});
    //document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
    //加载adobe animate.js
    //AdobeEdge.loadComposition('invita', 'page_invita', {
    //    scaleToFit: "both",
    //    centerStage: "horizontal",
    //    minW: "0px",
    //    maxW: "undefined",
    //    width: "640px",
    //    height: "1095px"
    //}, {dom: [ ]}, {dom: [ ]});


    /*
    *========================================
    * 页面跳转   开始
    * =======================================
    * */
    //##########################第一
    document.getElementById('page_inv_1').addEventListener("touchstart", function (e) {
        _tounchSY = e.touches[0].pageY;
    });
    document.getElementById('page_inv_1').addEventListener("touchend", function (e) {
        _tounchEY = e.changedTouches[0].pageY;
        if (_tounchSY - _tounchEY > 80) {
            //下一页

            $("#page_inv_1").css({"z-index":"1"});
            $("#page_inv_3").css({"z-index":"1"});

            $("#page_inv_2").css({display: "block","z-index":"999"});
            $("#page_inv_2").animate({marginTop:"0px"},400,"swing",function(){
                $("#page_inv_1").css({display: "none",marginTop:"150%","z-index":"1"});
                $("#page_inv_3").css({display: "none",marginTop:"150%","z-index":"1"});
            });
        }
        if (_tounchSY - _tounchEY < -80) {
            //上一页

        }
    });
    //##########################第二
    document.getElementById('page_inv_2').addEventListener("touchstart", function (e) {
        _tounchSY = e.touches[0].pageY;
    });
    document.getElementById('page_inv_2').addEventListener("touchend", function (e) {
        _tounchEY = e.changedTouches[0].pageY;
        if (_tounchSY - _tounchEY > 80) {
           // 下一页
            $("#page_inv_1").css({"z-index":"1"});
            $("#page_inv_2").css({"z-index":"1"});

            $("#page_inv_3").css({display: "block","z-index":"9"});
            $("#page_inv_3").animate({marginTop:"0px"},400,function(){
                $("#page_inv_1").css({display: "none",marginTop:"150%","z-index":"1"});
                $("#page_inv_2").css({display: "none",marginTop:"150%","z-index":"1"});
            });
        }
        if (_tounchSY - _tounchEY < -80) {
            //上一页
            $("#page_inv_3").css({"z-index":"1"});
            $("#page_inv_2").css({"z-index":"1"});

            $("#page_inv_1").css({display: "block","z-index":"9",marginTop:"-150%"});
            $("#page_inv_1").animate({marginTop:"0px"},400,function(){
                $("#page_inv_3").css({display: "none",marginTop:"150%","z-index":"1"});
                $("#page_inv_2").css({display: "none",marginTop:"150%","z-index":"1"});
            });
        }
    });
    //##########################第三
    document.getElementById('page_inv_3').addEventListener("touchstart", function (e) {
        _tounchSY = e.touches[0].pageY;
    }, false);
    document.getElementById('page_inv_3').addEventListener("touchend", function (e) {
        _tounchEY = e.changedTouches[0].pageY;
        if (_tounchSY - _tounchEY > 80) {
            //下一页
            $("#page_inv_2").css({"z-index":"1"});
            $("#page_inv_3").css({"z-index":"1"});

            $("#page_inv_1").css({display: "block","z-index":"9"});
            $("#page_inv_1").animate({marginTop:"0px"},400,function(){
                $("#page_inv_2").css({display: "none",marginTop:"150%"});
                $("#page_inv_3").css({display: "none",marginTop:"150%"});
            });
        }
        if (_tounchSY - _tounchEY < -80) {
            //上一页

            $("#page_inv_1").css({"z-index":"1"});
            $("#page_inv_3").css({"z-index":"1"});

            $("#page_inv_2").css({display: "block","z-index":"9",marginTop:"-150%"});
            $("#page_inv_2").animate({marginTop:"0"},400,function(){
                $("#page_inv_1").css({display: "none",marginTop:"150%"});
                $("#page_inv_3").css({display: "none",marginTop:"150%"});
            });


        }
    });
    /*
     *========================================
     * 页面跳转   开始
     * =======================================
     * */

    //转发会议信息
    $(".share").click(function(){
        if($(".shareOP").hasClass('active')){
            $(".shareOP").css({display:"none"});
            $(".shareOP").removeClass('active');
        }else{
            $(".shareOP").css({display:"block"});
            $(".shareOP").addClass('active');
        }
    });
    $(".shareOP").click(function(){
        $(this).removeClass('active');
        $(this).css({display:"none"});
    });


    //编辑会议
    $(".edit").click(function(){
        $(".scaleControl").setAttribute('content',"width=640,scale=0.7");
    });
});
