import mongoose from "mongoose";

const connection={};

async function connect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;

}

export default connect;


export async function initMongoose(){
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }
 return await mongoose.connect(process.env.MONGODB_URL);
 
}