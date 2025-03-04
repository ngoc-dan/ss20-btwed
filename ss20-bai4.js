let str = prompt("nhap chuoi can kiem tra")
let search =prompt("nhap chu can tim")
if(str.includes(search)==true){
    alert("Tồn tại từ cần tìm kiếm")
}else if(str.includes(search)==false){
    alert("Không tồn tại từ cần tìm kiếm")
}