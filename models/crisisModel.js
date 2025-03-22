import mongoose from "mongoose";

const crisisSchema = new mongoose.Schema(
  {
    name : {
      type: String,
      required: true
    },
    location: {
      type : {
        type : String,
      },coordinates:{
        type: Array, // Array of arrays of numbers (coordinates)

      }
    },
    crisisType :{
      type: String, //Flood or fire etc
    },
    crisisLevel : {
      type: String,
      enum : ['LOW', 'MEDIUM', 'HIGH']
    },
    photo:{
      type: String
    },
    isApproved : {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

crisisSchema.index({
  location: '2dsphere'
})


export default mongoose.model("crisis", crisisSchema);