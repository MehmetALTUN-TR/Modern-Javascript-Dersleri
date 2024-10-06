const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
const phone=document.getElementById('phone');

function error(input, message) {
    input.className='form-control is-invalid'    
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}

function success(input) {
    input.className='form-control is-valid'
}

function checkEmail(input) {
    const re= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    console.log(re.test(input.value))
    if(re.test(input.value)){
        success(input);
    }else{
        error(input,'hatalı bir mail adresi')
    }
}

function checkRequired(inputs) {
    inputs.forEach(input => {
        if(input.value===''){
            error(input,`${input.id} is required`);
            
        }else{
            success(input);
        }
        
    });
}

function checkLength(input,min,max) {
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter olmalı.`)
    }else if(input.value.length >  max){
        error(input, `${input.id} en fazla ${max} karakter olmalı.`)
    }else{
        success(input);
    }
}

function checkPasswords(input1,input2) {
    if(input1.value!==input2.value){
        error(input2,'Parolalar eşleşmiyor.')
    }
}
function validatePhoneNumber(input) {
    // Telefon numarasını doğrulayan regex
    const re = /^[1-9][0-9]{9}$/;
    if(input.value[0]=="0"){
        error(input,'Telefon numaranızı başında 0 olmadan giriniz.')
    }
    else if (!re.test(input.value)) {
        error(input,'Geçersiz telefon numarası.')
    } else {
        success(input)
    }   
}

form.addEventListener('submit',function(e){
    e.preventDefault() // submit işlemini engellemek içi event a iptal sinyali gönderiyoruz.
    
    checkRequired([username,email,password,repassword])
    checkEmail(email)
    checkLength(username,5,11);
    checkLength(password,6,8);
    checkPasswords(password,repassword)
    validatePhoneNumber(phone)
    
})