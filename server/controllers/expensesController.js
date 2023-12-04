const Expense = require('./../models/expenseModel');
const handlerFactory = require('./handlerFactory');

exports.createExpense = handlerFactory.createOne(Expense);
exports.getAllExpenses = handlerFactory.getAll(Expense);
exports.getExpense = handlerFactory.getOne(Expense);
exports.updateExpense = handlerFactory.update(Expense);
exports.deleteExpense = handlerFactory.delete(Expense);
