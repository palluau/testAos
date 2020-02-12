const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
var cors = require('cors');
const InitiateMongoServer = require('./db');
const User = require('./User');

InitiateMongoServer();

const init = async () => {
  var user = await User.findOne({
    email: 'julespalluau@gmail.com',
  });
  if (user === null) {
    user = new User({
      email: 'julespalluau@gmail.com',
      password: 'test123'
    });
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash('test123', salt);
    
    await user.save();
  }
};

init();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.post('/authenticate', async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).json({ success: true, message: 'Username Succesfully connected' });
  } else {
    res.status(400).json({ success: false, message: 'Wrong email or password' });
  }
});


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});