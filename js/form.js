
function sendOrder() {

	let user = JSON.parse(sessionStorage.getItem('user'));

	if (user !== null) {

		let item = document.querySelector("[name=item]").value;
		let description = document.querySelector("[name=description]").value;
		let price = document.querySelector("[name=price]").value;
		
		if (item !== null && item !== "" && description !== null && description !== "" && price !== null && price !== "") {
		
			let parameters = {
				item: item,
				description: description,
				price: price
			};
		
			let apiKey = user.user.api_key;
			let token = user.user.token;
			const url = "https://ict4510.herokuapp.com/api/menus?api_key=".concat(apiKey);

			fetch(url, {
  				method: "POST", 
  				headers: {
  					"Content-Type": "application/json",
  					"x-access-token": token
  				},
  				body: JSON.stringify(parameters)
			}).then(response => response.json())
		  	.then(result => {
				
				console.log(result.message);
				alert(result.message);
				window.location.reload(true);
			})
			
		}else{
			alert("Please fill all the fields");
		}
	}else{
		alert("Please login");
	}
}