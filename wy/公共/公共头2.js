$.get("./open.json", function (str) {
    var c=window.location.search.substring(1)
    console.log(c)
    fn(str[c])
    $(".a1").removeClass("a1")
    $(".tiaozhuan").eq(c).addClass("a1")
})



function fn(shuju) {
    var hm = "";
    hm = `
    <div class="top_title">
        <span>首页</span>
        <span style="margin: 0 5px">></span>
        <span style="color: #999;">${shuju.title.text1}</span>
    </div>
    <div class="top_lbt">
            <div style="height:310px" class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" style="background-image:${shuju.title.img1}"></div>
                  <div class="swiper-slide" style="background-image:${shuju.title.img2}"></div>
                  <div class="swiper-slide" style="background-image:${shuju.title.img3}"></div>
                  <div class="swiper-slide" style="background-image:${shuju.title.img4}"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-white ffffff"></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>
              </div>
              <script>
                var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                effect: 'fade',
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                delay: 2000,
                disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                });
            </script>
    </div>



    <div class="shangpin">
          <div class="shangpin_top">
            <div class="sp_top1">
              <span>分类：</span>
              <div class="sp_top1_tit">
                  
              </div>
            </div>
            <div class="sp_top1">
              <span>配送地区:</span>
              <div class="sp_top1_tit">
                <span>全部</span>
                <span>香港</span>
                <span>澳门</span>
                <span>台湾</span>
                <span>日韩</span>
                <span>亚洲</span>
                <span>欧洲</span>
                <span>美洲</span>
              </div>
            </div>
            <div class="sp_top3">
                <span class="span11">排序：</span>
                <span class="span22">默认</span>
                <span class="span33">
                  <span class="span44">价格</span>
                  <div>
                    <i></i>
                    <i></i>
                  </div>
                </span>
                <span class="span55">
                  <span>上架时间</span>
                  <i></i>
                </span>
            </div>
          </div>
          <div class="shangpin_body">

          </div>
        </div>
    `
    $(".big_cen").html(hm)
    var hl="";
    for(var key in shuju.txt){
        hl+=`
            <span>${shuju.txt[key]}</span>
        `
    }
    hl="<span style='color:#b4a078'>全部</span>"+hl
    $(".sp_top1_tit").eq(0).html(hl)
    var ht="";
    var list="";
    for(var m=0;m<shuju.body.length;m++){
        ht+=`
            <div class="box">
                <div class="box_tit">
                    <p class="p1">${shuju.body[m].bd_tit.test1}</p>
                    <p class="p2">${shuju.body[m].bd_tit.test2}</p>
                </div>
                <ul class="ul">

                
        `
        for(var n=0;n<shuju.body[m].bd_css.length;n++){
            list+=`
                <li>
                <div class="ulli">
                <div class="ul_li_div">
                <div class="div_1">
                    <img src=${shuju.body[m].bd_css[n].pic1} />
                </div>
                <div class="div_2">
                    <img src=${shuju.body[m].bd_css[n].pic2} />
                </div>
                <div class=${shuju.body[m].bd_css[n].class}>
                    <div class="div_4">
                        <span>${shuju.body[m].bd_css[n].text5}</span>
                        <b>${shuju.body[m].bd_css[n].text6}</b>
                    </div>
                    <div class="div_5">${shuju.body[m].bd_css[n].text7}</div>
                </div>
                <img src="../img/bf43c8b8b8c205b14e3ac27021e04394.png"/>
            </div>
            <div class="ul_li_div2">
                <div class="kg">${shuju.body[m].bd_css[n].text3}</div>
                <h4>${shuju.body[m].bd_css[n].text1}</h4>
                <p>${shuju.body[m].bd_css[n].text2}<del>${shuju.body[m].bd_css[n].text4}</del></p>
            </div>
            <div class="ul_li_div3">
                <hr/>
                <p class="p3">${shuju.body[m].bd_css[n].text8}</p>
            </div>
            </div>
                </li>
            `
        }
        ht=ht+list+"</ul></div>"
    }
    
    $(".shangpin_body").html(ht)
}