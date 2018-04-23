$(function() {
        /***********首页*************/
        $('#main').fullpage({
            sectionsColor: ['#FFFFFF', '#FFFFFF', '#F8F8F8', '#FFFFFF', '#F8F8F8'],
            'navigation': true,
            "navigationColor":'#288ff4',
            afterLoad:function (anchorLink, index) {

                //进入可视区域
                if(index==1)
                {
                    $('.section2 .center').find(".m-lab-right-title").css("display","none");
                    $(".back-top").css("display","none");
                }
                if(index==2)
                {
                    //智慧实验室管理平台
                    $(".back-top").fadeIn(500);
                    $(".section2 .m-lab-left").delay(300).fadeIn(4000);
                    $('.section2 .center').find(".m-lab-right-title").css("display","block");
                    $('.section2 .center').find(".m-lab-right-title").delay(100).animate({top:'14%'},1500,'easeOutExpo');
                    $('.section2 .center').find(".m-lab-right-cha").delay(100).animate({bottom:'20%'},1500,'easeOutExpo');
                }
                if(index==3)
                {
                    //三维VR仿真教学平台
                    $('.section3').find('.m-teach-left').delay(100).animate({left:'-5%'},1500,'easeOutExpo');
                    $(".section3").find(".m-teach-right").delay(100).animate({right:'0'},1500,'easeOutExpo');
                }
                if(index==4)
                {
                    $('.section4').find('#foward').delay(100).animate({left:'20%'},1500,'easeOutExpo');
                    $('.section4').find('#next').delay(100).animate({right:'20%'},1500,'easeOutExpo');
                }
                if(index==5)
                {
                    //关于我们和底部版权区
                    $('.section5').find('.m-about-left').delay(100).animate({left:'0'},1500,'easeOutExpo');
                    $('.section5').find('.m-about-right').delay(100).animate({right:'0'},1500,'easeOutExpo');
                }
                $(".back-top").on("click",function () {
                   $.fn.fullpage.moveTo('1',0);
                });
            },
            onLeave:function (index, direction) {
                if(index==1)
                {
                    $(".back-top").css("display","none");
                    $('.section2 .center').find(".m-lab-right-title").css("display","none");
                }
                if(index==2)
                {
                    $(".section2 .m-lab-left").delay(500).css("display","none");
                    $('.section2 .center').find(".m-lab-right-title").css("display","none");
                    $('.section2 .center').find(".m-lab-right-title").delay(100).animate({top:'-100%'},1500,'easeOutExpo');
                    $('.section2 .center').find(".m-lab-right-cha").delay(100).animate({bottom:'-100%'},1500,'easeOutExpo');
                }
                if(index==3)
                {
                    $('.section3').find('.m-teach-left').delay(100).animate({left:'-120%'},1500,'easeOutExpo');
                    $(".section3").find(".m-teach-right").delay(100).animate({right:'-120%'},1500,'easeOutExpo');
                }
                if(index==4)
                {
                    $('.section4').find('#foward').delay(100).animate({left:'-120%'},1500,'easeOutExpo');
                    $('.section4').find('#next').delay(100).animate({right:'-120%'},1500,'easeOutExpo');
                }

                if(index==5)
                {
                    //关于我们和底部版权区
                    $('.section5').find('.m-about-left').delay(100).animate({left:'-120%'},1500,'easeOutExpo');
                    $('.section5').find('.m-about-right').delay(100).animate({right:'-120%'},1500,'easeOutExpo');
                }
            }
        });

    /*导航栏和轮播图*/
    var menuList=$("nav .m-nav-menu").find("li");
    var mIndex,menuIndex;
    var mIfOver=false;

    //判断当前的位置
        menuList.each(function (index) {
           if($(this).hasClass("m-nav-menu-active"))
           {
               //mIndex=parseInt($(this).attr("index"));
                mIndex=index;
                return;
           }
        });
    //alert(menuIndex);
    menuList.each(function (index) {
       $(this).mouseover(function () {
           if($(this).hasClass("m-nav-menu-active"))
           {
               return;
           }
           if(index==0)
           {

               menuList.eq(1).removeClass("m-nav-menu-active");
               menuList.eq(2).removeClass("m-nav-menu-active");
               menuList.eq(3).removeClass("m-nav-menu-active");
               menuList.eq(4).removeClass("m-nav-menu-active");
           }
           else if(index==1)
           {
               menuList.eq(0).removeClass("m-nav-menu-active");
               menuList.eq(2).removeClass("m-nav-menu-active");
               menuList.eq(3).removeClass("m-nav-menu-active");
               menuList.eq(4).removeClass("m-nav-menu-active");
           }
           else if(index==2)
           {
               menuList.eq(0).removeClass("m-nav-menu-active");
               menuList.eq(1).removeClass("m-nav-menu-active");
               menuList.eq(3).removeClass("m-nav-menu-active");
               menuList.eq(4).removeClass("m-nav-menu-active");
           }
           else if(index==3)
           {
               menuList.eq(0).removeClass("m-nav-menu-active");
               menuList.eq(1).removeClass("m-nav-menu-active");
               menuList.eq(2).removeClass("m-nav-menu-active");
               menuList.eq(4).removeClass("m-nav-menu-active");
           }
           else
           {
               menuList.eq(0).removeClass("m-nav-menu-active");
               menuList.eq(1).removeClass("m-nav-menu-active");
               menuList.eq(2).removeClass("m-nav-menu-active");
               menuList.eq(3).removeClass("m-nav-menu-active");
           }
           mIfOver=true;
       });
    });

    menuList.each(function () {
       $(this).mouseout(function () {
           mIfOver=false;
       });
    });

    setInterval(function () {
        if(mIfOver==false)
        {
            menuList.eq(mIndex).addClass("m-nav-menu-active");
        }
    },200);

    //轮播图
    var divHeight=parseInt($(window).height());//获取屏幕的高度
    var divTop=(parseInt(divHeight)-120)/2;
    $('.swiper-wrapper .swiper-slide .swiper-slide-1').css("top",divTop+'px');
    $('.swiper-wrapper .swiper-slide .swiper-slide-2').css("top",divTop+'px');
    $('.swiper-wrapper .swiper-slide .swiper-slide-3').css("top",divTop+'px');

    /*智慧实验室管理平台*/
    var chaList=$(".m-lab-right-cha ul li");
    chaList.each(function (index) {
        $(this).bind("mouseover",function () {
            if($(this).attr("class")=="cha-active")
            {
                return;
            }
           if(index==0)
           {
               $(".m-lab-left").find("img").attr("src","images/mac-lianjie.png");
           }
           else if(index==1)
           {
               $(".m-lab-left").find("img").attr("src","images/mac-tongji.png");
           }
           else
           {
               $(".m-lab-left").find("img").attr("src","images/mac-zhenghe.png");
           }
            removeActive();
            $(this).addClass("cha-active");
        });
    });

    //取消激活状态
    function removeActive() {
        chaList.each(function () {
            if($(this).attr("class")=="cha-active")
            {
                $(this).removeClass("cha-active");
                return;
            }
        });
    }

    /*三维VR教学平台*/
    var realList=$(".real").find(".circle");
    var realFlag=false;
    if(realFlag==false)
    {
        showText();
    }
    realList.each(function (index) {
        $(this).hover(function () {
            if($(this).parent().hasClass("real-active"))
            {
                return;
            }
            if(realFlag==true)
            {
                hideText();
            }
            if(index==0)
            {
                realList.eq(1).parent().removeClass("real-active");
                realList.eq(2).parent().removeClass("real-active");
                realList.eq(3).parent().removeClass("real-active");
                $(".round03-1").text("真实1");
                $(".round03-2").text("三维场景展示1");
            }
            else if(index==1)
            {
                realList.eq(0).parent().removeClass("real-active");
                realList.eq(2).parent().removeClass("real-active");
                realList.eq(3).parent().removeClass("real-active");
                $(".round03-1").text("真实2");
                $(".round03-2").text("三维场景展示2");
            }
            else if(index==2)
            {
                realList.eq(1).parent().removeClass("real-active");
                realList.eq(0).parent().removeClass("real-active");
                realList.eq(3).parent().removeClass("real-active");
                $(".round03-1").text("真实3");
                $(".round03-2").text("三维场景展示3");
            }
            else if(index==3)
            {
                realList.eq(1).parent().removeClass("real-active");
                realList.eq(2).parent().removeClass("real-active");
                realList.eq(0).parent().removeClass("real-active");
                $(".round03-1").text("真实4");
                $(".round03-2").text("三维场景展示4");
            }
            if(realFlag==false)
            {
                showText();
            }
            $(this).parent().addClass("real-active");
        });
    });
    function showText() {
        $(".round-text").delay(100).fadeIn("slow");
        realFlag=true;
        //console.log("加载");
    }

    function hideText() {
        $(".round-text").fadeOut("slow");
        realFlag=false;
    }


    /*我们的团队轮播图*/
    var timer;//定时器
    var len=4;
    var index=1;
    var title=$(".list-title span");//标题

    //动画切换函数
    function animate(offset) {
        var movePx=parseInt($(".list").position().left)+offset;
        if(offset>0)
        {
            offset="+="+offset;
        }
        else
        {
            offset="-=" +Math.abs(offset);
        }
        $(".list").animate({left:offset},300,function () {
            //实现无限循环
            if(movePx>-500)
            {
                $(".list").css("left",-500*len);
            }
            if(movePx<(-500 * len))
            {
                $(".list").css("left",-500);
            }
        });

    }

    //点击foward,切换到上一张
    $("#foward").bind("click",function () {
        if($(".list").is(":animated"))
        {
            return;
        }
        if(index==1)
        {
            index=4;
        }
        else
        {
            index-=1;
        }
        animate(500);
        myTitle(index);
    });

    //点击next,切换到下一张
    $("#next").bind("click",function () {
        if($(".list").is(":animated"))
        {
            return;
        }
        if(index==4)
        {
            index=1;
        }
        else
        {
            index+=1;
        }
        animate(-500);
        myTitle(index);
    });

    //设置定时器
    function play() {
        timer=setTimeout(function () {
            $("#next").trigger("click");
            play();
        },4000);
    }

    function myTitle(mindex) {
        title.each(function () {
            var m=parseInt($(this).attr("index"));
            if($(this).attr("class")=="list-title-active")
            {
                $(this).removeClass("list-title-active");
            }
            if(m==mindex)
            {
                $(this).addClass("list-title-active");
            }
        })
    }

    //清除定时器
    function stop() {
        clearTimeout(timer);
    }

    $(".section4 .list").hover(stop,play);//当鼠标移到图片上时,停止自动轮播

    //鼠标移入next时,修改图片背景
    $("#next").bind("mouseover",function () {
        stop();
        $("#next-pic").attr("src","images/next02.png");
    });

    $("#next").bind("mouseout",function () {
        play();
        $("#next-pic").attr("src","images/next.png");
    });

    //鼠标移入foward时,修改图片背景
    $("#foward").bind("mouseover",function () {
        stop();
        $("#foward-pic").attr("src","images/foward02.png");
    });

    $("#foward").bind("mouseout",function () {
        play();
        $("#foward-pic").attr("src","images/foward.png");
    });
    play();
});