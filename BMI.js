let weightKg = 58;
let heightMiter = 1.7272;
let BMI = weightKg / (heightMiter ** 2);
console.log(BMI .toFixed(2));


if(BMI < 18.5){
    console.log('Underweight')
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('Normal');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('Overweight');
}
else{
    console.log('Obesity');
}