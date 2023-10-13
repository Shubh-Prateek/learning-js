let score=33
//kayi baar pta nhi hota value kaha se aarhey to pata nhi rhta backend se kya aarha
//datatype small m likhte
console.log(typeof score);
score="33"
console.log(typeof (score));

let valueInNumber=Number(score);
//Number datatype class based , aur v baaki datatype ko aise likh skte ab score number m change hochuka valueinNumber mein

console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("---------------------")

//"33"=>33
//"33abc"=>ye string typeof m number dikaha rha par print krne p NaN
//true=>1;false=>0
//""=>0

let a="44ab"
console.log(typeof a)
let a1=Number(a);
console.log(typeof a1);
console.log(a1);
console.log("---------------------")


let b=1
console.log(typeof b)
let b1=Boolean(b);
console.log(typeof b1);
console.log(b1);
console.log("---------------------")

let b2=""
console.log(typeof b2)
let b3=Boolean(b2);
console.log(typeof b3);
console.log(b3);
console.log("---------------------")

console.log("1"+2,typeof ("1"+2));
console.log(1+"2",typeof (1+"2"));
console.log("1"+2+4,typeof ("1"+2+4));
console.log(1+"2"+4,typeof(1+"2"+4));
console.log(1+2+"4",typeof(1+2+"4") );

console.log("*****************************")

console.log("1"-2,typeof ("1"+2));
console.log(1-"2",typeof (1+"2"));
console.log("1"-2-4,typeof ("1"+2+4));
console.log(1-"2"-4,typeof(1+"2"+4));
console.log(1-2-"4",typeof(1+2+"4") );

console.log("*****************************")

let gameCounter=100;
++gameCounter;
console.log(gameCounter);

let num1,num2,num3
num1=num2=num3=4+8
console.log(num1,num2,num3)

console.log(+true)
console.log(-true)
