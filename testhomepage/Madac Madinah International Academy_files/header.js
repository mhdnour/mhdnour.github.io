

function setSelectedTheme()
{

//this is switched by MZ coz he called from ddl the methods in wrong case
var increseFontSpan = $('.readabilityFonts span.increseFont');



if(increseFontSpan.length > 0)
{


	increseFontSpan.removeClass("activereadabilityfont");
	increseFontSpan.addClass("activereadabilityfont");
}

}

function setSelectedFont()
{
//this is switched by MZ coz he called from ddl the methods in wrong case

var darkThemeSpan = $('.readabilityTheme span.Dark');



if(darkThemeSpan.length > 0)
{


	darkThemeSpan.removeClass("activereadabilityTheme");
	darkThemeSpan.addClass("activereadabilityTheme");
}
}

$(document).ready(function () {
    $('.readabilityFonts span').on("click", function(){
		$(".readabilityFonts span").removeClass("activereadabilityfont");
		$(this).addClass("activereadabilityfont");
	});
   	$('.readabilityTheme span').on("click", function(){
		$(".readabilityTheme span").removeClass("activereadabilityTheme");
		$(this).addClass("activereadabilityTheme");
	});
	$('.drop-menu-arrow-a').click(function (e) {
		$('.sub-login-arrow-a').hide();
		 $('.sub-adm-arrow-a').hide();
		e.stopPropagation();
		e.preventDefault();
		$(".sub-menu-arrow-a").fadeToggle(100);
	});
	$('.sub-menu-arrow-a').click(function (e) {
		e.stopPropagation();
	});
	$(document).click(function () {
		$('.sub-menu-arrow-a').hide();
    });
    
    $(".readabilityFonts .increseFont").on("click", function () {
        //debugger;
        $("body").addClass("ReadabilityFonts");
        setCookie("ReadabilityFonts","ReadabilityFonts",365);
    });
    $(".readabilityFonts .normalFont").on("click", function () {
        //debugger;
        $("body").removeClass("ReadabilityFonts");
        deleteCookie("ReadabilityFonts");

    });
    $(".readabilityTheme .Dark").on("click", function () {
        //debugger;
        $("body").addClass("ReadabilityTheme");
        setCookie("ReadabilityTheme","ReadabilityTheme",365);
    });
    $(".readabilityTheme .normal").on("click", function () {
        //debugger;
        $("body").removeClass("ReadabilityTheme");
        deleteCookie("ReadabilityTheme");
    });

    
    function setCookie(name,value,days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }

    function deleteCookie(name) {
        var d = new Date;
        d.setTime(d.getTime() - 24*60*60*1000*1);
        document.cookie = name + "=;path=/;expires=" + d.toGMTString();
    }
});

$(document).ready(function () {
    if ($(".sf-menu li a[href$='/en/violation.reporting.aspx']").length > 0) {
        var ele = $(".sf-menu li a[href$='/en/violation.reporting.aspx']")[0];
        ele.href = "https://casereporting.gov.abudhabi/ComplaintRegister/complaint.html?dept=RENU&locale=en#";
        ele.target = "_blank";
    }

    if ($(".sf-menu li a[href$='/ar/violation.reporting.aspx']").length > 0) {
        var ele = $(".sf-menu li a[href$='/ar/violation.reporting.aspx']")[0];
        ele.href = "https://casereporting.gov.abudhabi/ComplaintRegister/complaint.html?dept=RENU&locale=ar#";
        ele.target = "_blank";
    }

    if ($(".mob_menu_sty ul li a[href$='/en/violation.reporting.aspx']").length > 0) {
        var ele = $(".mob_menu_sty ul li a[href$='/en/violation.reporting.aspx']")[0];
        ele.href = "https://casereporting.gov.abudhabi/ComplaintRegister/complaint.html?dept=RENU&locale=en#";
        ele.target = "_blank";
    }

    if ($(".mob_menu_sty ul li a[href$='/ar/violation.reporting.aspx']").length > 0) {
        var ele = $(".mob_menu_sty ul li a[href$='/ar/violation.reporting.aspx']")[0];
        ele.href = "https://casereporting.gov.abudhabi/ComplaintRegister/complaint.html?dept=RENU&locale=ar#";
        ele.target = "_blank";
    }

	if (window.location.href.indexOf("/ar/") > -1) {
		var cssId = 'myArabicCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = 'https://tcaabudhabi.ae/style%20library/tcac/assets/arabic.css';
			link.media = 'all';
			head.appendChild(link);
		}
	}
});



