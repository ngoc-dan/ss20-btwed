let n = +prompt("nhap n so con in ra")
let str = "1"
let sum = 0
let num1 = 1
let num2 = 0
for (let i = 1; i < n; i++) {
    sum = num1 + num2
    str = str + " " + sum
    num2 = num1
    num1 = sum
}
if (n>0){
    alert(str)
}else{
    alert("du lieu khong hop le")
}