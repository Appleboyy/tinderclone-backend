import mongoose from 'mongoose'

const testWork = mongoose.Schema({
    name: String,
    test: String,
    working: String,
})

export default mongoose.model('tests', testWork)