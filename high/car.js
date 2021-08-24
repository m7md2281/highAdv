let products = [
    { category: "cars", name : "bmw" },
    { category: "phones", name : "iphone" },
    { category: "laptops", name : "maacbook pro" },
    { category: "phones", name : "oneplus 8t" },
    { category: "phones", name : "samsung s21" },
    { category: "cars", name : "kia" },
    { category: "cars", name : "honda" }, 
  ]
  //Q1
  // write single line code to print only cars products using high order functions 
console.log(products.filter(products => products.category === 'cars'))

//Q2



//Starts from one

 products.map((x, i) => {
  x.id = i + 1
  console.log(x)
})

//Starts from zero
/*
let i = 0;
products.map(n => {
  n['id'] = i;
  i++;
})

  console.log(products);

*/