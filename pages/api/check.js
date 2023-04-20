import { initMongoose } from "../../lib/mongoose";

export default async function handler(req,res){
    await initMongoose();

    if(req.method!=='POST'){
        res.body('should').send();
        return;
    }
    res.json(req.method);
}