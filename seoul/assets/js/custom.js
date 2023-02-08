$(function () {

  /**
   * 최상단 공지 추가.
   */

  $('.notice .close .close-btn').click(function (e) {
    e.preventDefault();
    $('.notice').stop().slideUp();
  });


  /*기본 언어 선택*/
  $('#langBtn').click(function () {
    url = $('#langList').val(); /*선택에 대한 값 지정*/
    // console.log(url);
    window.open(url);
  });


  /**
   * @메인슬라이드조절
   * 버튼을 누를 때마다 초기화.
   * 같은 버튼을 두번 눌렀을 때는 default x 
   */

  /*초기화값*/
  slideFlag1 = 0;
  slideFlag2 = 1;

  $('.sc-visual h3').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.slide').removeClass('active'); 
    if ($(this).parent().hasClass('slide1')) { 
      if (slideFlag1 == 1) {  /* 2. 조건추가 - 두번눌렀을때 다시 초기화 안되게 -*/
        slide1.slideTo(0);
        slide2.slideTo(0);
        slide2.autoplay.stop();
        slide1.autoplay.start();
        slideFlag1 = 0;
        $('.sc-visual .autoplay').removeClass('active');
      }
      slideFlag2 = 1;
    } else {
      if (slideFlag2 == 1) {
        slide1.slideTo(0);
        slide2.slideTo(0);
        slide1.autoplay.stop();
        slide2.autoplay.start();
        slideFlag2 = 0;
        $('.sc-visual .autoplay').removeClass('active');
      }
      slideFlag1 = 1;
    }
  })


  /*첫번째 슬라이드*/
  var slide1 = new Swiper(".slide1 .swiper", {
    observer: true,
    observeParents: true,
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  /*두번째 슬라이드*/
  var slide2 = new Swiper(".slide2 .swiper", {
    observer: true,
    observeParents: true,
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  /*슬라이드 재생 및 일시 정지*/
  $('.slide1 .autoplay').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('paused')) { 
      $(this).removeClass('paused') 
      slide1.autoplay.start(); 
    } else { 
      $(this).addClass('paused') 
      slide1.autoplay.stop(); 
    }
  });

  $('.slide2 .autoplay').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('paused')) {
      slide2.autoplay.start();
      $(this).removeClass('paused')
    } else {
      $(this).addClass('paused')
      slide2.autoplay.stop();
    }
  });

  /**
  * @클릭시슬라이드업다운
  * 
  */
  $('.sc-related .related').click(function (e) {
    if ($(this).siblings('.related-area').length > 0) {
      e.preventDefault();
      if ($(this).hasClass('active')) { 
        $('.related-area').stop().slideUp();
        $('.sc-related .related').removeClass('active')
      } else {
        $('.related-area').stop().slideUp(); 
        $('.sc-related .related').removeClass('active') 
        $(this).siblings('.related-area').stop().slideDown();
        $(this).addClass('active') 
      }
    }
  });


  /**
* @탭동작
* 첫번째에서 shift-tab (이전) 누를 시 슬라이드 닫힘.
* 마지막에서 tab (다음) 누를 시 슬라이드 닫힘.
*/
  $('.related-area .sub-item:first-child').keydown(function (e) { 
    console.log(e.keyCode);
    key = e.keyCode;
    if (key === 9 && e.shiftKey) {  
      $('.related-area').stop().slideUp();
      $('.sc-related .related').removeClass('active')
    }
  });
  $('.related-area .sub-item:last-child').keydown(function (e) {
    key = e.keyCode;
    if (key === 9 && !e.shiftKey) {
      $('.related-area').stop().slideUp();
      $('.sc-related .related').removeClass('active')
    }
  });



  /*하단 슬라이드*/
  var bannerSlide = new Swiper(".sc-banner2 .swiper", { 
    slidesPerView: 3,
    spaceBetween: 43,
    loop: true,
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });



  /*하단 슬라이드 재생 및 일시 정지*/
  $('.sc-banner2 .autoplay').click(function (e) {
    e.preventDefault();

    if ($(this).hasClass('active')) {
      bannerSlide.autoplay.start();
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
      bannerSlide.autoplay.stop();
    }

  });




  /*최상단으로 올라가는 버튼*/
  $(window).scroll(function () {
    curr = $(this).scrollTop();
    if (curr > 100) {
      $('.btn-fix-top').addClass('active');
    } else {
      $('..btn-fix-top').removeClass('active');
    }
  })

  $('..btn-fix-top').click(function (e) {
    e.preventDefault();
    // $('html,body').animate({
    //     scrollTop:0
    // },300);
    //제이쿼리 방식
    window.scrollTo({ top: 0, behavior: 'smooth' })
    //자바스크립트 방식
  });


})
