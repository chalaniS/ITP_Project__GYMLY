import mongoose from 'mongoose';

const { Schema } = mongoose;

const report = new ReportSchema({
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
        required: true
    },
    
});


//ScheduleData is collection name
const Report = mongoose.model('ReportData', ReportSchema);

export default Report;