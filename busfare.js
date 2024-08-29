const ticketPrice = 800;
const age = 60;
const student = true;

if(age < 10){
    console.log('Children Ticket Free');
}
else if(!student){
    // 50% discount
    const discount = ticketPrice * 50 / 100;
    const ticketPay = ticketPrice - discount;
    console.log(ticketPay);
}
else if(age >= 60){
    // 15% discount
    const discount = ticketPrice * 15 / 100;
    const ticketPay = ticketPrice - discount;
    console.log(ticketPay);
}
else{
    console.log(ticketPrice);
}