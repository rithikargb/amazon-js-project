const xhr = new XMLHttpRequest(); //new http msg aka request to send to backend

xhr.addEventListener('load', () => {
    console.log(xhr.response);
}); 

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();