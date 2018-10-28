//for (let i = 10; i >= 0; i--) {
//    if (i % 2 !==0) {
//        continue;
//    }
//    prn(i);
//}

function prn(val) {
    document.write(val + '<br>');
}

///let counter = 0;
//while (counter <=10) {
//    prn(counter); 
//    counter ++;
//}

//let counter = 0;
//do {
//    prn(counter); 
//    counter ++;
//} while (counter <= 10);

//let num = parseFloat(prompt('Enter a number'));
//while (Number.isNaN(num)) {
//    alert('Please enter a number');
//    num = parseFloat(prompt('Enter a number'));
//}

let products = [];
products[0] = 'Tesla';
products[1] = 'Ferrari';
products.push('Chevrole');
products.push('Fiat');
products[100] = 'ZAZ';
//prn(products);

//for (let i= 0 ; i < products.length; i++) {
//    if (products[i] !== undefined) {
//    prn(products[i]);
//    }
//}

//products.forEach(prn);

//products.forEach(function(el){
//    prn(el);
//});

//products.forEach( el => prn(el) )

let prices = [10, 15, 25, 100, 50];
prn('Unsorted');
prices.forEach(prn);
let sortedPrices = prices.sort((a, b) => a - b);
prn('Sorted');
sortedPrices.forEach(prn);

let sum=0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
prn('Total:' + sum);

let total = prices.reduce((acc, el) => acc + el);
prn('New total:' + total);