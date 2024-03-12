import { Schema, model, models, Document } from "mongoose";

interface IAddress extends Document {
  fullName: string;
  mobileNumber: string;
  pinCode: string;
  houseNumber: string;
  area: string;
  landMark?: string;
  town: string;
  state: string;
}

const AddressSchema = new Schema({
  fullName: { type: String, required: true, minlength: 2, maxlength: 50 },
  mobileNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v: any) {
        return /^\d{10}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid mobile number!`,
    },
  },
  pinCode: {
    type: String,
    required: true,
    validate: {
      validator: function (v: any) {
        return /^\d{6}$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid pin code!`,
    },
  },
  houseNumber: { type: String, required: true, minlength: 3 },
  area: { type: String, required: true, minlength: 3 },
  landMark: { type: String },
  town: { type: String, required: true, minlength: 3 },
  state: {
    type: String,
    required: true,
    enum: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Lakshadweep",
      "Puducherry",
      "Ladakh",
    ],
  },
});

const Address = models.Address || model("Address", AddressSchema);

export default Address;
