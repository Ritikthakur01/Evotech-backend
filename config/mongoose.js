import mongoose from "mongoose";
import "dotenv/config"

async function main () {
   try {
    await mongoose.connect(process.env.MONGOCLUSTERURL)
    console.log(`Connected to MongoDB`)
   } catch (err) {
    console.log(`Couldn't connect: ${err}`)
   }
}

const db = main()
 
export default db;

