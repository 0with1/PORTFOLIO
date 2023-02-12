$(function () {
  // cateData
  fetch('./assets/data/cateData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="menu-item">
                    <a href="/category/${element.id}">
                        <span class="img-wrap"><img src="${element.thumb}" alt="${element.title}"> </span>
                        <span>${element.title}</span>
                    </a>
                    </li>`;
      });
      $('#cateData').html(html);
    })



  // giftData
  fetch('./assets/data/giftData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {



        isPer = (element.cost === element.price) ? "hide" : ''



        html += `<li class="ssg-item">
            <a href="/category/${element.id}" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <div class="basic-icon">
              <a href="" class="heart"><span class="blind">하트</span></a>
              <a href="" class="cart"><span class="blind">카트</span></a>
            </div>
            <a href="" class="txt-wrap">
              <p><strong>${element.title}</strong>
               <span>${element.productName}</span>
                ${element.productInfo}</p>
              <div class="" class="amount-box">
                <p class="cost">
                  <span class="cost-num ${isPer}">${numberformat(element.cost)}</span>
                  <span class="cost-unit">원</span>
                </p>
                <p class="dc">
                  <span class="dc-per ${isPer}">${element.per}</span>
                  <span class="dc-price">${numberformat(element.price)}</span>
                  <span class=dc-unit>원</span>
                </p>
              </div>
              <p class="eval"><span>★ ${element.marks}</span><span>${element.cases}건</span> </p>
            </a>
          </li>`;
      });
      $('#giftData').html(html);
    })

  // cardPromotionData
  fetch('./assets/data/cardPromotionData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {

        // if(element.cost){
        //   cosEl = element.cost;
        // }else{
        //   cosEl = element.sale;
        // }
        cosEl = (element.cost) ? element.cost : element.sale;




        html += `<li class="promotion-item ${element.brand}">
            <a href="" class="card-wrap">
              <div class="card-cost">
                <span><em>${cosEl}</em></span>
                <span class="brand-icon"><img src="${element.brandIco}" alt="${element.brandName}"></span>
              </div>
              <div class="card-txt">
                <p>${element.brandName}</p>
                <span class="brand-info-wrap">
                  <span>${element.brandInfo01}</span>
                  <span>${element.brandInfo02}</span>
                </span>
              </div>
            </a>
          </li>`;
      });
      $('#cardPromotionData').html(html);
    })


  //beliefData
  fetch('./assets/data/beliefData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="belif-item">
                
            <div class="img-wrap">
                <a href="" class="belif-logo ${element.brandName}">
                  <img src="${element.logo}" alt="${element.brandName}">
                </a>
                <a href="" class="belif-brand">
                  <img src="${element.thumb}" alt="${element.brandName}">
                </a>
            </div>
            <a href="" class="belif-txt">
              <span>${element.title}</span>
            </a>
          </li>`;
      });
      $('#beliefData').html(html);
    })


  //recommendData
  fetch('./assets/data/recommendData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="ssg02-item">
            <a href="" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <a href="" class="txt-wrap">
              <strong>${element.title}</strong>
              <p>${element.info}</p>
            </a>
          </li>`;
      });
      $('#recommendData').html(html);
    })


  // @@@@2

  /**
   * 
   * @cate 1:ACC
   * @cate 2:LIVING
   * @cate 3:BEAUTY
   * 
   * 
   */

  

//   $('.sc-guide .tab-item').click(function (e) {
//     e.preventDefault();
//     //cateNum = $(this).children('a').data('cate');
//     $(this).addClass('on').siblings().removeClass('on');
//     //productData1(cateNum);
//   })

//   // $('.sc-guide .tab-item').eq(0).trigger('click');
//   //미리 실행
//  productData1(1);

//   function productData1(num) {
//     fetch('./assets/data/productData.json')
//       .then((response) => response.json())
//       .then((json) => {
//         data = json.items; //통데이터

//         //선별된데이터
//         const result = data.filter(function (parm) { return parm.cate == num });

//         let html = ''
//         result.forEach(element => {

//           html += `<div class="swiper-slide">
//                         <a href="">
//                         <div class="img-wrap">
//                             <img src="${element.thumb}" alt="${element.title}">
//                         </div>
//                         <div class="txt-wrap">
//                             <p class="product-tit">${element.title}</p>
//                             <p class="product-cost"><em>${numberformat(element.price)}</em><span>원</span></p>
//                         </div>
//                         </a>
//                     </div>`;

//         });
//         $('#productData1').html(html);
//       })
//   }

  // $('.aaa').click(function(){
  //     popOpen('#aaa');
  // })







  //conceptTabData
  // fetch('./assets/data/conceptTabData.json')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     data = json.items;
  //     let html = ''
  //     data.forEach(element => {
  //       html += `<li class="concept-item">
  //           <a href="">
  //             <img src="${element.thumb}" alt="${element.title}">
  //             ${element.title}
  //           </a>
  //         </li>`;
  //     });
  //     $('#conceptTabData').html(html);
  //   })

  /**
   * 
   * @cate 1:아우터
   * @cate 2:원피스
   * @cate 3:블라우스
   * 
   * 
   */

  $('.sc-concept .concept-item').click(function (e) {
    e.preventDefault();
    cateNum = $(this).children('a').data('cate');
    $(this).addClass('on').siblings().removeClass('on');
    conceptData1(cateNum);
  })

  // $('.sc-guide .tab-item').eq(0).trigger('click');
  //미리 실행
  conceptData1(60);


  function conceptData1(num) {
    fetch('./assets/data/conceptData.json')
      .then((response) => response.json())
      .then((json) => {
        data = json.items; //통데이터

        //선별된데이터
        const result = data.filter(function (parm) { return parm.cate == num });

        let html = ''
        result.forEach(element => {

          html += `<div class="swiper-slide">
                        <a href="">
                        <div class="img-wrap">
                            <img src="${element.thumb}" alt="${element.title}">
                        </div>
                        <div class="txt-wrap">
                            <p class="product-tit">${element.title}</p>
                            <p class="product-cost"><em>${numberformat(element.price)}</em><span>원</span></p>
                        </div>
                        </a>
                    </div>`;

        });
        $('#conceptData1').html(html);
      })
  }





  //exhiData
  fetch('./assets/data/exhiData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="exhi-item">
            <a href="">
              <div class="img-wrap">
                <img src="${element.thumb}" alt="${element.title}">
              </div>
              <div class="txt-wrap">
                <strong>${element.title}</strong>
                <span>${element.exhiInfo}</span>
              </div>
            </a>
          </li>`;
      });
      $('#exhiData').html(html);
    })







  /**
   * 
   * @cate 1:전체
   * @cate 2:패션의류
   * @cate 3:BAG
   * 
   * 
   */

  $('.sc-category .tab-item').click(function (e) {
    e.preventDefault();
    cateNum = $(this).children('a').data('cate');
    $(this).addClass('on').siblings().removeClass('on');
    categoryData1(cateNum);
  })

  // $('.sc-guide .tab-item').eq(0).trigger('click');
  //미리 실행
  categoryData1(100);


  function categoryData1(num) {
    fetch('./assets/data/categoryData.json')
      .then((response) => response.json())
      .then((json) => {
        data = json.items; //통데이터

        //선별된데이터
        const result = data.filter(function (parm) { return parm.cate == num });

        let html = ''
        result.forEach(element => {

          html += `<li class="category-item">
            <div class="num-wrap"><strong>${element.ranking}</strong><span class="rank-down">1</span></div>
            <a href="" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <div class="delivery-wrap">
              <a href=""><img src="./assets/images/ssg-delivery.svg" alt="쓱배송"></a>
              <div class="delivery-icon">
                <a href="" class="heart"><span class="blind">하트</span></a>
                <a href="" class="cart"><span class="blind">카트</span></a>
              </div>
            </div>
            <a href="" class="txt-wrap">
              <p><strong>${element.title}</strong> ${element.info}</p>
              <div class="amount-box">
                <p class="first-cost"><em>${numberformat(element.price)}</em><span>원</span></p>
                <p class="unit">${element.unit}</p>
              </div>
              <p class="eval"><span>★ ${element.marks}</span><span>${element.num}</span> </p>
            </a>
            <div class="tag-wrap">
              <div class="delivery-tag">새벽배송 가능</div>
              <div class="smileclub-tag">
                                <i class="smileclub-icon">
                                  <span class="blind">스마일클럽</span>
                                </i>
                                <span class="smileclub-accum">최대 <span>${element.savings}</span>원 적립</span>      
                          </div>
                          <div class="extra-tag">${element.extra}</div>
            </div>
          </li>`;

        });
        $('#categoryData1').html(html);
      })
  }


  //specialData
  fetch('./assets/data/specialData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="special-item">

            <div class="img-wrap">
              <a href="" class="img-thumb">
                <img src="${element.thumb}" alt="${element.title}">
              </a>
              <ul class="column-list">
                <li class="column-item"><a href=""><img src="${element.sub01}" alt=""></a></li>
                <li class="column-item"><a href=""><img src="${element.sub02}" alt=""></a></li>
                <li class="column-item"><a href=""><img src="${element.sub03}" alt=""></a></li>
                <li class="column-item more"><a href=""><i><img src="./assets/images/special-thumb-sub-more.svg" alt=""></i></a></li>
              </ul>
            </div>

            <a href="" class="txt-wrap">
              <strong class="special-tit">${element.title01}</strong>
              <strong class="special-tit">${element.title02}</strong>
              <p class="special-sub-tit"><em>${element.brand}</em> <span>${element.info}</span></p>
              <p class="special-cost"><em>${numberformat(element.cost)}</em><span>원~</span></p>
            </a>
            <div class="basic-icon">
              <a href="" class="heart"><span class="blind">하트</span></a>
              <a href="" class="cart"><span class="blind">카트</span></a>
            </div>
          </li>`;
      });
      $('#specialData').html(html);
    })

  //svData
  fetch('./assets/data/svData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="ssg02-item">
            <a href="" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <a href="" class="txt-wrap">
              <strong>${element.title}</strong>
              <p>${element.info}</p>
            </a>
          </li>`;
      });
      $('#svData').html(html);
    })

  

  //officialData
  fetch('./assets/data/officialData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="menu-item">
                    <a href="/category/${element.id}">
                        <span class="img-wrap"><img src="${element.thumb}" alt="${element.title}"></span> 
                        <span>${element.title}</span>
                    </a>
                    </li>`;
      });
      $('#officialData').html(html);
    })


  // giftData
  fetch('./assets/data/luxuryData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {



        isPer = (element.price.ori === element.price.curr) ? "hide" : ''



        html += `<li class="ssg-item">
            <a href="/category/${element.id}" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <div class="basic-icon">
              <a href="" class="heart"><span class="blind">하트</span></a>
              <a href="" class="cart"><span class="blind">카트</span></a>
            </div>
            <a href="" class="txt-wrap">
              <p><strong>${element.title}</strong>
               <span>${element.productName}</span>
                ${element.productInfo}</p>
              <div class="" class="amount-box">
                <p class="cost">
                  <span class="cost-num ${isPer}">${numberformat(element.price.ori)}</span>
                  <span class="cost-unit">원</span>
                </p>
                <p class="dc">
                  <span class="dc-per ${isPer}">${salepercent(element.price.ori, element.price.curr)}%</span>
                  <span class="dc-price">${numberformat(element.price.curr)}</span>
                  <span class=dc-unit>원</span>
                </p>
              </div>
            </a>
          </li>`;
      });
      $('#luxuryData').html(html);
    })

  
  //discount rate
  function salepercent(ori, curr) {
    return Math.floor((ori - curr) / ori * 100);
  }


  //officialData
  fetch('./assets/data/logopopupData.json')
    .then((response) => response.json())
    .then((json) => {
      data = json.items;
      let html = ''
      data.forEach(element => {
        html += `<li class="brand-item">
          <a href="">
            <div class="img-box">
              <img src="${element.thumb}" alt="${element.title}">
            </div>
            <span>${element.title}</span>
          </a>
        </li>`;
      });
      $('#logopopupData').html(html);
    })



  function popOpen(frame) {
    $(frame).show();
  }
  function popOpen(frame) {
    $(frame).show();
  }
  function numberformat(b) {
    return b.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }




 
 //blossomData
  $('.sc-blossom .tab-item').click(function (e) {
    e.preventDefault();
    cateNum = $(this).children('a').data('cate');
    $(this).addClass('on').siblings().removeClass('on');
    blossomData1(cateNum);
  })
  $('.sc-guide .tab-item').eq(0).trigger('click');
  //미리 실행
  blossomData1('all');

  function blossomData1(num) {
    fetch('./assets/data/blossomData.json')
      .then((response) => response.json())
      .then((json) => {
        //통데이터
        data = json.items;
        //선별된데이터

        if (num === 'all') {
          result = json.items;
        } else {
          result = data.filter(function (parm) { return parm.cate == num });
        }



        let html = ''
        result.forEach(element => {

          html += `<li class="blossom-item">
            <a href="" class="img-wrap">
              <img src="${element.thumb}" alt="${element.title}">
            </a>
            <div class="blossom-txt">
              <div class="txt-wrap">
                <strong>${element.title}</strong>
                <p>${element.info}</p>
              </div>
              <div class="basic-icon">
                <a href="" class="heart"><span class="blind">하트</span></a>
              </div>
            </div>
          </li>`;

        });
        $('#blossomData1').html(html);
      })
  }






})