let yourGrad = 81;
let friendGrad = 81;

if(yourGrad > 80){
    if(friendGrad > 80){
        console.log('Go For A Lunch');
    }
    else if(friendGrad < 80 && friendGrad >=60){
        console.log('Good Luck Next Time');
    }
    else if(friendGrad < 60 && friendGrad >= 40){
        console.log('Friend Message Unseen');
    }
    else{
        console.log('Block Your Friend');
    }
}
else{
    console.log('Go To Home And Sleep And Act');
}