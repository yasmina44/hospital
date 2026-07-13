import { Router } from "express";
import { companyController } from "../controllers/campany.controller";

const router = Router();

// Get all companies
router.get("/", companyController.getAllCompanies);

// Get company by ID
router.get("/:id", companyController.getCompanyById);

// Create company
router.post("/", companyController.createCompany);

// Update company
router.put("/:id", companyController.updateCompanyById);

// Delete company
router.delete("/:id", companyController.deleteCompanyById);

export default router;