var arabic = false;
if (window.location.href.indexOf("/ar/") > -1) {
    arabic = true;
}

function heroSize() {
    $(".big_bnr_h").height($(window).height()-$(".header").height()-124);
}
$(document).ready(function () {
    if ($(".big_bnr_h").length > 0) {
        heroSize();
        $(window).resize(function () {
            heroSize();
        });
    }
});



$(document).ready(function () {
    /*
	$("input:checkbox:not(:checked)").each(function() {
        var column = "table ." + $(this).attr("name");
        $(column).hide();
    });
    
    $("input:checkbox").click(function(){
        var column = "table ." + $(this).attr("name");
        $(column).toggle();
    });
 */
	$(".rel_img").each(function() {
		var el = $(this);
		el.attr("style","background-image: url('"+el.attr("bg")+"')");
    });


});


///--------------------Equal height----------------------

equalheight = function (container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {
        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;
        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

function resizeAll() {
	setTimeout(function() {
	    equalheight('.related_links dt');
	    equalheight('.h_sec_atgry');
	    equalheight('.inn_list_item');
	    equalheight('.equalheight');
	}, 1);
}

$(window).load(function () {
    equalheight('.related_links dt');
    equalheight('.h_sec_atgry');
    equalheight('.inn_list_item');
    equalheight('.equalheight');
});


$(window).resize(function () {
    equalheight('.related_links a');
    equalheight('.h_sec_atgry');
    equalheight('.inn_list_item');
    equalheight('.equalheight');
});

//window.setInterval(resizeAll, 1500);



///Search----------------------

$(document).ready(function () {
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function () {
        return false;
    });
    searchBox.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });

});

//--------------------------mobile menu----------------------->


$(document).ready(function () {
$("#mob_v_menu a").click(function(e){
		if($(this).next('ul').length){
			e.preventDefault();
			$(this).next().toggle('slow');
			$(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
		}
	});
});

///--------------------Carousel----------------------///

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        rtl: arabic,
        items: 2,
        margin: 30,
        pagination: true,
        lazyLoad: true,
        nav: true,
        enter: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            756: {
                items: 3
            },
            1000: {
                items: 4
            }

        }

    });


    $('.owl-carousel1').owlCarousel({
        rtl: arabic,
        items: 1,
        margin: 30,
        pagination: true,
        lazyLoad: true,
        nav: true,
        enter: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            756: {
                items: 1
            },
            1000: {
                items: 1
            }

        }

    });

    $('.owl-carousel2').owlCarousel({
        rtl: arabic,
        items: 1,
        pagination: false,
        lazyLoad: true,
        nav: true,
        enter: true,
         autoplay: true,
        autoPlaySpeed: 3000,
        loop:true,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            756: {
                items: 1
            },
            1000: {
                items: 1
            }

        }

    });

	if ($(".owl-carousel3 .owl-item").length > 1) {
	    $('.owl-carousel3').owlCarousel({
	        rtl: arabic,
	        items: 1,
	        pagination: false,
	        lazyLoad: true,
	        nav: false,
	        enter: true,
	         autoplay: true,
	        autoPlaySpeed: 3000,
	        loop:true,
	        autoplayHoverPause:true,
	        animateOut: 'fadeOut',
	        responsive: {
	            0: {
	                items: 1
	            },
	            550: {
	                items: 1
	            },
	            756: {
	                items: 1
	            },
	            1000: {
	                items: 1
	            }
	
	        }
	    });
	} else if ($(".owl-carousel3 .owl-item").length == 1) {
		$('.owl-carousel3').show();
	}
    
    
    $('.owl-carousel4').owlCarousel({
        rtl: arabic,
        items: 1,
        pagination: false,
        lazyLoad: true,
        nav: false,
        enter: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            756: {
                items: 1
            },
            1000: {
                items: 1
            }

        }

    });

});


///--------------------Accordion----------------------///

