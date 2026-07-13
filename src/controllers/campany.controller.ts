import { Request, Response } from "express";
import { CompanyService } from "../services/company.service";

const service = new CompanyService();

export const createCompany = async (req: Request, res: Response) => {
  try {
    const company = await service.createCompany(req.body);
    res.status(201).json({ success: true, data: company });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await service.getAllCompanies();
    res.status(200).json({ success: true, data: companies });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await service.getCompanyById(req.params.id as string);
    res.status(200).json({ success: true, data: company });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await service.updateCompany(
      req.params.id as string,
      req.body
    );

    res.status(200).json({ success: true, data: company });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await service.deleteCompany(req.params.id as string);

    res.status(200).json({ success: true, data: company });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const companyController = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
};