const express = require("express");
const app = express();
const UserModel = require("../src/models/user.model");

// BETTER TELL THE SERVER YOU ARE GOING TO USE JSON EVERYTIME USER MAKES A REQUEST
app.use(express.json());

// SET TOOLS IN ORDER TO RENDER HTML CODE USING NODEJS
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// DISPLAYING INFORMATION BEFORE THE CODE IS ACTUALLY SHOWN
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers['content-type']}`);
  console.log(`Date: ${new Date()}`);

  next();
})

// ENDPOINT FOR THE HTML CODE IN VIEWS
app.get('/views/users', async (req, res) => {
  const users = await UserModel.find({})

  res.render('index', { users });
})

// GET THE USERS LIST
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    
    return res.status(500).send(error.message);
  }

  res.status
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// GET THE USER BY THEIR OBJECT ID
app.get('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;

      const user = await UserModel.findById(id);

      return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

// UPDATE USER
app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true } );

    res.status(200).json(user);

  } catch (error) {
    res.status(500).send(error.message);
  };
})

// DELETING USERS
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message)
  };
})

// DEFINING A PORT FOR THE SERVER
const port = 8080;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});