import { Schema, model, models } from "mongoose";

const EventsSchema = new Schema({
    _id: {
        type: String,
        unique: [true, 'event_code is already exists'],
        require: [true, 'event_code is required'],
    },
    title: {
        type: String,
        unique: [true, 'title is already exists'],
        require: [true, 'title is required'],
    },
    start_date: {
        type: Date,
        default: null,
    },
    end_date: {
        type: Date,
        default: null,
    },
    poster_image: {
        type: String,
        default: null,
    },
    bg_image: {
        type: String,
        default: null,    
    },
    visible: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    created_by: {
        type: String,
        require: [true, 'Login is required'],
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
},
    { versionKey: false });

const Events = models.Events || model('Events', EventsSchema);

export default Events;