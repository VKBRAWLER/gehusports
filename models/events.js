import { Schema, model, models } from "mongoose";

const EventsSchema = new Schema({
    event_code: {
        type: String,
    },
    title: {
        type: String,
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    poster_image: {
        type: String,
    },
    bg_image: {
        type: String,
    },
})

const Events = models.Events || model('Events', EventsSchema);

export default Events;