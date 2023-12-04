const Budget = require('./../models/budgetModel');
const handlerFactory = require('./handlerFactory');

exports.createBudget = handlerFactory.createOne(Budget);
exports.getAllBudgets = handlerFactory.getAll(Budget);
exports.getBudget = handlerFactory.getOne(Budget);
exports.updateBudget = handlerFactory.update(Budget);
exports.deleteBudget = handlerFactory.delete(Budget);
