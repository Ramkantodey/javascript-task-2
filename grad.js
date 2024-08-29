let grad = 85;
if(grad >= 90 && grad <= 100){
console.log('A');
}
else if(grad >= 80 && grad <=89){
    console.log('B');
}
else if(grad >= 70 && grad <= 79){
    console.log('C');
}
else if(grad >= 60 && grad <= 69){
    console.log('D');
}
else{
   if(grad >100){
    console.log('Your Grad Is Worng');
   }
   else{
    console.log('F');
   }
}