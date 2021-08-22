 	let user = JSON.parse(sessionStorage.getItem('user'));
 
 	console.log(user);
 
 	if (user === null) {
 	
 		let login = document.createTextNode("Login");
 		
 		let link = document.createElement("a");
 		link.setAttribute('href', 'login.html');
 		link.setAttribute('class', 'button');
 		link.appendChild(login);
 	
 		let loginListItem = document.createElement("li");
 		loginListItem.setAttribute('class', 'button_user');
 		loginListItem.appendChild(link);
 		
 		document.querySelector("[name=top-menu]").appendChild(loginListItem);
 		addMenuButton();
 	
 	}else{
 	
 		let text = "Welcome, ".concat(user.user.first_name);
 		var welcome = document.createTextNode(text);
		var welcomeListItem = document.createElement("li");
		welcomeListItem.appendChild(welcome);
		document.querySelector("[name=top-menu]").appendChild(welcomeListItem);
	
		let logout = document.createTextNode("Logout");
		
		let link = document.createElement("a");
 		link.setAttribute('href', '#');
 		link.setAttribute('class', 'button');
 		link.appendChild(logout); 
		
		let logoutListItem = document.createElement("li");
		logoutListItem.setAttribute('class', 'button_user');
		logoutListItem.appendChild(link);
		logoutListItem.addEventListener('click',function(event){                          
        
        	sessionStorage.removeItem('user');
        	window.location.reload(true);
 		}); 
		
		document.querySelector("[name=top-menu]").appendChild(logoutListItem);
		
		addMenuButton();
 	}
 
function addMenuButton(){

	let image = document.createElement("img");
	image.setAttribute('src', 'images/menu_icon.png');
		
	let button = document.createElement("button");
	button.setAttribute('type', 'button');
	button.setAttribute('id', 'sidebarCollapse');
	button.appendChild(image);
	
	let menuListitem = document.createElement("li");
	menuListitem.appendChild(button);
	
	document.querySelector("[name=top-menu]").appendChild(menuListitem);
}