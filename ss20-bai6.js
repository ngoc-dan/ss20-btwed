let n = +prompt("nhap so can kiem tra")
let seach = 0
for(let i = 2; i < n;i++){
    if(n % i == 0){
        seach++
    }
}
if(seach == 0 && n != 1){
    alert("Là số nguyên tố")
}else{
    alert("Không phải là số nguyên tố")
}