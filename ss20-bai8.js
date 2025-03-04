let n = +prompt("nhap n so nguyen to can  in ra")
let str = ""
let j = 2
let num = '0'
if (n > 0) {
    for (let i = 0; i < n; i++) {
        for (j; ; j++) {
            let seach = 0
            for (let k = 2; k < j; k++) {
                if (j % k == 0) {
                    seach++
                }
            }
            if (seach == 0) {
                num = j
                break
            }
        }
        j = num + 1
        str = str + " " + num
    }
    alert(str)
} else {
    alert("n khong hop le")
}