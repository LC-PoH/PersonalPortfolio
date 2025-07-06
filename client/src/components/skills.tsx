import { Users, Laptop, Handshake, Award, Eye } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Skills() {
  const skillCategories = [
    {
      title: "Management",
      icon: Users,
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Quality Assurance", level: 90 },
        { name: "Process Improvement", level: 85 },
        { name: "Money Management", level: 88 }
      ]
    },
    {
      title: "Technical",
      icon: Laptop,
      skills: [
        { name: "MS Office Suite", level: 80 },
        { name: "IT Fundamentals", level: 75 },
        { name: "Problem Solving", level: 85 },
        { name: "Quick Learning", level: 90 }
      ]
    },
    {
      title: "Customer Service",
      icon: Handshake,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Problem Resolution", level: 90 },
        { name: "Multitasking", level: 85 },
        { name: "Team Collaboration", level: 92 }
      ]
    }
  ];

  const certifications = [
    { 
      name: "First Aid", 
      icon: "🚑", 
      hasDocument: true, 
      documentPath: "/attached_assets/Arbin Maharjan - FA_1751765945515.pdf",
      description: "Provide cardiopulmonary resuscitation and First Aid"
    },
    { 
      name: "Fire Training", 
      icon: "🔥", 
      hasDocument: true, 
      documentPath: "/attached_assets/Maharjan_Arbin_CSE_9332432_1751765945517.pdf",
      description: "Confine small emergencies in a facility"
    },
    { 
      name: "Food Safety Supervisor", 
      icon: "🍽️", 
      hasDocument: true, 
      documentPath: "/attached_assets/Arbin Maharjan FSS Certificate_1751765945516.pdf",
      description: "Food Safety Supervisor Certificate"
    },
    { 
      name: "ServSafe International", 
      icon: "🏆", 
      hasDocument: true, 
      documentPath: "/attached_assets/ServSafe_1751765945517.pdf",
      description: "Food Safety Online Course Examination"
    },
    { 
      name: "Shift Running Excellence", 
      icon: "⭐", 
      hasDocument: true, 
      documentPath: "/attached_assets/SRX Workshop Certificate - Arbin Maharjan_1751765945517.pdf",
      description: "BMT / Shift Running Excellence (SRX)"
    },
    { 
      name: "Foundation Of Shift Management", 
      icon: "🎯", 
      hasDocument: true, 
      documentPath: "/attached_assets/Arbin Maharjan Foundations_Certificate_1751765945516.pdf",
      description: "Foundations of Shift Management Training"
    },
    { 
      name: "Training & Mentoring", 
      icon: "👥", 
      hasDocument: true, 
      documentPath: "/attached_assets/Arbin Maharjan T.E.A.M. Certificate_1751765945516.png",
      description: "Training, Empowering, And Mentoring (T.E.A.M)"
    }
  ];

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 text-lg">
            A comprehensive skill set spanning management, technology, and customer service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <category.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold text-secondary">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold text-secondary text-sm mb-2">{cert.name}</h4>
                {cert.hasDocument && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute top-2 right-2 bg-primary text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye size={14} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-secondary">
                          {cert.name} Certificate
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <div className="flex justify-center">
                          {cert.documentPath.endsWith('.png') ? (
                            <img 
                              src={cert.documentPath} 
                              alt={`${cert.name} Certificate`}
                              className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                          ) : (
                            <iframe
                              src={cert.documentPath}
                              className="w-full h-96 border rounded-lg"
                              title={`${cert.name} Certificate`}
                            />
                          )}
                        </div>
                        <div className="mt-4 text-center">
                          <a 
                            href={cert.documentPath} 
                            download={`${cert.name.replace(/\s+/g, '_')}_Certificate`}
                            className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Award className="mr-2 h-4 w-4" />
                            Download Certificate
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
