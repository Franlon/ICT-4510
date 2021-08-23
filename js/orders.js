/*
   Abdiel L. Franco
   ICT-4510
   Summer 2021
   Fetches and displays the different orders (menu items) that the logged user created
*/

if (user !== null) {

	let apiKey = user.user.api_key;
	let token = user.user.token;
	const url = "https://ict4510.herokuapp.com/api/menus?api_key=".concat(apiKey);

	fetch(url, {
		method: "GET", 
		headers: {
			"Content-Type": "application/json",
			"x-access-token": token
		}
	}).then(response => response.json())
	  .then(result => {
		addOrders(result.menu);	
	})
	
}else{
	alert("Please login");
}

function addOrders(items){

	var orders = document.querySelector("[name=orders]");

	for (let i = 0; i < items.length; i++) {
  	
  		let div = addOrder(items[i]);
  
  		if (i%3 === 0) {
  			let row = document.createElement("div");
			row.setAttribute('class', 'row');
			row.setAttribute('id', (i / 3));
			row.appendChild(div);
  		
  			orders.appendChild(row);
  		}else{
  			let id = Math.trunc(i/3);
  			let row = document.getElementById(id);
  			row.appendChild(div);
  			orders.appendChild(row);
  			
  			if (row.childElementCount === 3) {
  			
  				let br = document.createElement("br");
				orders.appendChild(br);
  			}
  		}
	} 	
}

function addOrder(order) {

	let h3 = document.createTextNode(order.item);
	let header = document.createElement("h3");
	header.appendChild(h3);
	
	let description = document.createTextNode(order.description);
	let paragraph = document.createElement("p");
	paragraph.appendChild(description);
	
	let box = document.createElement("div");
	box.setAttribute('class', 'blog_box');
	box.appendChild(header);
	box.appendChild(paragraph);

	let bottom = document.createElement("div");
	bottom.setAttribute('class', 'col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom');
	bottom.appendChild(box);
	
	return bottom;
}