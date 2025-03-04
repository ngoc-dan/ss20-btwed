let n = +prompt("nhap so")
let sum = 0
if(n >= 0){
    for (let i = 0 ; i<= n ;i++){
        sum=sum+i
    }
    alert(sum)
}else{
    alert("du lieu nhap khong hop le")
}