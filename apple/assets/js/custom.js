/* 실행 */

/**
 * footer 디렉토리 영역 모바일 시 탭으로 변경.
 */
$(function () {
  $(".footer .directory-area strong").click(function () {
    $(this).toggleClass("is-active");
    $(this).next(".directory-list").toggleClass("is-active");
  })

  /**
   * withyou 비디오 영역 1068 축소시 change-image 클래스 추가.
   */
  $(window).on('resize', function () {
    ww = $(window).width();
    if (ww < 1068) {
      $(".sc-withyou").addClass("change-image");
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


  $('.sc-withyou .btn-autoplay').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      mainVideo.play();
    } else {
      $(this).addClass('active')
      mainVideo.pause();
    }

  });


  /*비디오 스크롤 버튼*/
  $(window).scroll(function () {
    curr = $(this).scrollTop();
    console.log(curr);
    if (curr >= 100 && curr <= 3600) {
      $('.autoplay').addClass('fixed');
      $('.autoplay').removeClass('settled');
    } else if (curr < 100) {
      $('.autoplay').removeClass('fixed');
      $('.autoplay').removeClass('settled');
    } else if (curr > 3600) {
      $('.autoplay').removeClass('fixed');
      $('.autoplay').addClass('settled');
    }
  })

  /*댄스 비디오 종료 시 다시 재생 버튼으로 변경.*/
  const danceVideo = document.getElementById('dance-video')
  setInterval(function () {
    if ($("#dance-video").prop("ended")) {
      //영상종료 후 진행할 함수 입력부분
      $('.center-video-paused').addClass('replay');
      $('.center-video-paused').children('span').text('다시 재생');
    }
  });


  /*replay 버튼*/
  $('.center-video-paused').click(function (e) {
    if ($(this).hasClass('replay')) {
      danceVideo.play();
      $(this).removeClass('replay');
    }
  });

  /*댄스비디오 버튼 컨트롤 */
  $('.center-video-paused').click(function (e) {
    //e.preventDefault();
    if ($(this).hasClass('paused')) {
      danceVideo.play();
      $(this).removeClass('paused');
      $(this).children('span').text('일시 정지');
    } else if ($(this).hasClass('replay')) {
      danceVideo.get(0).play();
      $(this).removeClass('replay');
    } else {
      $(this).addClass('paused');
      $(this).children('span').text('재생');
      danceVideo.pause();
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
      })
    },

    "all": function () {

      /**
      * ~ 전체
      * (1068 이후에만 비디오 존재)
      * 비디오 내 텍스트 동작
      */
      const wityoutxtList = document.querySelectorAll('.sc-withyou .video-txt');
      gsap.set('.sc-withyou .video-txt', { opacity: 0, })

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
    }
  })
});
