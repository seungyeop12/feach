fetch('DB/department.json')
	.then((data) => {
		console.log(data);
		const result = data.json();
		result.then((json) => {
			console.log(json);
		});
	})
	.catch((err) => {
		console.log(err);
	});
