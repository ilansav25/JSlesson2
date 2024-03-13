var n = +prompt("enter the number to get number added with number 3:")
var sum = 0;
for (var index = 0; index <= n; index++) {
    if(index % 3 == 0){
        sum = sum + index
    }
}
console.log(sum)