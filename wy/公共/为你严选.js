$.get("./为你严选.json",function(str){
    var ht=""
    ht=`
        <div class="top2_title">
            <h2>挑款师推荐</h2>
            <span>更多></span>
        </div>
        <div class="top2_body">

        </div>
    `
    $(".top2").html(ht)
    var hm=""
    for(var x=0;x<str.list1.length;x++){
        hm+=`
            <div class="tp2_bd_tj">
                <div class="tp2_top">
                    <img src=${str.list1[x].img} />
                </div>
                <div class="tp2_bom">
                    <div class="bom_tou">
                        <div class="bom_tou_le">
                            <img src=${str.list1[x].img2} />
                        </div>
                        <div class="bom_tou_ri">${str.list1[x].txt1}</div>
                    </div>
                    <div class="bom_h">${str.list1[x].txt2}</div>
                    <p>${str.list1[x].txt3}</p>
                </div>
            </div>
        `
    }
    $(".top2_body").html(hm)
    var htm="";
    htm=`
        <div class="top3_title">
            <h2>口碑商品</h2>
            <span>更多></span>
        </div>
        <div class="top3_body"></div>
    `
    $(".top3_cen").html(htm)
    var hxm="";
    for(var y=0;y<str.list2.length;y++){
        hxm+=`
            <div class="tp3_div">
                <div class="lt">
                    <img src=${str.list2[y].img} />
                </div>
                <div class="rt">
                    <h4>${str.list2[y].txt1}</h4>
                    <p>${str.list2[y].txt2}</p>
                </div>
            </div>
        `
    }
    $(".top3_body").html(hxm)
   function text(aaa){
        var xhtm="";
        xhtm=`
            <div class="json_txt">
                <div class="json_lt"></div>
                <div class="json_rt">${aaa.txt}</div>
            </div>
            <div class="json_img">
                <img src=${aaa.img} />
                <div class="json_bj"></div>
                <button>去看看></button>
            </div>
        `
        if(aaa.txt2!=""){
            xhtm+=`
                <div class="json_txt2">${aaa.txt2}</div>
            `
        }
        $(".top5_json").html(xhtm)
   }
   text(str.list3[0])
   $(".tit_t").click(function(){
       text(str.list3[$(this).index()])
       $(".tit_t").removeClass("on")
       $(this).addClass("on")
   })
   var xhtml="";
   function yyy(x){
    xhtml=`
        <video autoplay controls preload="auto" src=${str.list4[x]}></video>
    `
     $(".bd6_lt").html(xhtml)
   }
   yyy(0)
   var xxx="";
   for(var n=0;n<str.list5.length;n++){
       xxx+=`
        <li>
            <img src=${str.list5[n]} />
            <em></em>
        </li>
       `
   }
   $(".db6_ul").html(xxx)
   for(let i=0;i<$(".db6_ul li").length;i++){
        $(".db6_ul li").eq(i).click(function(){
            console.log(i)
        yyy(i)
        })
   }
   $(".xia span").click(function(){
    $(".db6_ul").animate({
        top:-230
    },()=>{
        $(".db6_ul").children().first().appendTo($(".db6_ul"))        
        $(".db6_ul").css("top",-50)
    })
   
   })
   $(".shang span").click(function(){
    $(".db6_ul").children().last().prependTo($(".db6_ul"))
    $(".db6_ul").css("top",-130)
    $(".db6_ul").animate({
        top:-50
    })
   })
})