import mongoose, { Schema, Document } from "mongoose";

export interface ICompany extends Document {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  password: string;
}

const companySchema = new Schema<ICompany>({
  companyName: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  companyPhone: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const CompanyModel = mongoose.model<ICompany>(
  "Company",
  companySchema
);

export default CompanyModel;
export type Company = ICompany;