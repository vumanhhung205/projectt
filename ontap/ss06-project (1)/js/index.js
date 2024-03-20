// let products = [
//     {
//         image: "./assets/images/125822304.jpeg",
//         id: 1,
//         name: "Ốp điện thoại Iphone15",
//         price: "50.000",
//         stock: 100,
//         content: "...",
//     },
//     {
//         image: "./assets/images/250-8015-vo-case-nzxt-h9-elite-white-1.jpg",
//         id: 2,
//         name: "Vỏ máy tính cây",
//         price: "350.000",
//         stock: 23,
//         content: "...",
//     },
//     {
//         image: "./assets/images/2a-1691375040-Y8gFWxwz58.png",
//         id: 3,
//         name: "Màn hình máy tính, 2 tỉ màu",
//         price: "3.150.000",
//         stock: 42,
//         content: "...",
//     },
//     {
//         image: "./assets/images/442ea4f3b51856a7223fa640c145be14.jpg_720x720q80.jpg",
//         id: 4,
//         name: "Ốp điện thoại cute",
//         price: "65.000",
//         stock: 67,
//         content: "...",
//     },
// ];
// // lưu data lên trên localStorage
// localStorage.setItem("products", JSON.stringify(products));



let email = JSON.parse(localStorage.getItem("login"))||[];
let relog = document.getElementById("relog");

let user = JSON.parse(localStorage.getItem("users"))||[];
for (let i = 0; i < user.length; i++) {
    if(email==user[i].email){
        document.getElementById("renderUser").innerHTML = 
        `
        <div class="userInfor">
            <div>${user[i].userName}</div>
            <div class="userDown">
                <a href="#">Tài khoản của tôi</a>
                <a href="#">Đơn mua</a>
                <a href="#" onclick="logOut()">Đăng xuất</a>
            </div>
        </div>

        `
        ;
        relog.style.display= "none";
    } else{
        relog.style.display= "block";
    }
}
//lấy dữ liệu về
let products = JSON.parse(localStorage.getItem("products"));


// function render products
function renderProduct() {
    let element="";
    for (let i = 0; i < products.length; i++) {
        element+=
        `
        <div class="sanPham">
            <div>
                <img style="height: 180px; width: 180px;" src="${products[i].image}" alt="">
            </div>
            <div style="padding: 5px; padding-top: 0px; height: 35px">${products[i].name}</div>
            <div class="textSp" style="padding: 5px;"><u>đ</u>${products[i].price}</div>
        </div>
        `
    }
    document.getElementsByClassName("products")[0].innerHTML= element;
}
renderProduct();


function logOut(){
    localStorage.removeItem("login");
    relog.style.display = "block";
    document.getElementById("renderUser").innerHTML = "";
}

// nút tăng
document.querySelector('.input-group-prepend').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    var currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
});

document.querySelector('.input-group-append').addEventListener('click', function() {
    var input = this.parentNode.querySelector('input');
    input.value = parseInt(input.value, 10) + 1;
});
