
// Hey Ben! 
// Awesome, so I've make some progress by adding localstorage elements 
// to allow the check() function on the login-form to work if the user 
// had just registered through the register-form above it (which uses the
// store() function. 
// However, I found a bug related to if I wanted to log in again after a new
// user registers. In that scenario, it seems that the program thinks the user
// isn't registered - when clearly they had. Will need to come back to de-bug that. 


// Stores the Username & Password inputs from register-form into local storage
function store() {
	// Stores inputs from the register-form in variables
	var name = document.getElementById('regUser').value;
	var pw = document.getElementById('regPw').value;	
	// Stores input from register-form
    localStorage.setItem('name', regUser.value);
    localStorage.setItem('pw', regPw.value);
    console.log(name + pw + " are stored in local storage");
}

// Checks if data inputted in login-form is equal to any of the stored data in the localstorage from the register-form above
function check() {
    // Stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    console.log(storedName + storedPw + "found in local storage");
	// Stores inputs from the login-form in variables
	var loginName = document.getElementById('lgnUser').value;
	var loginPw = document.getElementById('lgnPw').value;	
	console.log(loginName + loginPw + " attempts to login");
    // Checks if inputted data from login-form is equal to stored data from the register-form 
	if(loginName === storedName && loginPw === storedPw) {
	        alert('Welcome back ' + loginName + ". You are logged in.");
	    } else {
	        alert('Error - you are not registered. Please register above.');
	    }
}
