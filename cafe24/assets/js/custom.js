
function toggle() {
  var mgnb = document.getElementById('group-mgnb');
  var body = document.body;
  mgnb.classList.toggle('active');
  body.classList.toggle('active');
}




/**
* ~ 전체
* 가로 스크롤을 all에 넣을 시 뒤에 gsap 동작이 안되는 부분이 많아 따로 빼둠
* (전체 공통 사항)
* 첫번째 텍스트 가로 스크롤 동작
*/
let sections = gsap.utils.toArray(".group-bmm strong");

console.log(sections.length);

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sc-hori-bmm",
    pin: true,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000",
    //markers: true,
  }
});


$('.sc-hori-bmm strong').each(function (i, hs) {
  gsap.to(hs, {
    // y: -130,
    opacity: 0.6,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
      trigger: hs,
      containerAnimation: scrollTween,
      start: "center center",
      // toggleActions: "play none none reset",
      //markers:false,
      scrub: 1
    }
  });
})

gsap.to('.sc-hori-bmm', {
  scrollTrigger: {
    trigger: ".sc-success",
    start: "top 100%",
    end: "10% 100%",
    // markers:true,
    scrub: 1,
  },

  scale: 0.97
})


/**
 * Gsap 동작
 * 
 * @구간설정
 * 
 * 1025 ~ all
 * ~ 1024
 * 481 ~ 1024
 * ~ 480
 * ~ all
 * 
 * */
