const products = [
    { category: 'pijama', name: 'Pijama Ref. M01', price: '$50.000', image: 'images/Product-M01_0.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_0.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_1.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_2.png' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_3.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_4.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_5.JPG' },
    { category: 'pijama', name: 'Pijama Ref. M03', price: '$50.000', image: 'images/Product-M03_6.JPG' },
    // Agrega más productos aquí...
];

const productsPerPage = 15;

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
                    </div>
                </div>
            </div>
        </div>`;
}

function renderProducts(pageNumber) {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentPageProducts = products.slice(startIndex, endIndex);

    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    currentPageProducts.forEach(product => {
        const productHTML = generateProductHTML(product);
        productsContainer.innerHTML += productHTML;
    });
}

// Llamamos a renderProducts con el número de página inicial (p. ej., 1)
renderProducts(1);
