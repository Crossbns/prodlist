const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema)

const HabitSchema = new mongoose.Schema({
    habit: String,
    done: {
        type: Boolean,
        default: false
    }
})

const HabitModel = mongoose.model("habits", HabitSchema)

module.exports = { TodoModel, HabitModel }
