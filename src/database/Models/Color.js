import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    }
})

const Color = mongoose.model("color", colorSchema);

export default Color;