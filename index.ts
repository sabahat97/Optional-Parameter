// function defeault parameter

function greet (name : string){
    console.log(`hello ${name}`)
}
greet ("sabahat");
greet ("faraz");
greet ("madia");



//optional parameter

function Names(name?:string,){
console.log(`Hello ${name}`)
}
Names() //ok no error but undefined console
Names("sabahat");//ok

