import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description:  String ,
    deadline: Date,
    done: Boolean,
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    created_at: Date,
    updated_at: Date
});

export default mongoose.model('Task', TaskSchema);

const dateValidator = (date) => {
    return date > new Date();
}
TaskSchema.path("deadline").validate(dateValidator);