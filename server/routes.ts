import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and return success
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      res.json({ 
        message: "Message sent successfully",
        success: true 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
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
