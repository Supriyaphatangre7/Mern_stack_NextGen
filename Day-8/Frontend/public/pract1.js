var a=10;
var b=5;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var pow=4**2;
console.log("addition is :"+c+"sub is:"+d+"mul is :"+ e+  "pow :" + pow + "mul is:" + f);


// kilo meter to miles

var kilo=14;

var miles=kilo*0.621371;

console.log(miles);


//degress to farenhite

var degree=25;
var cel=(degree*1.8)+32;
console.log(cel);


//kgs to pounds

var kilo=25;
var pound=kilo*2.20462;
console.log(pound);

//simple interrest

var p=10000;
var r=2;
var t=2;

var res=p*r*t/100;
console.log(res);


var kg=47;
var height=1.58;

var BMI=kg/height**2;

if(BMI<18.5)
{
    console.log("underweight")
}
else if(BMI>18.5 && BMI<24.9)
{
    console.log("normal weight");
}

else if( BMI>25 && BMI<29.9)
{
    console.log("over weight");
}
else{
    console.log("obese");
}


//bill calculating


var units=350;
var bill=0
if(units<=100)
{
    bill=0;

}
else if(units >=100 && units<200)
{
    bill=(units-100)*5;
}
else if(units >=200)
{
   bill=100*5+(units -200)*10;
}

console.log(bill);