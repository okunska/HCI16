//Link to view2
function toView2(){
	
	window.location = "view/view2.html";
}

//Link to view3
function toView3(){
	
	window.location = "view3.html";
}

//Link to view4
function toView4(){
	
	window.location = "view4.html";
}

//Link to view4_login
function toView4_Log(){
	
	window.location = "view4_Log.html";
}

//Link to view4_registration
function toView4_Reg(){
	
	window.location = "view4_Reg.html";
}


//Link to view5
function toView5(){
	
	window.location = "view5.html";
}



//Validation SignUp
function formValidationSignUp(){
	alert("Login");
	var name =  document.getElementById("usernameLog").value;
	var pass = document.getElementById("passwordLog").value;

	alert(name);
	alert(pass);
}

//Validation SignUp
function formValidationSignIn(){
	var name =  document.getElementById("usernameReg").value;
	var pass = document.getElementById("passwordReg").value;
	var passConf = document.getElementById("passwordConfReg").value;

	var user = {};
	if(pass == passConf){
		user.username = name;
		user.password = pass;
	}
	alert(read(user.username));
	if(read(user.username) == null){
		var x = saveUser(user);
	}else{
		alert("Invalid Username. This Username used.")
	}
}

//create object User
function User(name, password){
	this.name = name;
	this.password = password;
}

function saveUser(obj){
  	localStorage.setItem(obj.username, JSON.stringify(obj.password));
    alert("saved!");
    localStorage.removeItem("user");
    localStorage.removeItem("user123");
}

function read(key){
	var pass = JSON.parse(localStorage.getItem(key));
	return pass;
}