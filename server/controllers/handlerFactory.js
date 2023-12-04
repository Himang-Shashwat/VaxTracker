const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.checkOwnership = (Model) =>
  catchAsync(async (req, res, next) => {
    const fetchedItem = await Model.findById(req.params.id);
    if (!fetchedItem) {
      return next(
        new AppError(`${Model.modelName} with that id does not exist`, 404)
      );
    }
    if (fetchedItem.user.toString() !== req.user._id.toString()) {
      return next(
        new AppError('You are unauthorized to perform this action', 401)
      );
    }
    req.fetchedItem = fetchedItem;
    next();
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    req.body.user = req.user.id;
    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newDoc,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let filter = { user: req.user.id };
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const fetchedDocs = await features.query;

    res.status(200).json({
      status: 'success',
      results: fetchedDocs.length,
      data: fetchedDocs,
    });
  });

exports.getOne = () => (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: req.fetchedItem,
  });
};

exports.update = (Model) =>
  catchAsync(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: updatedDoc,
    });
  });

exports.delete = (Model) =>
  catchAsync(async (req, res, next) => {
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: deletedDoc,
    });
  });
