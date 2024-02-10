const products = [
    { category: 'women', name: 'Esprit Ruffle Shirt', price: '$16.64', image: 'images/product-01.jpg' },
    { category: 'women', name: 'Herschel supply', price: '$35.31', image: 'images/product-02.jpg' },
    { category: 'men', name: 'Only Check Trouser', price: '$25.50', image: 'images/product-03.jpg' }
];

function generateProductHTML(product) {
    return `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category}">
            <div class="block2">
                <div class="block2-pic hov-img0">
                    <img src="${product.image}" alt="IMG-PRODUCT">
                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                        Quick View
                    </a>
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
