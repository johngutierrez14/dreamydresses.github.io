const products = [
    { category: 'pijama', name: 'Pijama Ref. M01', price: '$50.000', image: 'images/Product-M01_0.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_2.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_3.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_4.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_5.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_6.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M07', price: '$50.000', image: 'images/Product-M07_2.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M09', price: '$50.000', image: 'images/Product-M09_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M011', price: '$50.000', image: 'images/Product-M011_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M011', price: '$50.000', image: 'images/Product-M011_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M011', price: '$50.000', image: 'images/Product-M011_2.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M011', price: '$50.000', image: 'images/Product-M011_3.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M021', price: '$50.000', image: 'images/Product-M021_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M021', price: '$50.000', image: 'images/Product-M021_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M021', price: '$50.000', image: 'images/Product-M021_2.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_2.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_3.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_4.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M023', price: '$50.000', image: 'images/Product-M023_5.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M025', price: '$90.000', image: 'images/Product-M025_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M027', price: '$90.000', image: 'images/Product-M027_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M027', price: '$90.000', image: 'images/Product-M027_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M029', price: '$95.000', image: 'images/Product-M029_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M029', price: '$95.000', image: 'images/Product-M029_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M031', price: '$70.000', image: 'images/Product-M031_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M033', price: '$70.000', image: 'images/Product-M033_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M035', price: '$50.000', image: 'images/Product-M035_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M035', price: '$140.000', image: 'images/Product-M035_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M035', price: '$140.000', image: 'images/Product-M035_2.JPG' },
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
