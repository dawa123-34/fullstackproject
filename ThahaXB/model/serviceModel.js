const mongoose = require("mongoose");
const schema = mongoose.Schema;

//service Model

const serviceSchema = new schema(
  {
    serviceName: {
      type: String,
      required: [true, "service Name is required"],
    },
    requiredDocuments: {
      type: String,
      required: [true, "service Name is required"],
    }
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
