const Due = require('./../models/dueModel');
const handlerFactory = require('./handlerFactory');

exports.createDue = handlerFactory.createOne(Due);
exports.getAllDues = handlerFactory.getAll(Due);
exports.getDue = handlerFactory.getOne(Due);
exports.updateDue = handlerFactory.update(Due);
exports.deleteDue = handlerFactory.delete(Due);
