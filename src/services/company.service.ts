import { CompanyRepository } from "../repositories/company.repository";
import { Company } from "../models/company.model";

export class CompanyService {
  async createCompany(data: Company): Promise<Company> {
    return await CompanyRepository.createCompany(data);
  }

  async getAllCompanies(): Promise<Company[]> {
    return await CompanyRepository.getAllCompanies();
  }

  async getCompanyById(id: string): Promise<Company | null> {
    return await CompanyRepository.getCompanyById(id);
  }

  async updateCompany(
    id: string,
    data: Partial<Company>
  ): Promise<Company | null> {
    return await CompanyRepository.updateCompany(id, data);
  }

  async deleteCompany(id: string): Promise<Company | null> {
    return await CompanyRepository.deleteCompany(id);
  }
}