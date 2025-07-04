import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamps: {
        type: Date,
        default: Date.now,
    }
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;