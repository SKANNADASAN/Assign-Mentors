import mongoose from "mongoose"

export async function createDB(){

    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        mongoose.connect("mongodb+srv://prasathvj18:prasathvj18@cluster2.c6gcdi4.mongodb.net/Mentor-Student",params)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);  
    }
}
createDB();