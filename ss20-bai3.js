let num = prompt("nhap so can kiem tra")
let length = num.length;
let numNguoc = '';
if(isNaN(num)){
    alert("số không hợp lệ!!");
       
}else{
    for(let i = length; i >= 0; i--){
        numNguoc = numNguoc + num.charAt(i);
    }
    if(num === numNguoc){
        alert("là số đối xứng");
        
    }else{
        alert("không phải số đối xứng");
        
    }
}
