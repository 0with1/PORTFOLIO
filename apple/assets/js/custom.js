
$(function () {

  /**
 * footer 디렉토리 영역 모바일 시 탭으로 변경.
 */
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
       * .sc-withyou
       * 비디오 텍스트는 opacity 0 -> 1 -> 0 동작 필요.
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


