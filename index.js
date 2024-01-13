var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
	const file = req.file;
	const fileName = req.body.upfile;
	const dataFile = {
		name: file.originalname,
		type: file.mimetype,
		size: file.size,
	};
	res.json(dataFile);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Your app is listening on port ' + port);
});
