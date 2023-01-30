$(function () {










  


  var $maintab = $('.maintab-list');
  
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 0) {
  //     $maintab.addClass('fixed');
  //   } else {
  //     $maintab.removeClass('fixed');
  //   }
  // })






/*메인 비주얼 슬라이드*/
var visualSlide = new Swiper(".visual-slide", {
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$('.visual-slide .autoplay').click(function (e) {
  e.preventDefault();

  if ($(this).hasClass('active')) {
    visualSlide.autoplay.start();
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
    visualSlide.autoplay.stop();
  }

});


/*배너 슬라이드*/
var bannerSlide = new Swiper(".banner-slide", {
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*가이드 슬라이드 잘 안됨*/

/*컨셉 슬라이드 잘 안됨*/



/*tryon 슬라이드*/
var swiper = new Swiper(".tryon-slide", {
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




  var swiper = new Swiper(".guide-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".guide-pagi",
      clickable: true,
    },
  });


    $('.tab-item').click(function (e) {
      e.preventDefault();
      const target = $(this).data('target');

      $(this).addClass('on').siblings().removeClass('on');
      $(target).addClass('on').siblings().removeClass('on');
    })

  var swiper = new Swiper(".concept-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".concept-pagi",
      clickable: true,
    },
  });


  $('.group-logo .logo-arrow').click(function () {
    $('.logopopup').addClass('active')
    $('body').css('overflow', 'hidden');
  });
  $('.logopopup .close').click(function () {
    $('.logopopup').removeClass('active')
    $('body').css('overflow', 'visible');
  });

  /*올라가는 버튼*/
  $(window).scroll(function () {
    curr = $(this).scrollTop();
    if (curr > 100) {
      $('.fix-top').addClass('active');
    } else {
      $('.fix-top').removeClass('active');
    }
  })

  $('.fix-top').click(function (e) {
    e.preventDefault();
    // $('html,body').animate({
    //     scrollTop:0
    // },300);
    //제이쿼리 방식
    window.scrollTo({ top: 0, behavior: 'smooth' })
    //자바스크립트 방식
  });



})
