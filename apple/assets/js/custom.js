$(function () {

  /**
 * footer 디렉토리 영역 모바일 시 탭으로 변경.
 */
  $(".footer .directory-area strong").click(function () {
    $(this).toggleClass("is-active");
    $(this).next(".directory-list").toggleClass("is-active");
  })

  /**
 * sc-sticky 비디오 영역 1068 축소시 video-appear 클래스 제거.
 * 1068이상 리사이즈 시에도 완전 제거.
 */
  $(window).on('resize', function () {
    ww = $(window).width();
    if (ww < 1068) {
      $(".sc-sticky").removeClass("video-appear");
    } else {
      //
    }
  });

  /**
  * 비디오 영역 감지 후 종료 시 이미지로 교체 
  */
  setInterval(function (e) {
    $.each($(".video-wrap video").not("#dance-video"), function () {
      if ($(this).prop('ended')) {
        $(this).parent().addClass('none')
      }
    })
  }, 200);




  /**
    * 메인 비디오 컨트롤
    */
  const mainVideo = document.getElementById('withyou-video')


  $('.sc-sticky .btn-autoplay').click(function () {

    if ($('.btn-icon').hasClass('paused')) {
      $('.btn-icon').removeClass('paused')
      mainVideo.play();
    } else {
      $('.btn-icon').addClass('paused')
      mainVideo.pause();
    }

  });



  /**
  * 댄스비디오 버튼 컨트롤
  * '다시 재생' 버튼 추가필요
  */

  const btnReplay = $('.sc-center .btn-replay');
  const btnPaused = $('.sc-center .btn-paused');
  const btnPlay = $('.sc-center .btn-play');
  const danceVideo = $('#dance-video');

  btnReplay.on('click', function () {
    btnReplay.hide();
    danceVideo.get(0).play();
    btnPlay.hide();
    btnPaused.show();
  });
  btnPlay.on('click', function () {
    danceVideo.get(0).play();
    btnReplay.hide();
    btnPlay.hide();
    btnPaused.show();
  });
  btnPaused.on('click', function () {
    danceVideo.get(0).pause();
    btnReplay.hide();
    btnPlay.show();
    btnPaused.hide();
  });
  setInterval(function () {
    if (danceVideo.prop("ended")) {
      btnReplay.show();
      btnPlay.hide();
      btnPaused.hide();
    }
  });


});


/**
 * gsap 시작
 */
$(function () {
  ////////////// matchMedia
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({

    "(min-width: 1068px)": function () {

      /**
       * 화면 실행 시.
       * 1068 이후 텍스트 동작.
      */
      const loadMotion = gsap.timeline();
      loadMotion
        .addLabel('a')
        .to(".title-blue", { y: +60, opacity: 1, duration: 1 }, 'a')
        .to(".title-blue", { y: 0, opacity: 0, duration: 0.3 }, 'a+1')
        .to(".title-pink", { opacity: 0, duration: 0.3 }, 'a+1')
        .to(".title-yellow", { y: -60, opacity: 1, duration: 1 }, 'a')
        .to(".title-yellow", { y: 0, opacity: 0, duration: 0.3 }, 'a+1')
        .to(".main-txt.wri", { y: -70, opacity: 1, duration: 0.3 }, 'a+1')
        .to(".main-txt.drw", { y: 0, opacity: 1, duration: 0.3 }, 'a+1')
        .to(".main-txt.fal", { y: 70, opacity: 1, duration: 0.3 }, 'a+1')
        .to(".sub-wrap", { opacity: 1, duration: 0.3 }, 'a+1')


      /**
       * .sc-fallin
       * 1068 이후 텍스트 위로 움직이는 동작
      */
      gsap.to('.sc-fallin .main-txt', {
        scrollTrigger: {
          start: "0% 0%",
          end: "100% 0%",
          //markers: true,
          scrub: 0,

        },
        ease: 'none',
        yPercent: -300,
        stagger: 0.1,
      });

      /**
    * .sc-sticky
    * 1068 이후 버튼 등장
   */
      ScrollTrigger.create({
        trigger: '.sc-sticky',
        scrub: 1,
        start: '0 90%',
        end: '108% top',
        //pin: true,
        //markers: true,
        toggleClass: "btn-appear",
      });

      /**
      * .sc-withyou
      * 비디오 텍스트는 opacity 0 -> 1 -> 0 동작 필요.
     */
      const wityoutxtList = document.querySelectorAll('.sc-sticky.video-appear .video-txt');
      gsap.set('.sc-sticky.video-appear .video-txt', { opacity: 0, })

      wityoutxtList.forEach(element => {

        const stickyTxt = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "0% 60%",
            end: "100% 50%",
            scrub: 0,
            //markers: true,
          },
          ease: 'none'
        })
        stickyTxt
          .to(element, { opacity: 1 })
          .to(element, { opacity: 0 })

      });
    },

    "all": function () {
    }
  })
});