$(document).ready(function ($) {

    if ($(".accordion_example1").length) {
        $(".accordion_example1").smk_Accordion();
    }

    if ($(".accordion_example2").length) {
        $(".accordion_example2").smk_Accordion({
            closeAble: true, //boolean
        });
    }

    if ($(".accordion_example3").length) {
        $(".accordion_example3").smk_Accordion({
            showIcon: false, //boolean
        });
    }

    if ($(".accordion_example4").length) {
        $(".accordion_example4").smk_Accordion({
            closeAble: true, //boolean
            closeOther: false, //boolean
        });
    }

    if ($(".accordion_example5").length) {
        $(".accordion_example5").smk_Accordion({
            closeAble: true
        });
    }

    if ($(".accordion_example6").length) {
        $(".accordion_example6").smk_Accordion();
    }

    if ($(".accordion_example7").length) {
        $(".accordion_example7").smk_Accordion({
            activeIndex: 2 //second section open
        });
    }

    if ($(".accordion_example8").length) {
        $(".accordion_example8").smk_Accordion();
    }

});



//-------------------Tooltip buy ticket and add to calander ----------------

$(document).ready(function () {

    $('.drop-menu-arrow').click(function (e) {
        $('.sub-login-arrow').hide();
         $('.sub-adm-arrow').hide();
        e.stopPropagation();
        e.preventDefault();
        $(".sub-menu-arrow").fadeToggle(100);
    });
    $('.sub-menu-arrow').click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $('.sub-menu-arrow').hide();
    });


    $('.drop-login-arrow').click(function (e) {
        $('.sub-menu-arrow').hide();
        $('.sub-adm-arrow').hide();
        e.stopPropagation();
        e.preventDefault();
        $(".sub-login-arrow").fadeToggle(100);
    });
    $('.sub-login-arrow').click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $('.sub-login-arrow').hide();
    });
    
    
    $('.drop-menutop-arrow').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".sub-menutop-arrow").fadeToggle(100);
    });
    $('.sub-menutop-arrow').click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $('.sub-menutop-arrow').hide();
    });
    
    
    
     $('.drop-adm-arrow').click(function (e) {
         $('.sub-menu-arrow').hide();
         $('.sub-login-arrow').hide();
        e.stopPropagation();
        e.preventDefault();
        $(".sub-adm-arrow").fadeToggle(100);
    });
    $('.sub-adm-arrow').click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $('.sub-adm-arrow').hide();
    });



});
//-------------------------------------------


//--------------------------hide and show----------------------->
		

		function hideshow(which) {
			if (!document.getElementById)
				return
			if (which.style.display == "block")
				which.style.display = "none"
			else
				which.style.display = "block"
		}


//--------------------------Append----------------------->

$(document).ready(function() {
    if ($(window).width() < 790){	
    $("body .comn_header_cnr").append($(".appt_div").html());
    }
    
});

// here
$(document).ready(function() {
	$(".red_btn_r").each(function() {
		if (arabic) $(this).css("background-position", 20+"px center");
		else $(this).css("background-position", $(this).outerWidth()-20+"px center");
	});
});

//-------------------Menu ----------------

$(document).ready(function () {

    // initialise plugin
    var example = $('#example').superfish({
        //add options here if required
    });

    // buttons to demonstrate Superfish's public methods
    $('.destroy').on('click', function () {
        example.superfish('destroy');
    });

    $('.init').on('click', function () {
        example.superfish();
    });

    $('.open').on('click', function () {
        example.children('li:first').superfish('show');
    });

    $('.close').on('click', function () {
        example.children('li:first').superfish('hide');
    });
});




// arrow_bnner_move

$(document).ready(function () {
	$(".arrow_bnner_move").click(function (e) {
		e.preventDefault();
		var eh = 0;
		if ($(".home_banner").css("position") == "fixed") {
			eh = $(".home_banner").height();
		}
		$('html,body').animate({scrollTop:$(".home_sec2").offset().top-eh+0}, 600);
	});
	function float_arrow() {
		$(".arrow_bnner_move").animate({marginBottom:"0px"}, 500);
		$(".arrow_bnner_move").animate({marginBottom:"10px"}, 500, float_arrow);
	} float_arrow();

    });

//-------------------Home Sec Tab ----------------

$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);

            $name.text($tab.text());

            $info.show();
        }
    });

    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });
});


$(document).ready(function () {
	// fix calendar position in contact page
	$(".form_feld input").mousedown(function(){
		var ths = $(this);
		setTimeout(function() {
			$(".ajax__calendar").css('top',ths.offset().top+'px');
		}, 1);
	});
});

