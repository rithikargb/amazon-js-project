import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

/*

//Async Await
async function loadPage() {
    try {
        await loadProductsFetch();  //instead of .then()

        await new Promise((resolve) => {
            loadCart(() => {
                resolve();
            });
        });
    }

    catch (error) {
       console.log('Unexpected error. Try again later.');  
    }

    renderOrderSummary();
    renderPaymentSummary();

    return 'value2';           // = resolve('value2')
}
loadPage();

//Promises

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        });
    }), 
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/ 

renderOrderSummary();
renderPaymentSummary();
