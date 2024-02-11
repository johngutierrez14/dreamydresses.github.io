const products = [
    { category: 'pijama', name: 'Pijama Ref. M01', price: '$50.000', image: 'images/Product-M01_0.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_0.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_1.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_2.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_3.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_4.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_5.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_6.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_0.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_1.jpg' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_2.jpg' },
];

function generateProductHTML(product) {
    return `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}">
            <div class="block2">
                <div class="block2-pic hov-img0">
                    <img src="${product.image}" alt="IMG-PRODUCT">
                </div>
                <div class="block2-txt flex-w flex-t p-t-14">
                    <div class="block2-txt-child1 flex-col-l ">
                        <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">${product.name}</a>
                        <span class="stext-105 cl3">${product.price}</span>
                        <div class="size-204 flex-w flex-m respon6-next">
                          <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                              <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                  <i>S</i>
                              </div>
                              <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                  <i>M</i>
                              </div>
                              <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                  <i>L</i>
                              </div>
                              <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                  <i>XL</i>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>`;
}
