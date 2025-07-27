const furit=[
    
      {name:"apple",price:100,quantity:1},
      { name:"banana",price:50,quantity:2},
      { name:"orange",price:80,quantity:3},
      { name:"grape",price:120,quantity:4},
      { name:"kiwi",price:90,quantity:5}     
];
const expensiveItems = furit.filter(item => item.price > 100);
const itemTotals = expensiveItems.map(item => item.price * item.quantity);
const totalBill = itemTotals.reduce((sum, val) => sum + val, 0);
console.log( + totalBill);