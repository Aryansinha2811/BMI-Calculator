const form = document.querySelector('.Forms'); // Corrected class name

form.addEventListener('submit', function (e) {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#result');

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height!`;
} 
else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight !!`;
} 
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
}
});
