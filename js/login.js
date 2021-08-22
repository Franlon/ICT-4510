/*
   Abdiel L. Franco
   ICT-4510
   July 25, 2021
   Assignment Week #6: Sending user credentials to Heroku server, storing user profile in session, hiding form and showing welcome message
*/

function login() {

	let username = document.querySelector("[name=username]").value;
	let password = document.querySelector("[name=password]").value;
	
	let credentials = {
		username: username,
		password: password
	};

	fetch("https://ict4510.herokuapp.com/api/login", {
  		method: "POST", 
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify(credentials)
	}).then(response => response.json())
	  .then(user =>  {
	  sessionStorage.setItem('user', JSON.stringify(user));
	}).then(showWelcomeMessage())
}

function showWelcomeMessage(){

	let user = JSON.parse(sessionStorage.getItem('user'));
	let message = "Welcome, ".concat(user.user.first_name,  "! You will be redirected to the Home Page");
	
	var text = document.createTextNode(message);
	var paragraph = document.createElement("p");
	paragraph.setAttribute('id', 'welcome')
  	paragraph.appendChild(text);
  	document.querySelector("[name=form]").appendChild(paragraph);
  	
  	// Using jQuery for animating the UI elements
  	
  	$("#welcome").hide();
	$("#username").fadeOut("slow");
	$("#password").fadeOut("slow");
	$("#submit").fadeOut("slow", function() {
   		$("#welcome").fadeIn();
   		window.open("index.html");
   		window.close();
   	});
}