$(document).ready(function () {
	if ($('.socialmw').length){
		$('.inn_left').css('width','100%');
		$('.inn_right').hide();
	}
});

//$(document).ready(function () {
//	$(".inline").colorbox({
//		// inline:true,
//		// width: "100%",
//		// height: "auto",
//		// maxWidth: 900
//	});
//	$(".video").colorbox({
//		iframe:true,
//		width: "100%",
//		height: "500",
//		maxWidth: 900
//	});
//	// <a class='video' href="https://www.youtube.com/embed/JsApJY8wpWg?rel=0&showinfo=0&autoplay=1">Video</a>
//});

$(document).ready(function () {
	if ($('.mapcnr_sty').length) {
		$('.inner_header_cnr').css('margin-top','49px');
	}
});




// multilevel accordion plugin
jQuery.fn.multiAccordion = function(_options) {
    // default options
    var _options = jQuery.extend({
        activeClass: 'active',
        opener: '.opener',
        slider: '.slide',
        slideSpeed: 300,
        collapsible: true,
        event: 'click'
    }, _options);

    return this.each(function() {
        // options
        var _event = _options.event;
        var _accordion = jQuery(this);
        var _items = _accordion.find(':has(' + _options.slider + ')');

        _items.each(function() {
            var _holder = $(this);
            var _opener = _holder.find(_options.opener);
            var _slider = _holder.find(_options.slider);
            _opener.bind(_event, function() {
                if (!_slider.is(':animated')) {
                    if (_holder.hasClass(_options.activeClass)) {
                        if (_options.collapsible) {
	                        $(".socil_media_share_cnr").fadeOut(100);
                            _slider.slideUp(_options.slideSpeed, function() {
	                            //$("html, body").animate({ scrollTop: _opener.offset().top-5+"px" });
                                _holder.removeClass(_options.activeClass);
					            resizeAll();
					            $(".socil_media_share_cnr").fadeIn(100);
                            });
                        }
                    } else {
                        var _levelItems = _holder.siblings('.' + _options.activeClass);
                        _holder.addClass(_options.activeClass);
                        $(".socil_media_share_cnr").fadeOut(100);
                        _slider.slideDown(_options.slideSpeed, function() {
                            $("html, body").animate({ scrollTop: _opener.offset().top-5+"px" });
				            resizeAll();
				            $(".socil_media_share_cnr").fadeIn(100);
                        });

                        // collapse others
                        _levelItems.find(_options.slider).slideUp(_options.slideSpeed, function() {
                            //$("html, body").animate({ scrollTop: _opener.offset().top-5+"px" });
                            _levelItems.removeClass(_options.activeClass);
                        })
                    }
                }
                return false;
            });
            if (_holder.hasClass(_options.activeClass)) _slider.show(); else _slider.hide();
        });
    });
}


// accordion function
$(document).ready(function () {
    $('ul.faq-area').multiAccordion({
        activeClass: 'faq-section-open',
        opener: 'div.topping',
        slider: '.holder > .frame > div.acc-slide',
        collapsible: true,
        slideSpeed: 200
    });
    $('ul.sublist').multiAccordion({
        activeClass: 'active-row',
        opener: 'h4 > a',
        slider: '>div.text',
        collapsible: true,
        slideSpeed: 200
    });
    if (window.location.hash.indexOf("svc") > -1) {
	    faq1 = window.location.hash.replace("#svc","").split("-");
	    faq2 = faq1[1]-1;
	    faq1 = faq1[0]-1;
	    console.log(faq1,faq2);
	    setTimeout(function() {
		    $(".faq-section-open").removeClass("faq-section-open");
		    $(".faq-section:eq("+faq1+")").addClass("faq-section-open");
		    $(".faq-section:eq("+faq1+")").find(".acc-slide").show();
		    $(".active-row").removeClass("active-row");
		    $(".faq-section .text").hide();
		    $(".faq-section-open .acc-slide > .sublist > li:eq("+faq2+")").addClass("active-row");
		    $(".faq-section-open .acc-slide > .sublist > li:eq("+faq2+") .text").show();
            $("html, body").animate({ scrollTop: $(".faq-section-open .acc-slide > .sublist > li:eq("+faq2+")").offset().top-5+"px" });
	    }, 1);
    }
});