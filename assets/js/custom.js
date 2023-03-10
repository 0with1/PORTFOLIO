$(function () {





  // setTimeout(() => {
  //   $('.load').addClass('hide')
  // }, 1000);


  /*  $(".bg-change01").mouseover(function () {
     $("body").addClass('coding');
   });
 
   $(".bg-change01").mouseout(function () {
     $("body").removeClass('coding');
   });
 
 
 
   $(".bg-change02").mouseover(function () {
     $("body").addClass('seoul');
   });
 
   $(".bg-change02").mouseout(function () {
     $("body").removeClass('seoul');
   }); */



  $(".rotate-img").mouseover(function () {
    $(this).addClass("rotate");
    setTimeout(() => {
      $(this).removeClass("rotate");
    }, 2000);
  })



  $(".sc-works .works-item").mouseover(function () {
    $(this).addClass("black-screen");
  })
  $(".sc-works .works-item").mouseout(function () {
    $(this).removeClass("black-screen");
  })


  $(".text3-tit").mouseover(function () {
    $(".text3-img").addClass("moving");
  })
  $(".text3-tit").mouseout(function () {
    $(".text3-img").removeClass("moving");
  })


  let lastScroll = 0;

  $(window).scroll(function () {
    curr = $(this).scrollTop();
    here = $('.sc-visual').offset().top;


    if (curr >= here) {
      $('header').addClass('on');
    } else {
      $('header').removeClass('on');
    }

    if (curr > lastScroll) {
      $('header').addClass('hide');
    } else {
      $('header').removeClass('hide');
    }
    lastScroll = curr;
  })


  const $offset = -200;
  const $offset02 = -300;

  const scVisual = $('.sc-visual')
  const scAbout = $('.sc-about')

  const scVisualOST = scVisual.offset().top - $offset;
  const scAboutOST = scAbout.offset().top - $offset02;


  $(window).scroll(function () {

    if ($(this).scrollTop() > scVisualOST) {
      $('.works-line').addClass('animate-down');

    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > scAboutOST) {
      $('.works-line02').addClass('animate-down');

    }
  });



  $(document).ready(function ($) {
    $(".btn-contact").click(function (e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 5000);
    });
  });

  // $(window).scroll(function () {
  //   curr = $(this).scrollTop();
  //   if (curr > 100) {
  //     $('.fix-top').addClass('active');
  //   } else {
  //     $('.fix-top').removeClass('active');
  //   }
  // })

  $('.ft-arrows').click(function (e) {
    e.preventDefault();
    // $('html,body').animate({
    //     scrollTop:0
    // },300);
    //제이쿼리 방식
    window.scrollTo({ top: 0, behavior: 'smooth' })
    //자바스크립트 방식
  });

});


/**
* all
* 구간 배경색 변경.
*/
$('[data-background]').each(function (a, b) {
  console.log(b);

  ScrollTrigger.create({
    trigger: b,
    start: "-30% 0%",
    end: "100% 0%",
    //markers:true,
    // toggleClass:"active"
    toggleClass: { targets: "body", className: "black" }
  })
})

/**
* all
* 랜덤으로 텍스트 나타남
*/
gsap.from('.sc-about .about-txt span', {
  scrollTrigger: {
    trigger: ".sc-about",
    start: "0% 50%",
    end: "100% 0%",
    // markers: true,
    // scrub: 0,
  },
  opacity: 0,
  stagger: {
    from: 'random',
    amount: 1,
  }
})


/**
* all
* 호버시 이미지 등장
*/
// $('.sc-about .change-bg').hover(function () {
//   target = $(this).data('target');
//   $('.sc-about .bg').addClass('show');
//   $('.sc-about .bg').find(target).addClass('show').siblings().removeClass('show')
// }, function () {
//   $('.sc-about .bg').removeClass('show');
//   $('.sc-about .bg img').removeClass('show')
// })


/**
* all
* 비주얼 텍스트 아래에서 위로 드러남
*/
const revealText = $('.sc-visual .visual-txt > span');
revealText.each((idx, el) => {
  gsap.from(el, {
    yPercent: 100,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.sc-visual',
      start: 'top center',
      toggleActions: 'restart none restart restart',
    },
  });
});

/**
* all
* 푸터 텍스트 아래에서 위로 드러남
*/
const revealText02 = $('.footer h2 a');
revealText02.each((idx, el) => {
  gsap.from(el, {
    yPercent: 100,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top center',
    },
  });
});

