window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister");
	form.onsubmit = validateForm;
}

function validateForm() {
    let password = document.forms["myRegister"]["password"][0].value;
    let retype = document.forms["myRegister"]["password"][1].value;

    if(password !== retype){
        document.getElementById("errormsg").innerHTML = "กรุณากรอกให้ตรงกัน"
        return false;
    }
    else
    {
        alert("สมัครสำเร็จ")
    }
    
}