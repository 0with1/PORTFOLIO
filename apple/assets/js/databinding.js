$(function () {
    // cateData
    fetch('./assets/data/ipadData.json')
        .then((response) => response.json())
        .then((json) => {
            data = json.items;
            let html = ''
            data.forEach(element => {
              html += `<li class="yours-item">
                <a class="product-img" href="${element.id}">
                <picture class="credit-img01">
                            <source srcset="${element.thumb02}" media="(max-width: 734px)">
                            <source srcset="${element.thumb}" media="(min-width: 0px)">
                            <img src="${element.thumb}" alt="" />
                </picture>
                
                </a>
                <span class="product-color"><img src="${element.color}" alt=""></span>
                <strong class="product-tit">
                   <span class="new-label">${element.new}</span>
                   ${element.title}
                   <span class="gen-label">${element.gen}</span>
                </strong>
                <strong class="product-info">${element.info}</strong>
                <span class="product-cost">${element.cost}</span>
                <a href="" class="btn-purchase">구입하기</a>
                <a href="" class="btn-blue more"><span class="btn-txt">더 알아보기</span></a>
              </li>`;
            });
            $('#ipadData').html(html);
        })
})