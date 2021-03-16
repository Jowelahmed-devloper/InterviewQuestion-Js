const numbers = [5, 6, 8, 9, 10]
// const output =[];
// for(let i =0; i<numbers.length;i++){
//     const element = numbers[i]
//     const result = element*element;
//     output.push(result);

// }
// console.log(output);

// Using Map

const result = numbers.map(function(element){
    return element * 4;
})
console.log(result);