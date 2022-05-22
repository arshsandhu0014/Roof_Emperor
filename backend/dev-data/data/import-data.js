const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Room = require("./../../models/roomModel");
const PG = require("./../../models/pgModel");
const ReviewRoom = require("../../models/reviewRoomModel");
const ReviewPG = require("./../../models/reviewPgModel");
const User = require("./../../models/userModel");
const VisitRequest = require("../../models/visitRequestModel");

dotenv.config({ path: `${__dirname}/../../config.env` });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected successfully!"));

// READ JSON FILE
const pgs = JSON.parse(fs.readFileSync(`${__dirname}/pgs.json`, "utf-8"));
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/rooms.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const reviewsPG = JSON.parse(fs.readFileSync(`${__dirname}/reviewsPG.json`, "utf-8"));
const reviewsRoom = JSON.parse(fs.readFileSync(`${__dirname}/reviewsRoom.json`, "utf-8"));
const visitRequests = JSON.parse(
  fs.readFileSync(`${__dirname}/visitRequests.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    // await PG.create(pgs);
    // await VisitRequest.create(visitRequests);
    // await Room.create(rooms);
    // await User.create(users, { validateBeforeSave: false });
    // await ReviewRoom.create(reviewsRoom);
    await ReviewPG.create(reviewsPG);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await PG.deleteMany();
    // await Room.deleteMany();
    // await User.deleteMany();
    // await ReviewRoom.deleteMany();
    await ReviewPG.deleteMany();
    // await VisitRequest.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
