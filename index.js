const dotenv = require("dotenv");
const connectToDatabase = require("./scr/database/connect")

dotenv.config();
connectToDatabase();

// require("./modules/fs")
// require("./modules/http");
// require("./modules/path");