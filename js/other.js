$(document).ready(function () {
    /**
     * 第一部分：首页
     */

    /*点击返回顶部按钮*/
    $(window).scroll(function () {
        if($(this).scrollTop()>500)
        {
            $("#topbtn").fadeIn(500);
        }
        else
        {
            $("#topbtn").stop(true,true).fadeOut(500);
        }
    });

    $("#topbtn").bind("click",function () {
        $("html,body").animate({scrollTop:0},800);
    });


    /**
     * 第二部分：智慧实验室
     */

    /*系统功能一应俱全*/
    $(".lab-function-pic").hover(function () {
        $(this).find("img").attr("src","images/Systemfunction02.png");
    },function () {
        $(this).find("img").attr("src","images/Systemfunction01.png");
    });

    /*应用场景，服务对象*/
    var applyList=$(".lab-apply-center-right ul li");
    // 遍历
    applyList.each(function (index) {
        $(this).hover(function () {
            $(this).css("cursor","pointer");
            clearColor(index);
            if(index==0)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/shiping.png");
            }
            else if(index==1)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/shuichanping.png");
            }
            else if(index==2)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/jianyi.png");
            }
            else if(index==3)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/keyuan.png");
            }
            else if(index==4)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/feiqiwu.png");
            }
            else if(index==5)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/yuanxiao.png");
            }
            else if(index==6)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/yiyuan.png");
            }
            else if(index==7)
            {
                $(".lab-apply-center-left").find("img").attr("src","images/gejianyan.png");
            }
        });
    });

    //方法
    function clearColor(mIndex) {
        applyList.each(function (index) {
            if(index==mIndex)
            {
                if($(this).hasClass("lab-apply-active"))
                {
                    return;
                }
                else
                {
                    $(this).addClass("lab-apply-active");
                }
            }
            else
            {
                $(this).removeClass("lab-apply-active");
            }
        });
    }
    /*系统特点*/
    $(window).scroll(function () {
        if($(window).scrollTop()>900)
        {
                    $("#tedian-1").addClass("wow slideInLeft animated");
                    $("#tedian-2").addClass("wow slideInLeft animated");
                    $("#tedian-3").addClass("wow slideInLeft animated");
                    $("#tedian-4").addClass("wow slideInRight animated");
                    $("#tedian-5").addClass("wow slideInRight animated");
                    $("#tedian-6").addClass("wow slideInRight animated");
        }
    });
    /**
     * 第四部分：VR仿真教学平台
     */
        //子系统概况动画函数
    var $myanimate = $('#animate');
    var $opposite = $('#opposite');
    $(".wrap").hover(function(){
        $myanimate.removeClass();
        $opposite.removeClass();
        $myanimate.addClass("test");
        $opposite.addClass('test2');
    },function(){
        $myanimate.removeClass();
        $opposite.removeClass();
        $myanimate.addClass("test2");
        $opposite.addClass('test');
    });

    $(".well-item").hover(function(){
        $(this).find(".correct").children().removeClass();
        $(this).find(".opposite").children().removeClass();
        $(this).find(".correct").children().addClass("test");
        $(this).find(".opposite").children().addClass('test2');
    },function(){
        $(this).find(".correct").children().removeClass();
        $(this).find(".opposite").children().removeClass();
        $(this).find(".correct").children().addClass("test2");
        $(this).find(".opposite").children().addClass('test');
    });
    /**
     * 第四部分：我们的团队
     */
    var moreBtn=$(".m-team-introduce").find(".m-team-introduce-more");
    moreBtn.each(function (index) {
        $(this).bind("click",function () {
            //谭智锋01
           if(index==0)
           {
              $("#extend01").slideToggle("slow",function () {
                 if($("#extend01").is(":hidden"))
                 {
                     $("#more01").find("img").attr("src","images/drop.png");
                 }
                 else
                 {
                     $("#more01").find("img").attr("src","images/Packup.png");
                 }
              });
           }
           else if(index==1)
           {
               //谭智锋02
               $("#extend02").slideToggle("slow",function () {
                   if($("#extend02").is(":hidden"))
                   {
                       $("#more02").find("img").attr("src","images/drop.png");
                   }
                   else
                   {
                       $("#more02").find("img").attr("src","images/Packup.png");
                   }
               });
           }
           else if(index==2)
           {
               //谭智锋03
               $("#extend03").slideToggle("slow",function () {
                   if($("#extend03").is(":hidden"))
                   {
                       $("#more03").find("img").attr("src","images/drop.png");
                   }
                   else
                   {
                       $("#more03").find("img").attr("src","images/Packup.png");
                   }
               });
           }
           else
           {
               //谭智锋04
               $("#extend04").slideToggle("slow",function () {
                   if($("#extend04").is(":hidden"))
                   {
                       $("#more04").find("img").attr("src","images/drop.png");
                   }
                   else
                   {
                       $("#more04").find("img").attr("src","images/Packup.png");
                   }
               });
           }
        });
    });


    $(".m-team-introduce").hover(function () {
       $(this).css("box-shadow","18px 18px 20px #e6e6e6");
    },function () {
        $(this).css("box-shadow","");
    });
    /**
     * 第五部分：关于我们
     */
    var aboutList=$(".aboutus-list ul li");//列表，公司简介、联系我们、加入我们
    createAboutUsHtml();

    aboutList.each(function (index) {
        //列表点击事件
        $(this).click(function () {
            if($(this).attr("class")=="aboutus-list-active")
            {
                //如果已经是点击状态，则直接退出
                return;
            }

            if(index==0)
            {
                //点击公司简介
                aboutList.eq(index+1).removeClass("aboutus-list-active");//移除激活状态
                aboutList.eq(index+2).removeClass("aboutus-list-active");//移除激活状态
                createAboutUsHtml();
            }
            else if(index==1)
            {
                //点击联系我们
                aboutList.eq(index-1).removeClass("aboutus-list-active");//移除激活状态
                aboutList.eq(index+1).removeClass("aboutus-list-active");//移除激活状态
                createContactUsHtml();
            }
            else
            {
                //点击加入我们
                aboutList.eq(index-1).removeClass("aboutus-list-active");//移除激活状态
                aboutList.eq(index-2).removeClass("aboutus-list-active");//移除激活状态
                createJoinUsHtml();
            }
            $(this).addClass("aboutus-list-active");//添加激活状态
        });
    });

    //创建公司简介的页面
    function createAboutUsHtml() {
        var mIntroduceHtml='<div class="aboutus-cen">'+
            '<div class="aboutus-cen-title">'+
            ' <h1>公司简介</h1>'+
            '</div>'+
            '<div class="com-introduce">'+
            '<p>'+
            '福建中科中欣智能科技有限公司是中科院海西研究院的重点孵化企业之一。公司顺应时代发展的技术潮流'+
            ' ，基于中科院海西研究院虚拟制造与仿真技术中心的最新科研成果，努力在人工智能、大数据分析领域'+
            '为各行业提供最专业的解决方案和最先进的信息化产品。'+
            '</p>'+
            '<p>'+
            '中科中欣具有强大的技术团队和专业、成熟的业务团队。我们以"'+
            '<span>客户的需求，就是我们努力的目标！</span>"'+
            '为准则，一步一个脚印，用心将每个客户的项目都打造成口碑工程。'+
            '</p>'+
            '<img src="images/pic.png" alt="中科中欣">'+
            '</div>'+
            '</div>';
        $(".aboutus-container").empty();
        $(".aboutus-container").append(mIntroduceHtml);
    }

    //创建联系我们的页面
    function createContactUsHtml() {
        var mContactHtml='<div class="aboutus-cen">'+
            '<div class="aboutus-cen-title">'+
            '<h1>联系我们</h1>'+
            '</div>'+
            '<div class="aboutus-cen-list">'+
            '<ul>'+
            '<li>'+
            '<img src="images/photo.png">'+
            '<span class="title">联系电话:</span>'+
            '<span class="con">0591-83765971&nbsp;13055751666</span>'+
            '</li>'+
            '<li>'+
            '<img src="images/email.png">'+
            '<span class="title">企业邮箱:</span>'+
            '<span class="con">123456789@163.com</span>'+
            '</li>'+
            '<li>'+
            '<img src="images/address.png">'+
            '<span class="title">地址:</span>'+
            '<span class="con">福建省福州市鼓楼区湖东路208号2号楼504</span>'+
            '</li>'+
            '</ul>'+
            '</div>'+
            '<div id="m-map"></div>'+
            '</div>';

        $(".aboutus-container").empty();
        $(".aboutus-container").append(mContactHtml);
        mapAction();
    }

    //创建加入我们的页面
    function createJoinUsHtml() {
        var mJoinHtml='<div class="aboutus-cen">'+
            '<div class="aboutus-cen-title">'+
            '<h1>加入我们</h1>'+
            ' </div>'+
            '<div class="aboutus-join-list">'+
            ' <div class="join-list-title">'+
            '<div class="join-list-title-img">'+
            ' <img src="images/Head01.png" alt="Head01">'+
            '</div>'+
            '<div class="join-list-title-car">'+
            '<h1>中级JAVA研发工程师</h1>'+
            '<span>工作地点:福州</span>'+
            '</div>'+
            ' </div>'+
            '<div class="join-list-con">'+
            '<h3>岗位职责</h3>'+
            '<p>'+
            '1、分析客户需求，完成软件需求分析、功能设计级数据库设计，以及任务分解；<br/>'+
            '2、组织软件项目的编码开发、调试和实施；<br/>'+
            ' 3、负责编写相应的开发和设计文档；<br/>'+
            '4、福州协调并协助其他部门间的项目相关工作。</p>'+
            ' <h3>岗位要求</h3>'+
            ' <p>'+
            '1、2年以上JAVA项目开发经验，或一年以上JAVA项目组织经验；<br/>'+
            '2、熟练掌握各类JAVA编程框架，如Mybatis、SpringMVC等；<br/>'+
            '3、熟悉Restful接口规范，能够根据业务需要进行Restful接口定义；<br/>'+
            '4、熟悉Oracle、MySQL等主流数据库应用开发；<br/>'+
            '5、能熟悉并快速构建JAVA开发环境：Tomcat、maven、svn等等；<br/>'+
            '6、具有良好的团队协作精神，以及良好的组织管理能力。'+
            '</div>'+
            ' </div>'+
            '<!--WEB前端开发工程师-->'+
            '<div class="aboutus-join-list">'+
            '<div class="join-list-title">'+
            '<div class="join-list-title-img">'+
            '<img src="images/Head02.png" alt="Head01">'+
            '</div>'+
            '<div class="join-list-title-car">'+
            ' <h1>WEB前端开发工程师</h1>'+
            '<span>工作地点:福州</span>'+
            '</div>'+
            '</div>'+
            '<div class="join-list-con">'+
            '<h3>岗位职责</h3>'+
            '<p>'+
            '1、根据UI设计，实现PC和移动web前端的页面实现；<br/>'+
            '2、根据接口和功能设计，实现前后端Ajax请求交互；<br/>'+
            '3、与后台技术开发保持良好沟通，快速理解、消化各方需求，并落实为具体的开发工作。'+
            '</p>'+
            '<h3>岗位要求</h3>'+
            ' <p>'+
            ' 1、熟悉HTTP协议及W3C相关互联网规范，熟练XHTML、CSS、DIV、JavaScript<br/>'+
            '、Html5、jQuery、Bootstrap、Node.js等web前端页面技术；<br/>'+
            '2、有前后端分离开发经验，熟悉ajax前后端交互流程，能独立分析和设计前后端分析系统的交互逻辑；<br/>'+
            '3、了解响应式布局瀑布式布局的设计理念，熟悉模板、缓存等相关技术，并能对系统性能进行优化，提高页面响应速度；<br/>'+
            '4、具备良好的代码编程习惯级较强的文档编写能力；<br/>'+
            '5、具备强烈的进取心、求知欲及团队合作精神，有较强的沟通及协调能力；<br/>'+
            '6、能快速理解业务及接口，并独立进行前端编码以及前后端交互。'+
            '</p>'+
            '</div>'+
            '</div>'+
            '</div>';
        $(".aboutus-container").empty();
        $(".aboutus-container").append(mJoinHtml);

    }

    //用于创建地图的方法
    function mapAction() {
        var map = new AMap.Map('m-map',{
            zoom: 19,
            center: [119.307727,26.094669]
        });
        AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
            function(){
                map.addControl(new AMap.ToolBar());

                map.addControl(new AMap.Scale());

                map.addControl(new AMap.OverView({isOpen:true}));
            });
        var marker = new AMap.Marker({
            position: [119.307727,26.094669]
        });
        marker.setMap(map);
        var circle = new AMap.Circle({
            center: [119.307727,26.094669],
            radius: 80,
            fillOpacity:0.2,
            strokeWeight:1
        })
        circle.setMap(map);
        map.setFitView()
        var info = new AMap.InfoWindow({
            content:"中科中欣<br>地址:福建省福州市鼓楼区湖东路208号2号楼504",
            offset:new AMap.Pixel(0,-28)
        })
        info.open(map,marker.getPosition())
    }
});