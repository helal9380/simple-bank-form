

document.getElementById('depositbtn').addEventListener('click', function(){
    const amountDepositField = document.getElementById('amountdepositfield');
    const amountDepositValueString = amountDepositField.value;
    const amountDepositValue = parseFloat(amountDepositValueString);
    
    const amountDepositTotal = document.getElementById('amoundeposittotal');
    const amountTotalElementString = amountDepositTotal.innerText;
    const amountTotalElement = parseFloat(amountTotalElementString);
    amountDepositTotal.innerText = amountDepositValue;

    const currentAmountTotal = amountTotalElement + amountDepositValue;
    amountDepositTotal.innerText = currentAmountTotal;

    const totalBalanceElement = document.getElementById('totalBalance');
    const totalBalanceValueString = totalBalanceElement.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    const currentBalanceTotal = totalBalanceValue + amountDepositValue;
    totalBalanceElement.innerText = currentBalanceTotal;
    

    // step -7
    amountDepositField.value = '';
})