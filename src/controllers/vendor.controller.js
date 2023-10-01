const Vendor = require('../models/vendor.model');

const createVendor = async (req, res) => {
    try {
        const vendorDetails = req.body;
        if (!vendorDetails || Object.keys(vendorDetails).length === 0) {
            return res.status(400).json({ errorMessage: 'Request body is missing', success: false })
        }
        const newVendor = new Vendor(vendorDetails);
        const savedVendor = await newVendor.save();
        const vendors = await Vendor.find({}).limit(10).sort({ _id: -1 }).exec();
        const totalVendors = await Vendor.countDocuments();
        const totalPages = Math.ceil(totalVendors / 10);
        res.status(201).json({
            message: 'Vendor created successfully', vendors, vendors,
            currentPage: 1,
            totalPages, success: true
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ errorMessage: 'Error while creating vendor', error, success: false })

    }
}


const getVendors = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.perPage) || 10;
        const vendors = await Vendor.find({}).skip((page - 1) * limit).limit(limit).sort({ _id: -1 }).exec();
        const totalVendors = await Vendor.countDocuments();
        const totalPages = Math.ceil(totalVendors / limit);
        res.json({
            vendors,
            currentPage: page,
            totalPages,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ errorMessage: 'Error while retrieving ', error, success: false })
    }
}

const updateVendor = async (req, res) => {
    try {
        const id = req.params.vendorId;
        const updatedData = req.body;
        const vendor = await Vendor.findByIdAndUpdate(id, updatedData, { new: true });
        return res.json({ message: 'vendor data updated successfully', data: vendor, success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ errorMessage: 'Error while updating vendor details', error, success: false })
    }
}

const deleteVendor = async (req, res) => {
    try {
        const id = req.params.vendorId;
        const deletedVendor = await Vendor.findByIdAndDelete(id);
        if (!deletedVendor) {
            return res.status(404).json({ errorMessage: 'Vendor not found', success: false })
        }
        return res.json({ message: 'Vendor deleted successfully', data: deletedVendor, success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ errorMessage: 'Error while deleting vendor', error, success: false })
    }
}


module.exports = { createVendor, getVendors, deleteVendor, updateVendor }