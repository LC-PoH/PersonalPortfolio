import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save message to database
      const savedMessage = await storage.createContactMessage(validatedData);
      
      console.log("Contact form submission saved:", {
        id: savedMessage.id,
        firstName: savedMessage.firstName,
        lastName: savedMessage.lastName,
        email: savedMessage.email,
        subject: savedMessage.subject,
        timestamp: savedMessage.createdAt
      });
      
      res.json({ 
        message: "Message sent successfully",
        success: true,
        messageId: savedMessage.id
      });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      
      // Handle validation errors
      if (error?.issues) {
        return res.status(400).json({ 
          message: "Validation error",
          errors: error.issues 
        });
      }
      
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "Arbin Maharjan Resume_1751764867105.pdf");
      
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({
          message: "Resume file not found"
        });
      }
      
      res.download(resumePath, "Arbin_Maharjan_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({
            message: "Error downloading resume"
          });
        }
      });
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ 
        messages,
        total: messages.length 
      });
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Serve certificate files
  app.get("/attached_assets/:filename", (req, res) => {
    try {
      const { filename } = req.params;
      const filePath = path.join(process.cwd(), "attached_assets", filename);
      
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({
          message: "Certificate file not found"
        });
      }
      
      // Set appropriate headers based on file type
      if (filename.endsWith('.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
      } else if (filename.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      }
      
      res.sendFile(filePath);
    } catch (error) {
      console.error("Error serving certificate file:", error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
