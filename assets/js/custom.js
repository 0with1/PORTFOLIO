$(function () {

  



  setTimeout(() => {
    $('.load').addClass('hide')
  }, 1000);



 //반복문 관련 ......
  $(".bg-change01").mouseover(function () {

    //$(".sc-about").css('background-image', 'url(../images/coding.jpg)');
    $("body").addClass('coding');
  });

  $(".bg-change01").mouseout(function () {
    $("body").removeClass('coding');

  });



  $(".bg-change02").mouseover(function () {

    //$(".sc-about").css('background', 'url(../../images/seoul.jpg)');
    $("body").addClass('seoul');
  });

  $(".bg-change02").mouseout(function () {
    $("body").removeClass('seoul');

  });


  
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





});


/**
 * @영역도달시배경체인지
 * 
 * @a
 * @b
 */
$('[data-background]').each(function (a, b) {
  console.log(b);

    ScrollTrigger.create({
        trigger:b,
        start:"-30% 0%",
        end:"100% 0%",
        //markers:true,
        // toggleClass:"active"
        toggleClass: {targets: "body", className: "black"}
    })
})



gsap.from('.sc-about .about-txt span',{
    scrollTrigger: {
      trigger: ".sc-about",
      start: "0% 50%",
      end: "100% 0%",
      // markers: true,
      // scrub: 0,
    },
    opacity:0,
    stagger:{
      from:'random',
      amount:1,
    }
})



$('.sc-about .change-bg').hover(function(){
  target = $(this).data('target');
  $('.sc-about .bg').addClass('show');
  $('.sc-about .bg').find(target).addClass('show').siblings().removeClass('show')
},function(){
  $('.sc-about .bg').removeClass('show');
  $('.sc-about .bg img').removeClass('show')
})


/**
   * 
   * @텍스트드러나는동작
   * 
  */


/*
$('[data-motion=text]').each(function (idx, el) {

  child = $(this).find('span')
  startData = ($(this).data('start')) ? $(this).data('start') : '70%';
  endData = $(this).data('end');
  scData = $(this).parent('section').data('sc');

  gsap.from(child, {
    yPercent: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '.sc-visual',
      start: 'top center',
      toggleActions: 'restart none restart restart',
    },
  });
})
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



