express = require('express');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.static('public'));

app.listen(port, () => {
	console.log('connected to port 3000!');
});

app.get('/:id', (req, res) => {
	if (!req.params.id) {
		res.status(400);
		res.end();
	} else {
		res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
	}
});
