$(document).ready(function() {
    $(".burger").on("click", function(){
        $(".burger").toggleClass("on");
        $(".aside-sidebar").toggleClass("aside-sidebar__open");
        $("body").toggleClass("aside-sidebar__openoverlay");
    });
    $(".aside-sidebar__overlay").on("click",function(){
        $(".aside-sidebar").removeClass("aside-sidebar__open");
        $("body").removeClass("aside-sidebar__openoverlay");
        $(".burger").removeClass("on");
    });

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ["page1","page2","page3","page4","page5","page6","page7","page8","page9"],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': []
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){
			if (nextIndex == 4 ) {
                jQuery('.skillbar').each(function(){
                    jQuery(this).find('.skillbar-bar').animate({
                        width:jQuery(this).attr('data-percent')
                    },3000);
                });
            }
			else  {
                jQuery('.skillbar').each(function(){
                    jQuery(this).find('.skillbar-bar').animate({
                        width:0
                    });
                });
            }

		},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
    $(".mCustomScrollbar").mCustomScrollbar({
        mouseWheelPixels: 400
    });
});
particlesJS.load('particles-js', 'particles.json', function() {
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

let myFunc = function(){
    $('body').on('click', '.alx-pp-arrows-up', function() {
        $.fn.pagepiling.moveSectionUp();
    });
    $('body').on('click', '.alx-pp-arrows-down', function() {
        $.fn.pagepiling.moveSectionDown();
    });
}
myFunc();
/* clients slider animation setting  */ 
let animDuration = 4000;
let a =  {
  b: $(".logo-slider").length,
  c:0
}
function set_slider() {
  if(a.c == a.b) {
    a.c = 0;
  }
  $(".logo-slider").removeClass("active");
  $(".logo-slider[data-id=\"" + a.c + "\"]").addClass("active");

  a.c++;
}
let x = setInterval(set_slider, animDuration)
$(".logo-slider").mouseenter(function(){
    clearInterval(x)
});
$(".logo-slider").mouseleave(function(){
    x = setInterval(set_slider, animDuration)
});
set_slider()
/* end clients anim settings*/ 
var params = {
  count: $(".services__content-right-container").length,
  now: 0
}
function set_active() {
  if(params.now == params.count) {
    params.now = 0;
  }
  $(".services__content-right-container").removeClass("active");
  $(".services__content-right-container[data-id=\"" + params.now + "\"]").addClass("active");

  params.now++;
}
let timer = setInterval(set_active, animDuration)
$(".services__content-right-container").mouseenter(function(){
    clearInterval(timer)
});
$(".services__content-right-container").mouseleave(function(){
    timer = setInterval(set_active, animDuration)
});
set_active();
var $grid = $('.grid').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows'
});

// bind filter button click
$('.portfolio-control').on( 'click', 'li', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue =  filterValue;
  $grid.isotope({ filter: filterValue });
});

var btnContainer = document.getElementById("portfolio-js");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByTagName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("is-active");
    current[0].className = current[0].className.replace(" is-active", "");
    this.className += " is-active";
  });
}

$(document).ready(function(){
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    nav: false,
    dots: true,
    arrows: false,
    appendDots:$(".slider__dots"),
    customPaging: function(slick,index) {
        if (index < 9 ) {return '<button>0' + (index + 1) + '</button>';}
        else {
        return '<button>' + (index + 1)  + '</button>';
        }
    },
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});
$(".testimonial__nav-next").click(function(e) { // Added a '.'
    $(".slicl-carousel").slick('slickNext'); // Switched to '.slick-slider'
});
$(".testimonial__nav-next").click(function(e) { // Added a '.'
    $(".slick-carousel").slick('slickPrev'); // Switched to '.slick-slider'
});

