let n = +prompt("nhap so n")
let str = ""
if (n>=5){
    for(let i=1;i<=n ;i++){
        if (i % 5 == 0){
            str = str + " "+ i + ","
        }
    }
    alert("ca so chia het cho 5 tu 1 den"+" "+n+" "+"la :"+" "+str)
}else {
    alert("du lieu nhap khong hop le")
}