$.get("./首页.json", (str) => {
    var hm = "";
    for (var x = 0; x < str.list1.length; x++) {
        hm += `
            <div class=${str.list1[x].class}>
                <div class="div1">
                    <span class=${str.list1[x].class3}>${str.list1[x].text1}</span>
                    <span class=${str.list1[x].class2}>新品</span>
                </div>
                <div class="div2">${str.list1[x].text2}</div>
                <div class="div3">
                    <img src=${str.list1[x].img} />
                </div>
            </div>
        `
    }
    $(".top1_content").html(hm)
    $(".div1").eq(2).css("margin", "32px 0 10px 20px").css("font-size", "20px").css("text-align", "left")
    $(".div1").eq(3).css("margin", "32px 0 10px 20px").css("font-size", "20px").css("text-align", "left")
    $(".div2").eq(2).css("float", "left").css("padding-top", "10px").css("margin-left", "20px")
    $(".div2").eq(3).css("float", "left").css("padding-top", "10px").css("margin-left", "20px")

    for (var y = 0; y < str.list2.length; y++) {
        var ht = "";
        ht += `
            <div class="ul_li_div">
                <div class="div_1">
                    <img src=${str.list2[y].img1} />
                </div>
                <div class="div_2">
                    <img src=${str.list2[y].img2} />
                </div>
                <div class=${str.list2[y].class}>
                    <div class="div_4">
                        <span>${str.list2[y].text5}</span>
                        <b>${str.list2[y].text6}</b>
                    </div>
                    <div class="div_5">${str.list2[y].text7}</div>
                </div>
                <img src="../img/bf43c8b8b8c205b14e3ac27021e04394.png"/>
            </div>
            <div class="ul_li_div2">
                <div class="kg">${str.list2[y].text3}</div>
                <h4>${str.list2[y].text1}</h4>
                <p>${str.list2[y].text2}<del>${str.list2[y].text4}</del></p>
            </div>
        `
        $(".ul3 li").eq(y).html(ht)
    }


    $(".span_dian2").click(function () {
        fn("list4")
        $(this).addClass("on")
        $(".span_dian1").removeClass("on")
    })
    $(".span_dian1").click(function () {
        fn("list3")
        $(this).addClass("on")
        $(".span_dian2").removeClass("on")
    })
    function fn(sss) {
        var hl = "";
        for (var i = 0; i < str[sss].length; i++) {
            hl += `
            <div class="big_box">
                <div class="big_box_top">
                    <a class="top_a">
                        <div class=${str[sss][i].class}>
                            <img src=${str[sss][i].img1} />
                        </div>
                        <img src="../img/bf43c8b8b8c205b14e3ac27021e04394.png" />
                        <div class="a_div2" style=${str[sss][i].aaa}>
                            <div class="a_div2_1" style=${str[sss][i].bbb}>
                                <span class="a_span1">${str[sss][i].txt1}</span>
                                <span class="a_span2">${str[sss][i].txt2}</span>
                            </div>
                            <div class="a_div2_2">${str[sss][i].txt3}</div>
                        </div>
                    </a>
                </div>
                <div class="big_box_bom">
                    <div class="bom_kg">
                    ${str[sss][i].txt4}
                    </div>
                    <h4>${str[sss][i].txt5}</h4>
                    <p>
                        <span>${str[sss][i].txt6}</span>
                        <del>${str[sss][i].txt7}</del>
                    </p>
                </div>
            </div>
        `
        }
        $(".top3_body").html(hl)
        $(".big_box_top").eq(0).css("margin-bottom", "18px")
        $(".big_box_bom h4").eq(0).css("font-size", "18px")
        $(".big_box_bom p").eq(0).css("font-size", "18px")
    }
    fn("list3")


        var xhm="";
        var lbt_body="";
    for(var m=0;m<str.list5.length;m++){
        
        for(var n=0;n<str.list5[m].length;n++){
            xhm+=`
                <div class="lbt_json">
                    <div class="lbt_title">
                        <div class="h3">${str.list5[m][n].title.txt1}</div>
                        <div class="tit_ri">
                            <div class="title">
                                <span><a>${str.list5[m][n].title.txt2}</a></span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt3}</a>
                                </span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt4}</a>
                                </span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt5}</a>
                                </span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt6}</a>
                                </span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt7}</a>
                                </span>
                                <span>
                                    <b>/</b>
                                    <a>${str.list5[m][n].title.txt8}</a>
                                </span>
                            </div>
                            <a class="gengduo">查看更多 ></a>
                        </div>
                    </div>
                    <div class="lbt">
                            <div style="height:310px" class="swiper-container">
                                <div class="swiper-wrapper">
                                <div class="swiper-slide" style="background-image:${str.list5[m][n].lbt.tp1}"></div>
                                <div class="swiper-slide" style="background-image:${str.list5[m][n].lbt.tp2}"></div>
                                <div class="swiper-slide" style="background-image:${str.list5[m][n].lbt.tp3}"></div>
                                <div class="swiper-slide" style="background-image:${str.list5[m][n].lbt.tp4}"></div>
                                </div>
                                <div class="swiper-pagination swiper-pagination-white"></div>
                                <div class="swiper-button-next swiper-button-white ri_dian"></div>
                                <div class="swiper-button-prev swiper-button-white le_dian"></div>
                            </div>
                    </div>
                        <script>
                            var swiper1 = new Swiper('.swiper-container', {
                                spaceBetween: 30,
                                effect: 'fade',
                                autoplay: {
                                delay: 2000,
                                disableOnInteraction: false
                                },
                                loop: true,
                                pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                                },
                                navigation: {
                                nextEl: '.ri_dian',
                                prevEl: '.le_dian',
                                },
                            });
                            
                        </script>
                
            `
           for(var z=0;z<str.list5[m][n].body.length;z++){
               lbt_body+=`
                   <div class="ulli">
                            <div class="ul_li_div">
                            <div class="div_1">
                                <img src=${str.list5[m][n].body[z].img1} />
                            </div>
                            <div class="div_2">
                                <img src=${str.list5[m][n].body[z].img2} />
                            </div>
                            <div class=${str.list5[m][n].body[z].class}  style=${str.list5[m][n].body[z].aaa}>
                                <div class="div_4" style=${str.list5[m][n].body[z].bbb}>
                                    <span>${str.list5[m][n].body[z].text5}</span>
                                    <b>${str.list5[m][n].body[z].text6}</b>
                                </div>
                                <div class="div_5">${str.list5[m][n].body[z].text7}</div>
                            </div>
                            <img src="../img/bf43c8b8b8c205b14e3ac27021e04394.png"/>
                        </div>
                        <div class="ul_li_div2">
                            <div class="kg">${str.list5[m][n].body[z].text3}</div>
                            <h4>${str.list5[m][n].body[z].text1}</h4>
                            <p>${str.list5[m][n].body[z].text2}<del>${str.list5[m][n].body[z].text4}</del></p>
                        </div>
                   </div>
               `
           }
           xhm+=lbt_body+"</div>";
           lbt_body="";
        }
        
    }
    $(".top5").html(xhm)
})
var index = 0;
$(".btn2").click(function () {
    index++;
    if (index == 3) {
        index = 2
    }
    $(".ul3").animate({
        "left": "-1100" * index
    })
})
$(".btn1").click(function () {
    index--;
    if (index == -1) {
        index = 0
    }
    $(".ul3").animate({
        "left": "-1100" * index
    })
})

// var c=window.location.search.substring(1)
// $(".tiaozhuan").eq(0).click(function(){
//     window.open("./居家生活.html?"+0);
// })