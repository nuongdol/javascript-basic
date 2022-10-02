
//key : value
let obj = {
    name : 'Eric ',
    address: 'Ha Noi',
    a: function(){
        console.log(`Hello world inside function`)
        return''
    }

};

console.log(`What is your name ?`, `My name's: `,obj.name)
console.log(`What is your name ?`, `My name's: `,obj['name'])
console.log(`Where are you from ?`, `i am from: `,obj.address)
console.log(obj);



