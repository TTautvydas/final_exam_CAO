import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
  clientName: {
    type: String,
    minLength: 3,
    maxLength: 80,
    require: true,
  },
  clientEmail: {
    type: String,
    minLength: 10,
    require: true,
  },
  registrationDate: {
    type: Date,
  },
});

export default mongoose.model("Client", clientSchema);
