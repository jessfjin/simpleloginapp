

// ** This stores the Username & Password inputs from register-form into local storage
// & also stores these input into an array for longer-term reference & call-back

// Global variable that holds the array of Registered User's information
var regsInfoArr=[] 
function store() {
	// Stores inputs from the register-form in variables
	var name = document.getElementById('regUser').value;
	var pw = document.getElementById('regPw').value;	
    // Stores above registered username & password data pairs into an object
	var regsInputsOb = {
			username: name,
			password: pw
		};
		console.log(regsInputsOb);
	// Adds this new object into the Array (add to the end)
	regsInfoArr.push(regsInputsOb);
		console.log(regsInfoArr); 
		console.log(regsInfoArr[0]);
		console.log(regsInfoArr[1]);
	// Resets form on button click
	document.getElementById('register-form').reset();
}

// Checks if the Username & Password data inputted in login-form is equal 
// to any of the stored data in the array made above
function check() {
	// Stores inputs from the login-form in variables
	var loginName = document.getElementById('lgnUser').value;
	var loginPw = document.getElementById('lgnPw').value;
    // Stores above login username & password data pairs into an object	
	var loginObj = {
			username: loginName,
			password: loginPw
		}
		console.log(loginObj);
	// Resets form on button click
	  document.getElementById('login-form').reset();
	// Checks if the inputted login info is in the array of registered users 
		console.log(regsInfoArr);
		console.log(JSON.stringify(loginObj));
		console.log(JSON.stringify(regsInfoArr[0]));
	// Loops through the array to see if inputted data from login-form is equal to any of the stored data from the register-form 
	for (var i = 0; i < regsInfoArr.length; i++) { 
		if ( JSON.stringify(loginObj)  == JSON.stringify(regsInfoArr[i]) ) {
	        alert('Welcome back ' + loginName + "! You are logged in.");
	        break;
	    } else {
	        alert('Error - you are not registered. Please register above.');
	        break;
	    }
	}
}

// Simple Record of a SELF TEST I used to make sure the stringify() concept could be used to compare equality of objects. 
// For more details, see link: http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
// 	obj1 = {a: 1,b: 2}
// 	obj2 = {a: 1,b: 2}
// 	if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
// 		console.log("true")
// 	} else {
// 		console.log("false")
// 	}


// Some OLD CODE when I was previously using Local Storage & no storage Array... but NOW I am trying to phase out 
// the Local Storage element while incorporating this storage Array. For reference however, this function checks if 
// data inputted in login-form is equal to any of the stored data in the localstorage from the register-form above
// function check() {
//     // Stored data from the register-form
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');
//     console.log(storedName + storedPw + "found in local storage");
// 	// Stores inputs from the login-form in variables
// 	var loginName = document.getElementById('lgnUser').value;
// 	var loginPw = document.getElementById('lgnPw').value;	
// 	console.log(loginName + loginPw + " attempts to login");
//     // Checks if inputted data from login-form is equal to stored data from the register-form 
// 	if(loginName === storedName && loginPw === storedPw) {
// 	        alert('Welcome back ' + loginName + ". You are logged in.");
// 	    } else {
// 	        alert('Error - you are not registered. Please register above.');
// 	    }
// }

