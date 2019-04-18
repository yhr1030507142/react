$(window).on('load',function(){
    fun();
});
function fun() {
    //列数
    var _w = $(window).width();
    var boxW = $(".box").outerWidth();
    var col = parseInt(_w/boxW);
    //获取高度值
    var heightArr = [];
    $(".box").each(function(index,item){
        var boxH = $(item).outerHeight();
        if(index < col){
           heightArr[index] = boxH;
        }else {
            //最小的高度
            var minH = Math.min.apply(Math.min,heightArr);
            //最小高度的索引
            var minIndex = $.inArray(minH,heightArr);
            $(item).css({
                position:'absolute',
                top:minH+'px',
                left:minIndex*boxW +'px'
            });
            //追加
            heightArr[minIndex] += boxH;
        }
    })
}

