const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    vendorName: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: Number,
        required: true,
    },
    bankName: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;