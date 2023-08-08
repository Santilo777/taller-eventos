document.addEventListener('DOMContentLoaded' , function(){
    const divElement = document.querySelector('div'); // selecciona el div
    divElement.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});