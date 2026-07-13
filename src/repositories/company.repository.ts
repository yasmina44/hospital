import CompanyModel, { Company } from "../models/company.model";
export class CompanyRepository {

  // GET ALL COMPANIES
  static async getAllCompanies(): Promise<Company[]> {
    return await CompanyModel.find();
  }

  // GET SINGLE COMPANY BY ID
  static async getCompanyById(id: string): Promise<Company | null> {
    return await CompanyModel.findById(id);
  }

  // CREATE NEW COMPANY
  static async createCompany(
    companyData: Company
  ): Promise<Company> {
    return await CompanyModel.create(companyData);
  }

  // UPDATE COMPANY
  static async updateCompany(
    id: string,
    companyData: Partial<Company>
  ): Promise<Company | null> {
    return await CompanyModel.findByIdAndUpdate(
      id,
      companyData,
      {
        new: true,
        runValidators: true,
      }
    );
  }

  // DELETE COMPANY
  static async deleteCompany(
    id: string
  ): Promise<Company | null> {
    return await CompanyModel.findByIdAndDelete(id);
  }
}