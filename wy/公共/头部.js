// $(".ul2").hover(function () {
//     clearInterval(time)
// }, function () {
//     time = setInterval(function () {
//         fn()
//     }, 2000)
// })
// var x = 0;
// function fn() {
//     x++;
//     if (x == 3) {
//         x = 0;
//         $(".ul2").css("top", 0)
//     } else {
//         $(".ul2").animate({
//             "top": -36 * x
//         })
//     }

// }
// fn()
// var time = setInterval(function () {
//     fn()
// }, 2000);
setInterval(() => {
    $(".ul2").animate({ "top": -36 }, 1000, function () {
        $(".ul2 li").first().appendTo($(".ul2"))
        $(".ul2").css("top", 0)
    })
}, 2000);

$.get("./头部.json", function (str) {

    for (var y = 0; y < str.length; y++) {
        var ht = "";
        for (var i = 0; i < str[y].length; i++) {
            ht += `
            <div class="li">
                <img src=${str[y][i].img}>
                <span>${str[y][i].text}</span>
            </div>      
                 `
        }
        $(".shuju").eq(y).html(ht);
        // ht = "";
    }
})
$(".tiaozhuan").each(function (i) {
    $(".tiaozhuan").eq(i).click(function () {
        window.open("./公共头2.html?" + i);
    })
})
$(window).scroll(function(){
    var stp = document.documentElement.scrollTop || document.body.scrollTop;
    if(stp>630){
        $(".ul_gdleft").css("position","fixed").css("top","62px")
        $(".gd_right").css("position","fixed").css("top","62px")
    }else{
        $(".ul_gdleft").css("position","absolute").css("top","630px")
        $(".gd_right").css("position","absolute").css("top","630px")
    }
})