import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReportSchema = new Schema({
    financialReportId: {
        type: String,
        required: true
    },
    reportCatogery: {
        type: String,
        required: true
    },
    employeeID: {
        type: String,
        required: true
    },
    uploadedDate: {
        type: String,
        required: true
    },
    uploadedTime: {
        type: String,
        // required: true
    },
});

// ScheduleData is collection name
const ReportModel = mongoose.model('ReportData', ReportSchema);

export default ReportModel;
