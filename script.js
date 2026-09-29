//Logical Operators
// 1.Use && to check whether 10 > 5 and 20 > 15 are true.
let a = 10>5
let b = 20>15
console.log(a && b);

// 2.Use && to check whether 10 > 15 and 20 > 10 are true.
let c = 10>15
let d = 20>10
console.log(c && d);

// 3.Use || to check whether 10 > 20 or 15 > 10 is true.
let e = 10>20
let f = 15>10
console.log(e || f);

// 4.Use || to check whether 5 > 10 or 20 < 15 is true.
let g = 5>10
let h = 20<15
console.log(g || h);

// 5.Use ! to reverse the result of 10 > 5.
let i = 10>5
console.log(!(i));

// 6.Use ! to reverse the result of 10 < 5.
console.log(!(10<5));

// 7.Create two conditions using && and || and print the final result.
let a1 = 10>5
let a2 = 20>15
console.log(a1 && a2);
console.log(a1 || a2);

// 8.Create three conditions using &&, ||, and ! together.
console.log(!(10>5 && 20>15 || 2>5));



//Ternary Operator
// 9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
var age = 21
let result = age >= 18 ? "Eligible" : "Not Eligible" ;
console.log(result);

// 10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
var marks = 22
let grade = marks >=35 ? "Pass" : "Fail";
console.log(grade);

// 11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
var num = 12
let ans = num > 10 ? "greater than 10" : "not greater than 10"
console.log(ans);
 
// 12.Create a number variable. Check whether it is even or odd using a ternary operator.
let number = 22
let check = number%2 == 0 ? "Even" : "Odd";
console.log(check);

// 13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
let sal= 42000
let check1 = sal > 30000 ? "Good Salary" : "Low Salary";
console.log(check1);



//Concatenation & Template Strings
// 14.Create three variables containing your first name, last name, and city. Join them using +.
let firstname = "kevin"
let lastname = "V"
var city = "Kumbakonam"
console.log(firstname +" " + lastname + " " + city);

// 15.Create name and age variables and print them together using concatenation.
var name = "kevin"
var age = 21
console.log(name + age);

// 16.Create three variables: product, price, and brand. Print them as one sentence using +.
let product = "Shirt"
let price = 2999
let brand = "Westside"
console.log(product +" " + price +" "+ brand);

// 17.Create variables for your name, qualification, and company. Display them using a template string.
var name = "kevin"
var qualification = "BE"
var company = "Stackly"
console.log(`${name} ${qualification} ${company}`);

// 18.Create name, age, and city variables. Display them using a template string in one sentence.
var name = "kevin"
var age = 21
var city = "kumbakonam"
console.log(`${name}${age}${city}`);



//Type Casting — Implicit
// 19.Add a string and a number. Print the result and its typeof.
var str = "freakyy"
var num = 21
console.log(str + num);
console.log(typeof(str + num));

// 20.Add a number and a number. Print the result and its typeof.
var num1= 21
var num2 = 21
console.log((num1 + num2));
console.log(typeof(num1+num2));

// 21.Add a number and true. Print the result and its typeof.
var num = 21
var bool = true
console.log(num + bool);
console.log(typeof(num + bool));

// 22.Add a number and null. Print the result and its typeof.
var num = 21
var data = null
console.log(num + data);
console.log(typeof(num + data));

// 23.Add a string and true. Print the result and its typeof.
var str = "kevin"
var data = true
console.log(str + data);
console.log(typeof(str+data));

// 24.Add a string and an array. Print the result and its typeof.
var str = "stackly"
var array = [1,2]
console.log(str + array);
console.log(typeof(str+array));

// 25.Add a number and an object. Print the result and its typeof.
var num = 21
var obj = {k : 2}
console.log(num + obj);
console.log(typeof(num + obj));

// 26.Create three different expressions using different data types and check their resulting data types.
let exp1 = 21 + "age"
let exp2 = 10 > 2
let exp3 = "kevin"*2
console.log(exp1,exp2,exp3);
console.log(typeof(exp1));
console.log(typeof(exp2));
console.log(typeof(exp3));



//Type Casting — Explicit
// 27.Convert "100" into a number using Number() and print the result.
var num = "100"
console.log(Number(num));

// 28.Convert "25" into a number and check its data type using typeof.
console.log(typeof(Number("25")));

// 29.Convert true into a number using Number().
console.log(Number(true));

// 30.Convert false into a number using Number().
console.log(Number(false));

