var iInputNumber = document.querySelectorAll('input');
var plusButton = document.querySelectorAll('.plus-button');
var minusButton = document.querySelectorAll('.minus-button');
var iProductTotalPrice = document.querySelectorAll('.price');
var iCarQty = document.querySelector('.car-qty');
var subTotal = document.querySelector('.subtotal')
var total = document.querySelector('.totalPay')

var iProductPrice = [];
var subTotalNumber = 0;
var totalNumber = 0;

//取得目前商品總價
subTotalNumber = parseFloat(subTotal.innerHTML.slice(1 , -1));
totalNumber = parseFloat(total.innerHTML.slice(1 , -1));
console.log(totalNumber);

//處理商品樣數
var iLength = iInputNumber.length;
// var temp = iProductPrice[0].innerHTML.slice(1 , -1);

//處理各商品的單價
for (let i = 0 ; i < iLength ; i++)
{
    iProductPrice.push(parseFloat(iProductTotalPrice[i].innerHTML.slice(1 , -1)));    
}

for (let i = 0 ; i < iLength ; i++)
{
    plusButton[i].onclick = function ()
    {
        iInputNumber[i].value++;
        iProductTotalPrice[i].innerHTML = '$' + iProductPrice[i].toFixed(2);
        iCarQty.innerHTML++;
        subTotalNumber += iProductPrice[i];
        subTotal.innerHTML = '$' + subTotalNumber.toFixed(2);

        totalNumber = subTotalNumber + 24.90;
        total.innerHTML = '$' + totalNumber.toFixed(2);
    }

    minusButton[i].onclick = function ()
    {
        if (iInputNumber[i].value != 0)
        {
            iInputNumber[i].value--;
            iProductTotalPrice[i].innerHTML = '$' + iProductPrice[i].toFixed(2);
            iCarQty.innerHTML--;
            subTotalNumber -= iProductPrice[i];
            subTotal.innerHTML = '$' + subTotalNumber.toFixed(2);

            totalNumber = subTotalNumber + 24.90;
            total.innerHTML = '$' + totalNumber.toFixed(2);
        }        
    }


}