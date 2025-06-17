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
loadPage().then((value) => {
    console.log('next step');
    console.log(value); 
});

//Promises practice

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value to pass on');
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

new Promise((resolve) => {
    console.log('runs this fn. immediately = start promise')
    /* async code(() => {
        console.log('finished loading');
        resolve();
        })
    */ /*
}).then(() => {   //adding a next step for promise
    console.log('next step')
})   

*/ 

renderOrderSummary();
renderPaymentSummary();