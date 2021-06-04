let product = ['ti vi', 'tu lanh','may giat','may hut bui'];
let _array = [1.003, 2.542, 3.132, 4.532, 5.032];
let names = ['teo','ti','hai','teo','hai','teo'];

//includes//
console.log('Result check element in array: ' + product.includes('tu lanh'));
//isArray
console.log('Result check  array: ' +Array.isArray(product));
//toString
console.log(product.toString());
//sort
product.sort();
console.log(product);
//forEach 
product.forEach(e => {
    if(e.includes('ti vi'))
    {
        console.log(e.length);
        console.log(e.split(' '));
    }
});
//JSON.stringify - JSON.parse
let tmp = JSON.stringify(product);
console.log(tmp);
console.log(JSON.parse(tmp));
//push
product.push('may hut bui');
console.log(product);
//map
let new_aray = _array.map(x => x + 3);
console.log(new_aray);
//reduce
console.log(new_aray.reduce((a,b) => a+b).toFixed(0));
let countedNames = names.reduce(function (Names, name) { 
    if (name in Names) {
      Names[name]++
    }
    else {
      Names[name] = 1
    }
    return Names
  }, {})
console.log(countedNames)
//filter
const result = _array.filter(word => word.toFixed(0) > 3);
console.log(result);
//getDay 
const _day = new Date('May 4, 2021 16:15:30');
const date_tmp = _day.getDay(); //thứ
const date_tmp2 = _day.getDate(); //ngày
console.log(date_tmp);
console.log(date_tmp2);



