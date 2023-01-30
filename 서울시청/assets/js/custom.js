$(function(){

    /**
     * alt + shift + a 주석 지정
     * 
     */
  
  $('.notice .close .close-btn').click(function (e) {
      e.preventDefault();
      $('.notice').stop().slideUp();
  });
  

  /*언어 선택*/
    $('#langBtn').click(function () { 
        url = $('#langList').val(); /*선택에 대한 값 지정*/
        // console.log(url);
        window.open(url);
    });





    /**
     * 
     * @a = 000
     * @b
     * @c
     * 
     * 스와이퍼 다른 리셋방법 알아보기
     */

  /*초기화값*/
  // slideFlag1 = 0;
  // slideFlag2 = 1;

  // $('.sc-visual h3').click(function (e) {
  //   e.preventDefault();
  //   $(this).parent().addClass('active').siblings('.slide').removeClass('active'); /*각 슬라이드 구분하며 active 생성*/
  //   if ($(this).parent().hasClass('slide1')) { /*첫번째 slide1을 선택했다면*/
  //     if (slideFlag1 == 1) { /* 2. 조건추가 - 두번눌렀을때 다시 초기화 안되게 -*/
  //       slide1.autoplay.start(); /*첫번째 slide1 자동 실행*/
  //       slide2.autoplay.stop(); /*첫번째 슬라이드 실행함으로써 두번째 slide2 멈춤*/
  //       slide2.slideTo(0); /*첫번째 슬라이드 실행함으로써 두번째 slide2 스와이퍼 초기화*/
  //       slideFlag1 = 0;
  //       $('.sc-visual .autoplay').removeClass('active');
  //     }
  //     slideFlag2 = 1;
  //   } else {
  //     if (slideFlag2 == 1) {
  //       slide2.autoplay.start(); /*두번째 slide2 자동 실행*/
  //       slide1.autoplay.stop(); /*두번째 슬라이드 실행함으로써 첫번째 slide1 멈춤*/
  //       slide1.slideTo(0); /*두번째 슬라이드 실행함으로써 첫번째 slide1 스와이퍼 초기화*/
  //       slideFlag2 = 0;
  //       $('.sc-visual .autoplay').removeClass('active');
  //     }
  //     slideFlag1 = 1;
  //   }
  // })

  /*초기화값*/
  slideFlag1 = 0;
  slideFlag2 = 1;
  console.log('슬라이드 초기화상태');
  
  $('.sc-visual h3').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.slide').removeClass('active'); /*각 슬라이드 구분하며 active 생성*/
    if ($(this).parent().hasClass('slide1')) { /*첫번째 slide1을 선택했다면*/
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



  $('.slide1 .autoplay').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('paused')) { //paused가 있으면
      $(this).removeClass('paused') //paused를 제거하고,
      slide1.autoplay.start(); //slide1을 자동 재생한다.
    } else { //paused가 없으면
      $(this).addClass('paused') //paused를 추가하고,
      slide1.autoplay.stop(); //slide1을 정지한다.
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


    $('.sc-related .related').click(function (e) { 
        if($(this).siblings('.related-area').length > 0){ /*length는 태그의 길이 = .related-area라는 태그가 있을 때*/
            e.preventDefault();
            if($(this).hasClass('active')){ /*열려진 상태에서 한번더 누를때 닫혀져야함*/
                $('.related-area').stop().slideUp();
                $('.sc-related .related').removeClass('active')
            }else{
                $('.related-area').stop().slideUp(); /*전체가 닫히고 열릴려면 .active가 없을 때 슬라이드 다 닫힘*/
                $('.sc-related .related').removeClass('active') /*전체가 닫히고 열릴려면 .active가 없을 때 active 제거*/
                $(this).siblings('.related-area').stop().slideDown(); /*닫혀진 상태에서 누를때 열림*/
                $(this).addClass('active') /*닫혀진 상태에서 누를때 .active 추가*/
            }
        }
    });

  /*탭을 누르고 가장 첫번째 탭 이전으로 가면(shift+tab) .related-area 닫기*/
  /**
   * keydown: 키보드를 누를 때 실행. 키를 누르고 있을 때 단 한번만 실행
   * keypress: 키보드를 누를 때 실행. 키를 누르고 있을 때 계속 실행
   * keyup: 누른 키에서 손을 뗄 때 실행
   * 
   */
  $('.related-area .sub-item:first-child').keydown(function (e) { /*첫번째 sub-item에*/
      /*console.log(e.keyCode);*/ /*탭키는 9번*/
        key = e.keyCode;
        if(key === 9 && e.shiftKey){  /*탭키 + 쉬프트키를 누르면 */
            $('.related-area').stop().slideUp();
            $('.sc-related .related').removeClass('active')
        }
    });
    $('.related-area .sub-item:last-child').keydown(function (e) { 
        key = e.keyCode;
        if(key === 9 && !e.shiftKey){
            $('.related-area').stop().slideUp();
            $('.sc-related .related').removeClass('active')
        }
    });






      



    
    
    
    /*하단 슬라이드*/
    var bannerSlide = new Swiper(".sc-banner2 .swiper", { /*bannerSlide라는 이름을 지정*/
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

    $('.sc-banner2 .autoplay').click(function (e) { 
        e.preventDefault();

        if($(this).hasClass('active')){
            bannerSlide.autoplay.start();
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
            bannerSlide.autoplay.stop();
        }
        
    });

  /*올라가는 버튼*/
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 100){
            $('.fix-top').addClass('active');
        }else{
            $('.fix-top').removeClass('active');
        }
    })

    $('.fix-top').click(function (e) { 
        e.preventDefault();
        // $('html,body').animate({
        //     scrollTop:0
        // },300);
        //제이쿼리 방식
        window.scrollTo({top:0,behavior:'smooth'})
        //자바스크립트 방식
    });


})