// 31.Convert an empty string into a number using Number().
console.log(Number(" "));

// 32.Convert null into a number using Number().
console.log(Number(null));

// 33.Convert undefined into a number using Number().
console.log(Number(undefined));

// 34.Convert "Hello" into a boolean using Boolean().
console.log(Boolean("Hello"));

// 35.Convert an empty string into a boolean using Boolean().
console.log(Boolean(" "));

// 36.Convert 0, 1, and -1 into boolean values using Boolean().
console.log(Boolean(0,1,-1));

// 37.Convert an array into a boolean using Boolean().
console.log(Boolean([1,2]));

// 38.Convert an object into a boolean using Boolean().
console.log(Boolean({k:2}));

//Conditional Statements
// 39.Create an age variable. Using if, print "Eligible" if the age is 18 or above.
var age = 21
if (age>=18)
    console.log("Eligible");
    
// 40.Create an age variable. Using if...else, print whether the person is eligible to vote.
var age = 17
if (age>=18)
    console.log("eligible for vote");
else
    console.log("not eligible for vote");
       
// 41.Create a marks variable and use if...else to print "Pass" or "Fail".
var marks = 46
if (marks>=35)
    console.log("Pass");
else
    console.log("Fail");

// 42.Create a time variable and use else if to display:
//1–6 → "Early Morning"
//7–12 → "Morning"
//13–17 → "Afternoon"
//18–19 → "Evening"
//20–24 → "Night"
//Anything else → "Invalid Time"
var time = 22
if (time<=1 || time<=6){
    console.log("Early Morning");   
}else if (time<=7 || time<=12){
        console.log("Morning");
}else if (time<=13 || time<=17){
    console.log("Afternoon");
}else if (time<=18 || time<=19){
    console.log("Evening");
}else if(time<=20 || time<=24){
    console.log("Night");
}
else 
    console.log("Invalid Time");
        
// 43.Create a temperature variable and use if...else if...else to print:
//Above 35 → "Hot"
//20–35 → "Normal"
//Below 20 → "Cold"
let temp = 25
if (temp>=35){
    console.log("Hot");
}else if (temp<=20 || temp<=35){
    console.log("normal");
}else if (temp<20){
    console.log("cold");
}

// 44.Create a nested if program that checks:
//Age ≥ 18
//Height ≥ 170
//Weight ≥ 60
//Print "Eligible" only when all three conditions are satisfied.
var Age = 21
var Height = 168
var Weight = 64
if (Age >= 18){
    if (Height >= 170){
        if (Weight >= 60){
            console.log("Eligible");
            
        }else
          console.log("your Age is not eligible");

    }else
        console.log("your Height is not eligible");
        
    
}else
    console.log("your Weight is not eligible");


//Switch Statement
// 45.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
var trafficLight = "red"
switch(trafficLight){
    case  "red" : console.log("Stop");
    break;
    case "orange" : console.log("Ready");
    case "green" : console.log("Go");   
}

// 46.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
var day = "Tuesday";
switch(day){
    case "Monday" : console.log("Monday");break;
    case "Tuesday" : console.log("Tuesday");break;
    case "Wednesday" : console.log("Wednesday");break;
    case "Thursday" : console.log("Thursday");break;
    case "Friday" : console.log("Friday");break;
    case "Satday" : console.log("Saturday");break;
    case "Sunday" : console.log("Sunday");break;  
}

// 47.Create a choice variable with values 1, 2, or 3. Use switch to print:
//1 → "Start"
//2 → "Settings"
//3 → "Exit"
var choice = "2" ;
switch (choice){
    case "1" : console.log("Start");break;
    case "2" : console.log("Settings");break;
    case "3" : console.log("Exit");break;   
}



//Loops
// 48.Use a for loop to print numbers from 1 to 10.
for (let  a = 1 ; a <= 10 ; a++) 
    console.log(a);
    
// 49.Use a while loop to print numbers from 10 to 1.
let val = 10
while (val >= 0){
    console.log(val);

    val--;
}

// 50.Create an array of fruits and use:
//for...of to print every fruit.
let fruits = ["apple", "orange","banana"]
for ( a of fruits){
    console.log(a);
    
}

//Create an object containing name, role, and experience, then use for...in to print every key and value.
var obj ={
    name1 : "kevin",
    role : "developer",
    experience : "2 years"
}
for(let c in obj){
    console.log(obj[c]);
    
}
     
    

