
const minesBtn = document.getElementById('mines-btn');
const plusBtn = document.getElementById('plus-btn');
let value = 1;
let initPhonePrice = 1219;

plusBtn.addEventListener('click', function(){
    const input = document.getElementById('mobile-input').value;
    const inputValue = parseInt(input);

    document.getElementById('mobile-input').value = inputValue + value;

    const mobilePrice = document.getElementById('mobile-price').innerText;
    const totalMobilePrice = parseInt(mobilePrice);

    const totalPrice = totalMobilePrice + initPhonePrice;
    document.getElementById('mobile-price').innerText =  totalPrice;

    const subtotal = parseInt(document.getElementById('sub').innerText);
    document.getElementById('sub').innerText = totalPrice
})


minesBtn.addEventListener('click', function(){
    const input = document.getElementById('mobile-input').value;
    const inputValue = parseInt(input);

    document.getElementById('mobile-input').value = inputValue - value;

    const mobilePrice = document.getElementById('mobile-price').innerText;
    const totalMobilePrice = parseInt(mobilePrice);

    const totalPrice = totalMobilePrice - initPhonePrice;
    document.getElementById('mobile-price').innerText =  totalPrice;

    parseInt(document.getElementById('sub').innerText);

    document.getElementById('sub').innerText = totalPrice;


})