// alert(1)(如果作用上了 网页会显示提升)

$(function(){
	// 选中所有按钮添加点击事件
	$(".tab .anniu_box .anniu").click(function(){
		//$(".backtop") 返回按钮父容器
		$(".backtop").backTop(); 
		// 所有内容隐藏  
		$(".tab .content_box ul").hide();
		// num表示点击的按钮是哪个
		var num = $(".tab .anniu_box .anniu").index($(this));
		// 把对应的内容显示出来
		$(".tab .content_box ul").eq(num).show();
		// 把所有的按钮背景色去掉
		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)"
			// "color":"#EFA330"#4EB2D6
		})
		// 把对应按钮的背景色添加
		$(this).css({
			"background":"#4EB2D6"
		})
	})
// 点击下滑到第二屏，向下滚动
$(".sanjiao").click(function () {
        $({dNum:0}).animate({dNum:750},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });




// 下拉
// 顶部导航效果
$("nav .nav li:eq(0)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:0},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(1)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:750},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});

$("nav .nav li:eq(2)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:1440},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(3)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:2100},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});

$("nav .nav li:eq(4)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:4000},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});

})
