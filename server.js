
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.get('/contactlist', function (req, res) {
	console.log("tut get request");

	person1 = {
		name: 'Tim',
		email: 'tim@email.com',
		number: '(111) 111 - 1111'

	};

	person2 = {
		name: 'Emily',
		email: 'emily@email.com',
		number: '(111) 111 - 1111'

	};

		person3 = {
		name: 'John',
		email: 'john@email.com',
		number: '(111) 111 - 1111'

	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);


} );

app.listen(3000);