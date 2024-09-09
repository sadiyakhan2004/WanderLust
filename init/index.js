const mongoose = require("mongoose");
const initData = require("../init/data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then((res)=>{
    console.log("conneted to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
   await mongoose.connect(MONGO_URL);
};

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner :'66d08ba44577d6f49dfaf85d'}));
    initData.data = initData.data.map((obj)=>({...obj , category :'Rooms'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
