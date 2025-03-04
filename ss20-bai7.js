let n = +prompt("nhap n so con in ra")
let str = "1" + " " + "1"
let sum = 0
let num1=1
let num2=1
for(let i=2; i< n;i++ ){
    sum = num1 + num2
    str = str + " " + sum
    num2=num1
    num1=sum
}
alert(str)