let a = +prompt("nhap so a")
if (a < 0 || a >= 0) {
    let b = +prompt("nhap so b")
    let tich = 1
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            tich = tich * b
        }
        alert(tich)
    } else {
        alert("du lieu khong hop le")
    }
}else{
    alert("du lieu khong hop le")
}