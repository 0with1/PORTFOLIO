
/*마우스 커서*/
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



var swiper = new Swiper(".review-slide", {
  slidesPerView: 1.5,
  spaceBetween: 30,
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
 * transform: translateY()
 */
/*1. 페이지 시작 시 텍스트 동작 O*/
gsap.from('.sc-visual strong span', {
  yPercent: 100, /* y어디서 부터 내려올지 */
  rotationX: -90, /* x 몇도로 기울여저있는지*/
  scale: 0.9, /*시작시 0.9로 조금더 작게*/
  opacity: 1, /*시작시 투명*/
  stagger: 0.1, /*span 각각 딜레이 정함*/
  duration: 1.3, /* + 몇 초동안 실행할지*/
})



gsap.from('.sc-visual .link-book', {
  yPercent: 100, /* y어디서 부터 내려올지 */
  scale: 0, /*시작시 0.9로 조금더 작게*/
  opacity: 1, /*시작시 투명*/
  stagger: 0.1, /*span 각각 딜레이 정함*/
  duration: 1.3, /* + 몇 초동안 실행할지*/
})


/*Gsap 동작*/
$(function () {
  ScrollTrigger.matchMedia({
    // all
    "all": function () {
      
    },
    "(min-width: 1024px)": function () {
      /**
      * sc-visual
      * - circle
      */
      circle = gsap.timeline({ /*circle 타임라인을 지정해둔다*/
        scrollTrigger: {
          trigger: ".sc-visual .video-area",
          start: "top 70%",
          end: "bottom 0%",
          scrub: 1,
          markers: false,
        },
      })

      circle /*지정된 타임라인*/
        .addLabel('a')
        .to('.sc-visual .video-area .circle', { scale: 6.7 }, 'a') /*스케일이 6이 되고*/
        .to('.group-bmm', 0, { background: '#6FAAF0', }, 'a') /* 동시에 색상이 바뀌고*/

      /**
      * sc-comm
      * - 이미지 평행이동
      */
      gsap.set('.sc-comm .comm-item .img-wrap', {
        yPercent: -80,/*gsap.set으로 y축 -80으로 미리 올려놓기*/
      })
      $('.sc-comm .comm-item .img-area').each(function (i, el) {
        child = $(this).find('.img-wrap');/*img-area 내부에 자식을 찾기*/

        gsap.to(child, {/*자식을 gsap으로*/
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "100% 0%",
            scrub: 0,
          },
          ease: 'none',
          yPercent: 80  /*y퍼센트로 내려가게한다*/
        })

      })
      /**
      * sc-why
      * - 가로스크롤
      */
      let groupWhy = gsap.utils.toArray(".group-why > *");

      console.log(sections.length);

      let scrollTween02 = gsap.to(groupWhy, {
        xPercent: -100 * (sections.length - 0.3),
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: ".sc-hori-why",
          pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: "+=3000"
        }
      });

      gsap.set('.sc-hori-why .horizontal-area .video-wrap', {
        xPercent: 0,/*gsap.set으로 x축 -80으로 미리 옮겨놓기*/
      })

      $('.sc-hori-why .horizontal-area').each(function (i, hv) {
        child03 = $(this).find('.video-wrap');
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
          xPercent: 60  /*x퍼센트로 움직이게한다*/
        });
      })
      
      
    },
    "(max-width: 1024px)": function () { 
      /**
      * sc-visual
      * - circle
      */
      circle = gsap.timeline({ /*circle 타임라인을 지정해둔다*/
        scrollTrigger: {
          trigger: ".sc-visual .video-area",
          start: "top 60%",
          end: "bottom 0%",
          scrub: 1,
          //markers:true,
        },
      })

      circle /*지정된 타임라인*/
        .addLabel('a')
        .to('.sc-visual .video-area .circle', { scale: 11 }, 'a') /*스케일이 6이 되고*/
        .to('.group-bmm', 0, { background: '#6FAAF0', }, 'a') /* 동시에 색상이 바뀌고*/
      
      
      /**
      * sc-comm
      * - 이미지 평행이동
      */
      gsap.set('.sc-comm .comm-item .img-wrap', {
        yPercent: 0,/*gsap.set으로 y축 -80으로 미리 올려놓기*/
      })
      $('.sc-comm .comm-item .img-area').each(function (i, el) {
        child = $(this).find('.img-wrap');/*img-area 내부에 자식을 찾기*/

        gsap.to(child, {/*자식을 gsap으로*/
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "100% 0%",
            markers:true,
            scrub: 0,
          },
          ease: 'none',
          yPercent: 250  /*y퍼센트로 내려가게한다*/
        })

      })
      
    }
  })
});












/*첫번째 가로 스크롤*/
let sections = gsap.utils.toArray(".group-bmm strong");

console.log(sections.length);

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".sc-hori-bmm",
    pin: true,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000"
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












/*스크롤 시 .sc-dont 사이즈 수정*/
gsap.set('.group-dont', { /*gsap.set으로 y축 -80으로 미리 올려놓기*/
  yPercent: -7,
})
gsap.to('.group-dont', {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 60%",
    end: "10% 50%",
    //markers:true,
    scrub: 0,
  },
  scale: 0.97
})

  /**
   * @공통텍스모션
   * 
   * 
   * 매개변수
   * @i 인덱스
   * @l 엘리먼트
   */

  $('[data-motion=text]').each(function(i,l){

    child = $(this).find('span')
    startData = ($(this).data('start'))?$(this).data('start'):'70%';
    endData = $(this).data('end')

    gsap.from(child, {
      scrollTrigger: {
        trigger: l,
        start: `top ${startData}`,
        //markers:true,
      },
      yPercent: 100, /* y어디서 부터 내려올지 */
      rotationX: -40, /* x 몇도로 기울여저있는지*/
      scale: 0.9, /*시작시 0.9로 조금더 작게*/
      opacity: 1, /*시작시 투명*/
      stagger: 0.2, /*span 각각 딜레이 정함*/
      duration: 1.3, /* + 몇 초동안 실행할지*/
    }) /*스케일이 6이 되고*/
  })


/*푸터 스크롤 시 이미지 평행 이동*/
gsap.set('.footer .inner', { /*gsap.set으로 y축 -80으로 미리 올려놓기*/
  yPercent: -70,
})
gsap.to('.footer .inner', {
  scrollTrigger: {
    trigger: ".sc-dont",
    start: "50% 50%",
    end: "100% 0%",
    //markers: true,
    scrub: 0,
  },
  ease: 'none',
  yPercent: 70
})





videoWrap = gsap.timeline({ /*circle 타임라인을 지정해둔다*/
  scrollTrigger: {
    trigger: ".sc-busi",
    start: "top 50%",
    end: "bottom 50%",
    //markers:true,
  },
})

videoWrap /*지정된 타임라인*/
  .addLabel('a')
  .from('.sc-busi .video-wrap', { scale: 0.5 }, 'a') /*스케일이 6이 되고*/
  .to('.sc-busi .video-wrap', { scale: 1 }, 'a') /*스케일이 6이 되고*/




/*이미지 평행 이동*/
gsap.set('.group-slide .review-slide .swiper-slide', { /*gsap.set으로 y축 -80으로 미리 올려놓기*/
  xPercent: -10,
})
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
 * @영역도달시배경체인지
 * 
 * @a
 * @b
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
