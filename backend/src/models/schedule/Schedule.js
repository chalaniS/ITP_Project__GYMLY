import mongoose from 'mongoose';

const { Schema } = mongoose;

const ScheduleSchema = new Schema({
    timeslot: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});


//ScheduleData is collection name
const Schedule = mongoose.model('ScheduleData', ScheduleSchema);

export default Schedule;