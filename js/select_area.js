$(document).ready(function(){

    //用户权限-----指定省市

    var $emeeting_user_regions = {

    }

    var user_regions;
    if ($emeeting_user_regions.hasOwnProperty(86)) {
        user_regions = {  86: {} };
        var provinces = $emeeting_user_regions[86];
        for (var i = 0; i < provinces.length; ++i) {
            province = provinces[i];
            user_regions[86][province] = ChineseDistricts[86][province];
            if ($emeeting_user_regions.hasOwnProperty(province)) {
                user_regions[province] = {};
                var cities = $emeeting_user_regions[province];
                for (var j = 0; j < cities.length; ++j) {
                    city = cities[j];
                    user_regions[province][city] = ChineseDistricts[province][city];
                }
            } else {
                user_regions[province] = ChineseDistricts[province];
            }
        }
    } else {
        user_regions = ChineseDistricts;
    }

    //记录所选的省和城市
    var pronvince_n;
    var city_n;

    var address = "";
    var con = document.getElementById('select_con');
    //会议地区选择
    $("#a_area").click(function(){
        address = "";
        $(".s_province").remove();
        $(".s_city").remove();
        $(".s_county").remove();
        $(".container").css({display:"block"});

        for( var x in user_regions[86]){
            var li = document.createElement('li');
            li.innerHTML = user_regions[86][x];
            li.setAttribute("class","s_province");
            li.setAttribute('value',x);
            con.appendChild(li);
        }

        $(".s_province").click(function(){
            //记录省编号
            pronvince_n = $(this).val();
            //将编号存在input的value中
            $("#id_province").attr("value",pronvince_n);

            $(".s_province").remove();
            address = $(this).text();

            //判断省的下一级是否为空
            if(user_regions[""+$(this).val()] == null){
                $("#a_area").val(address);
                $(".container").css({display:"none"});
            }else{
                for(var x in user_regions[""+$(this).val()]){
                    var li = document.createElement('li');
                    li.innerHTML = user_regions[""+$(this).val()][""+x];
                    li.setAttribute("class","s_city");
                    li.setAttribute('value',x);
                    con.appendChild(li);

                }
            }
            $(".s_city").click(function(){
                //记录市编号
                city_n = $(this).val();
                //将编号存在input的value中
                $("#id_province").attr("value",pronvince_n);
                $("#id_city").attr("value",city_n);

                $(".s_city").remove();
                address += $(this).text();
                //判断市的下一级是否为空
                if(ChineseDistricts[""+$(this).val()] == null){
                    $("#a_area").val(address);
                    $(".container").css({display:"none"});
                }else{
                    for(var x in ChineseDistricts[""+$(this).val()]){
                        var li = document.createElement('li');
                        li.innerHTML = ChineseDistricts[""+$(this).val()][""+x];
                        li.setAttribute("class","s_county");
                        li.setAttribute('value',x);
                        con.appendChild(li);
                    }
                }
                $(".s_county").click(function(){
                    $(".s_county").remove();
                    address += $(this).text();
                    $("#a_area").val(address);
                    $(".container").css({display:"none"});
                });
            });
        });

        //  当其他输入框点击时选择框隐藏
        $(".input").focusin(function(){
            $(".container").css({display:"none"});
        });

    });

});