$(function () {
 // GSAP matchMedia
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({


    // 최소 1025 ~ 전체
    "(min-width: 1025px)": function () {
      /**
     * 1025 ~ all
     * sc-visual
     * 스크롤 시 비디오 뒤 원형이 커짐
     */
      circle = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-visual .video-area",
          start: "top 70%",
          end: "bottom 0%",
          scrub: 1,
          //markers: false,
        },
      })

      circle
        .addLabel('a')
        .to('.sc-visual .video-area .circle', { scale: 6.7 }, 'a')
        .to('.group-bmm', 0, { background: '#6FAAF0', }, 'a')



      /**
     * 1025 ~ all
     * 커머스
     * 스크롤 시 이미지 상하 평행이동
     */
      gsap.set('.sc-comm .comm-item .img-wrap', {
        yPercent: -80,
      })
      $('.sc-comm .comm-item .img-area').each(function (i, el) {
        child = $(this).find('.img-wrap');

        gsap.to(child, {
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "100% 0%",
            scrub: 0,
          },
          ease: 'none',
          yPercent: 80
        })

      });
      
      
      /**
     * 1025 ~ all(~1024 까지는 두번째 가로스크롤 없앰)
     * 왜 카페24에 마케팅을 해야하는가?
     * 두번째 가로스크롤 동작
     */
      let groupWhy = gsap.utils.toArray(".group-why > *");

      console.log(groupWhy.length);

      let scrollTween02 = gsap.to(groupWhy, {
        xPercent: -100 * (groupWhy.length - 0.3),
        ease: "none",
        scrollTrigger: {
          trigger: ".sc-hori-why",
          pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000"
        }
      });

      gsap.set('.sc-hori-why .horizontal-area .img-wrap', {
        xPercent: 0,
      })

      $('.sc-hori-why .horizontal-area').each(function (i, hv) {
        child03 = $(this).find('.img-wrap');
        gsap.to(child03, {
          scrollTrigger: {
            trigger: child03,
            containerAnimation: scrollTween02,
            start: "left 50%",
            end: "center 20%",
            scrub: true,
            //markers:true,
          },
          ease: 'none',
          xPercent: 60
        });
      })



      /**
      * 1025 ~ all
      * 어디서, 무엇을 팔든 카페24에서 시작하고 매출UP
      * 스크롤 시 전체가 작아짐
      */
      gsap.set('.group-dont', {
        yPercent: -10,
      })
      gsap.to('.group-dont', {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 100%",
          end: "10% 50%",
          //markers:true,
          scrub: 0,
        },
        scale: 0.97
      })




      /**
       * 1025 ~ all
       * 푸터영역
       * 뒤에서 드러나는 듯 글자가 내려옴
       */
      gsap.set('.footer .inner', {
        yPercent: -70,
      })
      gsap.to('.footer .inner', {
        scrollTrigger: {
          trigger: ".sc-dont",
          start: "-40% 0%",
          end: "100% 0%",
          //markers: true,
          scrub: 0,
        },
        ease: 'none',
        yPercent: 40
      })

    },


    // ~ 1024
    "(max-width: 1024px)": function () {
      /**
     * ~1024
     * (~1024 부터는 start값이 달라짐, 스케일 값도 수정.)
     * sc-visual
     * 스크롤 시 비디오 뒤 원형이 커짐
     */
      circle = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-visual .video-area",
          start: "top 60%", /*1024 수정사항*/
          end: "bottom 0%",
          scrub: 1,
          markers:'true',
        },
      });

      circle
        .addLabel('a')
        .to('.sc-visual .video-area .circle', { scale: 11 }, 'a') /*1024 수정사항*/
        .to('.group-bmm', 0, { background: '#6FAAF0', }, 'a')


      /**
      * ~1024
      * (~1024 부터는 y값 달라짐, start값 수정.)
      * 커머스
      * 스크롤 시 이미지 상하 평행이동
      */
      gsap.set('.sc-comm .comm-item .img-wrap', {
        yPercent: -100,/*1024 수정사항*/
      });
      $('.sc-comm .comm-item .img-area').each(function (i, el) {
        child = $(this).find('.img-wrap');

        gsap.to(child, {
          scrollTrigger: {
            trigger: el,
            start: "top 100%",/*1024 수정사항*/
            end: "100% 0%",
            //markers: true,
            scrub: 0,
          },
          ease: 'none',
          yPercent: 250  /*1024 수정사항*/
        });

      });
    
      
    },


    

    // 481 ~ 1024
    "(min-width: 481px) and (max-width: 1024px)": function () {
     

      /**
       * 481 ~ 1024
       * (481 ~ 1024 사이에는 start값 수정, 퍼센트 값도 수정)
       * 어디서, 무엇을 팔든 카페24에서 시작하고 매출UP
       * 스크롤 시 전체크기가 작아짐
       */
      gsap.set('.group-dont', {
        yPercent: -7,
      })
      gsap.to('.group-dont', {
        scrollTrigger: {
          trigger: ".footer",
          start: "-40% 80%", /*481 ~ 1024 수정사항*/
          end: "10% 50%",
          //markers:true,
          scrub: 0,
        },
        scale: 0.97,
        yPercent: -50 /*481 ~ 1024 수정사항*/
      })


      /**
       * 481 ~ 1024
       * (481 ~ 1024 start 값 수정)
       * 푸터영역
       * 뒤에서 드러나는 듯 글자가 내려옴
       */
      gsap.set('.footer .inner', {
        yPercent: -70,
      })
      gsap.to('.footer .inner', {
        scrollTrigger: {
          trigger: ".sc-dont",
          start: "0% 0%", /*481 ~ 1024 수정사항*/
          end: "100% 0%",
          //markers: true,
          scrub: 0,
        },
        ease: 'none',
        yPercent: 50 /*481 ~ 1024 수정사항*/
      })


    },

    // ~ 480
    "(max-width: 480px)": function () {

    /**
    * ~ 480
    * (~ 480 사이에는 start값 수정, 퍼센트 값도 수정)
    * 어디서, 무엇을 팔든 카페24에서 시작하고 매출UP
    * 스크롤 시 전체크기가 작아짐
    */
    gsap.set('.group-dont', { /*gsap.set으로 y축 -80으로 미리 올려놓기*/
      yPercent: -7,
    })
    gsap.to('.group-dont', {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 60%", /*~ 480 수정사항*/
        end: "10% 50%",
        //markers:true,
        scrub: 0,
      },
      scale: 0.97,
     yPercent: -30 /*481 ~ 1024 수정사항*/
    })

    /**
     * ~ 480
     * (~480 start 값 수정)
     * 푸터영역
     * 뒤에서 드러나는 듯 글자가 내려옴
     */
    gsap.set('.footer .inner', {
      yPercent: -70,
    })
    gsap.to('.footer .inner', {
      scrollTrigger: {
        trigger: ".sc-dont",
        start: "-40% 0%", /*~ 480 수정사항*/
        end: "100% 0%",
        //markers: true,
        scrub: 0,
      },
      ease: 'none',
      yPercent: 0 /*~ 480 수정사항*/
    })


     },

    // ~ 전체
    "all": function () {

      /**
      * ~ 전체
      * (전체 공통 사항)
      * 페이지 시작 시 텍스트 및 버튼 동작
      */
      gsap.from('.sc-visual h2 span', {
        yPercent: 100,
        rotationX: -90,
        scale: 0.9,
        opacity: 1,
        stagger: 0.1,
        duration: 1.3,
      })

      gsap.from('.sc-visual .link-book', {
        yPercent: 100,
        scale: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.3,
      })

      /**
      * ~ 전체
      * (전체 공통 사항)
      * 스크롤 시 스와이퍼 이미지 좌우 이동
      */
      gsap.set('.group-slide .review-slide .swiper-slide', { /*gsap.set으로 y축 -80으로 미리 올려놓기*/
        xPercent: -10,
      });
      gsap.to('.review-slide .swiper-slide', {
        scrollTrigger: {
          trigger: ".group-slide",
          start: "-50% 50%",
          end: "100% 0%",
          // markers: true,
          scrub: 0,
        },
        ease: 'none',
        xPercent: 15
      })


    

     
   
      /**
      * ~ 전체
      * (전체 공통 사항)
      * 영역 도달 시 로고 하얗게 변경
      */
      $('[data-background]').each(function (a, b) {
        console.log(b);

        ScrollTrigger.create({
          trigger: b,
          start: "0% 0%",
          end: "100% 10%",
          //markers: true,
          // toggleClass:"active"
          toggleClass: { targets: "body", className: "black" }
        })
      })

   
      /**
      * ~ 전체
      * (전체 공통 사항)
      * 커머스
      * 마우스 감지하며 텍스트 좌우로 움직임
      */
      $(window).on("mousemove", mouseMove);

      function mouseMove(e) {
        let positionSlow = (e.pageX - ($(window).width() / 2)) * 0.1;
        let positionFast = (e.pageX - ($(window).width() / 2)) * 0.2;

        gsap.to(".span-slow", {
          duration: .4,
          x: positionSlow
        })
        gsap.to(".span-fast", {
          duration: .4,
          x: -positionFast
        })
      }

   

      /**
      * ~ 전체
      * 전체 공통사항
      * 스크롤 시 비디오 커지기
      */
      videoWrap = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-busi",
          start: "top 50%",
          end: "bottom 50%",
          //markers:true,
        },
      })

      videoWrap
        .addLabel('a')
        .from('.sc-busi .video-wrap', { scale: 0.5 }, 'a')
        .to('.sc-busi .video-wrap', { scale: 1 }, 'a')


     
      /**
      * ~ 전체
      * (전체 공통 사항)
      * 페이지 시작 시 텍스트 동작
      * 
      * 매개변수
      * @i 인덱스
      * @l 엘리먼트
      */

      $('[data-motion=text]').each(function (i, l) {

        child = $(this).find('span')
        startData = ($(this).data('start')) ? $(this).data('start') : '70%';
        endData = $(this).data('end')

        gsap.from(child, {
          scrollTrigger: {
            trigger: l,
            start: `top ${startData}`,
            //markers: true,
          },
          yPercent: 100,
          rotationX: -40,
          scale: 0.9,
          opacity: 1,
          stagger: 0.2,
          duration: 1.3,
        })
      })

      /**
     * ~ 전체
     * (전체 공통 사항)
     * 마우스 따라다니는 원 도형
     */
      $(window).mousemove(function (e) {

        xVal = e.clientX - 15;
        yVal = e.clientY - 15;

        gsap.to('.cursor', {
          x: xVal,
          y: yVal,
          duration: 0
        })

      });

      $('a').mouseover(function () {
        gsap.to('.cursor', {
          scale: 2
        })
      });
      $('a').mouseleave(function () {
        gsap.to('.cursor', {
          scale: 1
        })
      });


   
    },
  })
});


/**
 * 브랜드 로고 스와이퍼
 * 현재 페이지에서 유일한 스와이퍼
 */
var swiper = new Swiper(".review-slide", {
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});



/**
 * 마우스 감지하며 링 도형이 따라다니는 동작
 */

document.querySelector('.img-area').addEventListener('mousemove', eyeball);
function eyeball() {
  const ring = document.querySelectorAll('.ring');
  ring.forEach(function (ring) {
    let x = (ring.getBoundingClientRect().left) + (ring.clientWidth / 2);
    let y = (ring.getBoundingClientRect().top) + (ring.clientHeight / 2);

    let radian = Math.atan2(event.clientX - x, event.clientY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    ring.style.transform = "rotate(" + rotation + "deg)"
  });
}

