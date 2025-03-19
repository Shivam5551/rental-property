import mongoose from "mongoose";

const mongooseURI = "mongodb://localhost:27017/rental-app"

const connectDB = async () => {
    const connect = await mongoose.connect(mongooseURI);

    if(connect) {
        console.log('Connected');
    }
    else {
        console.log(connect);
    }
}


const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    phone: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const propertySchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    location: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    },
    startDate: Date,
    endDate: Date
});


export const Booking = mongoose.model('Booking', bookingSchema);

export const Property = mongoose.model('Property', propertySchema);

export const User = mongoose.model('User', userSchema);

connectDB();