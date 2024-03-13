//ex 4 
/*  var n = +prompt("enter the number to get number added with number 3:")
var sum = 0;
for (var index = 0; index <= n; index++) {
    if(index % 3 == 0){
        sum = sum + index
    }
}
console.log(sum)  */

//ex 6 
var num = +prompt("Enter sum number")
var sum = 0;
for (var index = 0; index <= num; index++) {
    sum = sum + Math.pow(2 , index)
}
console.log(sum)