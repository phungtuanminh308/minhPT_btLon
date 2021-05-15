/////////// HÀM FUNCTION ///////////////////////
function plusProduct(n) {
    listEat[n]++;
    document.getElementById(`value${n}`).innerText = listEat[n];
    // listEat[n] = document.getElementById(`value${n}`).innerText;
    document.getElementById(`money${n}`).innerText = `${eval(listEat[n] * product[n].priceNum)} VND`;
    tamTinh()
    localStorage.total++;
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.total}</a>`
}

function minusProduct(n) {
    if (document.getElementById(`value${n}`).innerText > 0) {
        document.getElementById(`value${n}`).innerText--;
        listEat[n] = document.getElementById(`value${n}`).innerText;
        localStorage.total--;
    }
    document.getElementById(`money${n}`).innerText = `${eval(listEat[n] * product[n].priceNum)} VND`;
    tamTinh()
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.total}</a>`
}

function plusDrink(n) {
    document.getElementById(`value-${n}`).innerText++;
    listDrink[n] = document.getElementById(`value-${n}`).innerText;
    document.getElementById(`money-${n}`).innerText = `${eval(listDrink[n] * drink[n].priceNum)} VND`;
    document.getElementById("subtotal").innerText = `${subtotal} VND`;
    tamTinh();
    localStorage.total++;
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.total}</a>`
}

function minusDrink(n) {
    if (document.getElementById(`value-${n}`).innerText > 0) {
        document.getElementById(`value-${n}`).innerText--;
        localStorage.total--;
        listDrink[n] = document.getElementById(`value-${n}`).innerText;
    }
    document.getElementById(`money-${n}`).innerText = `${eval(listDrink[n] * drink[n].priceNum)} VND`;
    tamTinh()
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.total}</a>`
}

function tamTinh() {
    subtotal = 0;
    for (i in listEat) {
        subtotal += Number(eval(listEat[i] * product[i].priceNum));
    }
    for (i in listDrink) {
        subtotal += Number(eval(listDrink[i] * drink[i].priceNum));
    }
    document.getElementById("subtotal").innerText = `${subtotal} VND`;
    document.getElementById("tax").innerText = `${subtotal*0.1} VND`;
    document.getElementById("totalMoney").innerText = `${Math.floor(subtotal*1.1 + 30000)} VND`;
}

///////////// GỌI BIẾN ///////////////////////////
let listEat = [localStorage.product0, localStorage.product1, localStorage.product2, localStorage.product3, localStorage.product4, localStorage.product5, localStorage.product6, localStorage.product7, localStorage.product8, localStorage.product9, localStorage.product10, localStorage.product11, localStorage.product12, localStorage.product13, localStorage.product14];
let listDrink = [localStorage.drink0, localStorage.drink1, localStorage.drink2, localStorage.drink3, localStorage.drink4];

///////////// MODIFY HTML ĐỒ ĂN //////////////////
for (i in listEat) {
    if (listEat[i] > 0) {
        document.getElementById("cart-page").innerHTML +=
            `<td>
            <div class="cart-info">
            <img src="${product[i].link}" />
                    <div class="cart-name">
                        <p>${product[i].food}</p>
                        <small>Giá: ${product[i].price}</small>
                        <a id="delete" href="##">Xóa sản phẩm</a>
                    </div>
                </div>
            </td>
            <td class="soLuong">
                    <button id="minus" type="button" onclick="minusProduct(${i})">-</button>
                    <div class="value" id="value${i}">${listEat[i]}</div>
                    <button id="plus" type="button" onclick="plusProduct(${i})">+</button>
                </td>
            <td id="money${i}">${eval(listEat[i] * product[i].priceNum)} VND</td>`
    }
}

/////////////// MODIFY HTML ĐỒ UỐNG /////////////////////
for (i in listDrink) {
    if (listDrink[i] > 0) {
        document.getElementById("cart-page").innerHTML +=
            `<td>
            <div class="cart-info">
            <img src="${drink[i].link}" />
                    <div class="cart-name">
                        <p>${drink[i].drink}</p>
                        <small>Giá: ${drink[i].price}</small>
                        <a href="##">Xóa sản phẩm</a>
                    </div>
                </div>
            </td>
            <td class="soLuong">
                    <button id="minus" type="button" onclick="minusDrink(${i})">-</button>
                    <div class="value" id="value-${i}">${listDrink[i]}</div>
                    <button id="plus" type="button" onclick="plusDrink(${i})">+</button>
                </td>
                <td id="money-${i}">${eval(listDrink[i] * drink[i].priceNum)} VND</td>`
    }
}

////////////// LỆNH JS ////////////////
let subtotal;
tamTinh();