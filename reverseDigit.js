function reverseDigit( num){
   let res = 0;
    while(num !== 0){
        let remainder = num % 10;
        res = res*10 + remainder;
        num = Math.floor(num / 10);
    
    }
    return res;
}

console.log(reverseDigit(123))