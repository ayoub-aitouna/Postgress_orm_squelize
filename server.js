const { sequelize } = require("./Database/init_orm");
const express = require('express');
const app = express();
var cors = require("cors");

// Import your models here
const db = require('./models');
const { User } = require("./models")

app.use(express.json());
app.use(cors());


app.post('/create-user', async (req, res) => {
	const { name, email } = req.body;
	const jane = await User.create({ name: name, email: email });
	console.log("Jane's auto-generated ID:", jane.id);
	res.sendStatus(200);
});

const port = process.env.PORT || 5000
db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port} & Sync `)
	})
})


