
		fetch("clientfolder/client.html")
			.then(response => response.text())
			.then(data => {
			document.getElementById("clientslogo").innerHTML = data;
			})
			.catch(error => console.error("Error loading clientslogo:", error));
