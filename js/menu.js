/*
   Abdiel L. Franco
   ICT-4510
   Summer 2021
   Shared script by all the webpages. It updates the different menu items based on the user logged in status.
*/

let user = JSON.parse(sessionStorage.getItem('user'));

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
	addSidebarItems();
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

function addSidebarItems(){

	let form = document.createTextNode("Order Now");

	let formLink = document.createElement("a");
 	formLink.setAttribute('href', 'form.html');
 	formLink.appendChild(form);
 	
 	let formListitem = document.createElement("li");
	formListitem.appendChild(formLink);
 	
 	document.querySelector("[name=side-menu]").appendChild(formListitem);
 	
 	let orders = document.createTextNode("Your BUNS");
 	
 	let ordersLink = document.createElement("a");
 	ordersLink.setAttribute('href', 'orders.html');
 	ordersLink.appendChild(orders);
 	
 	let ordersListitem = document.createElement("li");
	ordersListitem.appendChild(ordersLink);
 	
 	document.querySelector("[name=side-menu]").appendChild(ordersListitem);	
}

 $(document).ready(function() {
            
	$("#sidebar").mCustomScrollbar({
		theme: "minimal"
	});

	$('#dismiss, .overlay').on('click', function() {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('#sidebarCollapse').on('click', function() {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});