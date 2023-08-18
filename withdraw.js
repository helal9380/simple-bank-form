document.getElementById('withdrawbtn').addEventListener('click', function(){
    const amountWithdrawField = document.getElementById('amountwithdrawfield');
    const amountWithdrawFieldString = amountWithdrawField.value;
    const amountWithdrawFieldValue = parseFloat(amountWithdrawFieldString);

    const withdrawBalanceElement = document.getElementById('withdrawbalace');
    const withdrawBalanceElementString = withdrawBalanceElement.innerText;
    const withdrawBalanceElementValue = parseFloat(withdrawBalanceElementString);

    const currentWithdrawBalance = withdrawBalanceElementValue + amountWithdrawFieldValue;
    withdrawBalanceElement.innerText = currentWithdrawBalance;
    
    const getTotalBalanceElement = document.getElementById('totalBalance');
    const getTotalBalanceElementString = getTotalBalanceElement.innerText;
    const getTotalBalanceElementValue = parseFloat(getTotalBalanceElementString);
    const getTotalAmount = getTotalBalanceElementValue - amountWithdrawFieldValue;
    getTotalBalanceElement.innerText = getTotalAmount;

    amountWithdrawField.value = '';


})