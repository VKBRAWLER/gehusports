import { Schema, model, models } from "mongoose";

const EventsSchema = new Schema({
    _id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
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
        default: '',
    },
    bg_image: {
        type: String,
        default: '',    
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
        default: 'admin',
        require: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

},
    { versionKey: false });

const Events = models.Events || model('Events', EventsSchema);

export default Events;