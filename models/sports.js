import { Schema, model, models } from "mongoose";

const SportsSchema = new Schema({
	_id: {
		type: String,
		unique: [true, 'id is already exists'],
		require: [true, 'id is required'],
	},
	title: {
		type: String,
		require: [true, 'title is required'],
	},
	event_code: {
		type: String,
		require: [true, 'event_code is required'],
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
	created_at: {
		type: Date,
		default: Date.now,
	},
	created_by: {
		type: String,
		require: [true, 'Login is required'],
	},
	last_updated_at: {
		type: Date,
	},
	last_updated_by: {
		type: String,
	},
	register: {
		type: Boolean,
		default: false,
	},
	status: {
		type: Array,
		default: [],
	}
},
	{ versionKey: false });

const Sports = models.Sports || model('Sports', SportsSchema);

export default Sports;