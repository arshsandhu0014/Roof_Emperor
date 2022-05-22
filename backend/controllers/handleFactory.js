const APIFeatures = require("../utils/APIFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.deleteOne = (Model, ModelName) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError(`No ${ModelName} found with id :${req.params.id}`, 404));
    }
    res.status(204).json({
      status: "success",
      data: null
    });
  });

exports.updateOne = (Model, ModelName) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) {
      return next(new AppError(`No ${ModelName} found with id : ${req.params.id}`, 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        doc: newDoc
      }
    });
  });

exports.getOne = (Model, populateOptions, ModelName) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (populateOptions) query = query.populate(populateOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError(`No ${ModelName} found with id :${req.params.id}`, 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    //!EXECUTE QUERY********************

    let filter = {};
    if (req.params.roomId) filter = { room: req.params.roomId };
    if (req.params.pgId) filter = { pg: req.params.pgId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // const docs = await features.query.explain();
    const docs = await features.query;

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      results: docs.length,
      data: {
        docs
      }
    });
  });
