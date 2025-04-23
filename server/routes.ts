import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { COMPANY_EMAIL } from "../client/src/lib/constants";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for submitting inquiries
  app.post("/api/inquiries", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);
      
      // Log the inquiry to console for now
      console.log(`New inquiry received from ${data.name} (${data.email})`);
      console.log(`Contact info: ${data.phone}`);
      console.log(`Service requested: ${data.service || 'Not specified'}`);
      console.log(`Message: ${data.message || 'None'}`);
      console.log(`Address: ${data.address || 'Not provided'}`);
      console.log(`Referral source: ${data.referral || 'Not specified'}`);
      console.log(`This inquiry should be sent to: ${COMPANY_EMAIL}`);
      
      // Send email notification
      const transporter = nodemailer.createTransport({
        service: 'smtp',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: COMPANY_EMAIL,
        subject: `New Inquiry from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Service: ${data.service || 'Not specified'}
          Message: ${data.message || 'None'}
          Address: ${data.address || 'Not provided'}
          Referral: ${data.referral || 'Not specified'}
        `
      });
      
      return res.status(201).json({
        message: "Inquiry submitted successfully",
        data: inquiry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });

  // API endpoint for managing portfolio projects
  app.get("/api/portfolio", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      return res.json(projects);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching portfolio projects" });
    }
  });

  app.post("/api/portfolio", async (req, res) => {
    try {
      const project = await storage.createProject(req.body);
      return res.status(201).json(project);
    } catch (error) {
      return res.status(500).json({ message: "Error creating portfolio project" });
    }
  });

      }
      return res.status(500).json({
        message: "An error occurred while submitting your inquiry"
      });
    }
  });

  // API endpoint for getting all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      return res.json(inquiries);
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while fetching inquiries"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
