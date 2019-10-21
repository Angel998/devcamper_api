// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.json({
    success: true,
    msg: "Show all bootcamps"
  });
};

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.json({
    success: true,
    msg: "Show bootcamp"
  });
};

// @desc    Add bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Public
exports.createBootcamp = (req, res, next) => {
  res.json({
    success: true,
    id: 1,
    msg: "Bootcamp created"
  });
};

// @desc    Update bootcamp by id
// @route   PUT /api/v1/bootcamps/:id
// @access  Public
exports.updateBootcamp = (req, res, next) => {
  res.json({
    success: true,
    msg: "Updated bootcamp"
  });
};

// @desc    Delete bootcamp by id
// @route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
  res.json({
    success: true,
    msg: "Bootcamp deleted"
  });
};
