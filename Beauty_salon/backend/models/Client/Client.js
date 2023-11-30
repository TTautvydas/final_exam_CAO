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
    minLength: 8,
    maxLength: 50,
    require: true,
  },
  registrationDate: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Client", clientSchema);
