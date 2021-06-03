var iInputNumber = document.querySelectorAll('input');
var plusButton = document.querySelectorAll('.plus-button');
var minusButton = document.querySelectorAll('.minus-button');
var iProductTotalPrice = document.querySelectorAll('.price');
var iCarQty = document.querySelector('.car-qty');
var subTotal = document.querySelector('.subtotal')
var total = document.querySelector('.totalPay')
// 初值設定
var iProductPrice = [];
var iQty = 3;
var subTotalNumber = 0;
var totalNumber = 0;
var shipping = 24.90;

//取得目前商品總價
subTotalNumber = parseFloat(subTotal.innerHTML.slice(1, -1));
totalNumber = parseFloat(total.innerHTML.slice(1, -1));

//處理商品樣數
var iLength = iInputNumber.length;

//處理各商品的單價
for (let i = 0; i < iLength; i++) {
    iProductPrice.push(parseFloat(iProductTotalPrice[i].innerHTML.slice(1, -1)));
}

// 處理單純加號減號
for (let i = 0; i < iLength; i++) {
    plusButton[i].onclick = function () {
        UpdateProduct(i);
    }

    minusButton[i].onclick = function () {
        if (iInputNumber[i].value > 1) {
            UpdateProduct(i, -1);
        }
    }
}

// 監聽input value改變
for (let i = 0; i < iLength; i++) {
    iInputNumber[i].addEventListener('input', UpdateValue);
}

// 函式區
// 目的 : 處理各產品因為加減號影響的價格以及總價
// 輸入 : 第幾個產品 以及 opcode 決定+-
function UpdateProduct(index, opcode=1) {
    var temp = parseInt(iInputNumber[index].value) + opcode;
    iInputNumber[index].value = temp;
    iProductTotalPrice[index].innerHTML = '$' + (iProductPrice[index] * iInputNumber[index].value).toFixed(2);

    iQty += opcode;

    subTotalNumber += iProductPrice[index] * opcode;
    UpdateTotalPay();

}
// 目的 : 監聽輸入數值改變 處理直接輸入input欄位影響的價格
// 輸入 : 受監聽的輸入攔位
function UpdateValue(e) {
    subTotalNumber = 0;
    totalNumber = 0;
    iQty = 0;

    for (let i = 0; i < iLength; i++) {
        var iSum = (iProductPrice[i] * iInputNumber[i].value)
        iProductTotalPrice[i].innerHTML = '$' + iSum.toFixed(2);
        subTotalNumber = iSum + subTotalNumber;
        iQty += parseInt(iInputNumber[i].value);
    }
    UpdateTotalPay();
}
// 目的 : 更新小計和總計價格
function UpdateTotalPay() {
    iCarQty.innerHTML = iQty;
    subTotal.innerHTML = '$' + subTotalNumber.toFixed(2);
    totalNumber = subTotalNumber + shipping;
    total.innerHTML = '$' + totalNumber.toFixed(2);
}

