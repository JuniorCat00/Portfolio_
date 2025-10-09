window.onload = loginLoad;
function loginLoad(){
	var clickButton = document.getElementById("myLogin");
	clickButton.onsubmit  = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
    const urlPara = new URLSearchParams(queryString);
	const RegisUsername = urlPara.get('username');
	const RegisPassword = urlPara.get('password')
	let username = document.forms["myLogin"]["username"].value;
	let password = document.forms["myLogin"]["password"].value;

	if(RegisUsername != username || RegisPassword != password){
		alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
		return false;
	}
	else{
		alert("เข้าสู่ระบบสำเร็จ")
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			