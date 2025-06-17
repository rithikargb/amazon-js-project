import { products } from "./products";

const xhr = new XMLHttpRequest(); //new http msg aka request to send to backend

xhr.addEventListener('load', () => {
    console.log(xhr.response);
}); 

xhr.addEventListener(('error'), () => {   //Error handling
    console.log('Unexpected error. Try again later.');
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

//Error handling in Promises - .catch() 
function loadProductsFetch() {
    const promise = fetch(
        'https://supersimple.dev/backend'

    ).then((response) => {
        return response.json();

    }).then((productsData) => {
        products = productsData.map((productDetails) => {
            if (productDetails.type === 'clothing') {
                return new Clothing(productDetails);
            }
            return new Product(productDetails);
        });

    }).catch((error) => {  //in case of error
        console.log('Unexpected error. Try again later.');
    });

    return promise;
}

loadProductsFetch();