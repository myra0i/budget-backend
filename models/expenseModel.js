const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    amount: {
        type:Number,
        required:true,
    },
    type: {
        type:String,
        default:'expense',
    },
    date: {
        type:Date,
        required:true,
    },
    category: {
        type:String,
        required:true,

    },
    description: {
        type: String,

    }, 


}, {timestamps:true})

module.exports = mongoose.model('Expense', ExpenseSchema )