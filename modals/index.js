import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const InsertUser = new Schema({
    name: { type: String, require: true, trim: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
})

const UserModal = mongoose.model("user", InsertUser)

export default UserModal
