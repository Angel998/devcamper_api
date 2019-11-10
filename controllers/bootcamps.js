const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const AsyncHandler = require("../middleware/async");

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = AsyncHandler(async (req, res, next) => {
  const bootcamps = await BootCamp.find();
  res.status(200).json({
    success: true,
    data: bootcamps,
    count: bootcamps.length
  });
});

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const bootcamp = await BootCamp.findById(id);
  if (!bootcamp) return next(new ErrorResponse(`Bootcamp not found ${id}`));
  res.status(200).json({
    success: true,
    data: bootcamp
  });
});

// @desc    Add bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Public
exports.createBootcamp = AsyncHandler(async (req, res, next) => {
  const newBootcamp = await BootCamp.create(req.body);
  res.status(201).json({
    success: true,
    data: newBootcamp
  });
});

// @desc    Update bootcamp by id
// @route   PUT /api/v1/bootcamps/:id
// @access  Public
exports.updateBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp)
    return next(new ErrorResponse(`Bootcamp not found ${req.params.id}`));

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Delete bootcamp by id
// @route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = AsyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found ${req.params.id}`));
  }
  res.status(200).json({ success: true, data: {} });
});
