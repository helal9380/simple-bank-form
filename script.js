
document.getElementById('clickbtn').addEventListener('click', function(){
    const emailField = document.getElementById('emailfield');
    const email = emailField.value;
    const passwordfield = document.getElementById('userpassword');
    const password = passwordfield.value;
    // console.log(email, password);

    if(email === 'asadurrahman9380@gmail.com' && password === 'asad93@8015'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please give valid input');
    }
})