//первое задание
var number = 0
while (number <= 20 ) {
    
    if(number % 2 == 0) {
        console.log(number);
        
    }
    number++
}

//второе задание
var numm = 0
do{
    var number = +prompt('введите число')
    if(number >= 0){
        numm += number
    }
}while(number >= 0)
console.log('сумма чисел'+ numm);