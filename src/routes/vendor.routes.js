const express = require('express')
const router = express.Router();

const { createVendor, getVendors, deleteVendor, updateVendor } = require('../controllers/vendor.controller');

router.route('/').post(createVendor).get(getVendors);
router.route('/:vendorId').delete(deleteVendor).put(updateVendor)

module.exports = router