import mongoose from 'mongoose'

const transactionItemSchema = mongoose.Schema({
    title: String,
    amount: Number,
    itemType: String,
    category: String,
    note: String
}, {
    timestamps: true
});

const TransactionItem = mongoose.model('TransactionItem', transactionItemSchema)

export default TransactionItem;