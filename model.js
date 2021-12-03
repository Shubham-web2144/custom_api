import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    title: String,
    language : String,
    program : String,
    output : String
});

const model = mongoose.model('program_data', modelSchema);

export default model;