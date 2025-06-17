export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
    orders.unshift(order);  //adds the most recent order to the front of [] rather than back
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}