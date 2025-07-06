import { CheckCircle, Languages, GraduationCap } from "lucide-react";

export default function About() {
  const educationHistory = [
    {
      title: "IT Degree",
      institution: "Crown Institute of Higher Education",
      location: "Gungahlin, ACT",
      date: "Expected: July 2026",
      status: "current"
    },
    {
      title: "Diploma Graduate",
      institution: "University of Canberra",
      location: "Bruce, Canberra",
      date: "Completed: July 2024",
      status: "completed"
    },
    {
      title: "+2 Level",
      institution: "National College of Computer Studies",
      location: "Paknajwol, Kathmandu",
      date: "Completed: January 2021",
      status: "completed"
    }
  ];

  const languages = ["Nepali", "English", "Newari", "Hindi"];
  const coreStrengths = ["Team Leadership", "Quality Assurance", "Process Improvement", "Customer Service"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-gray-600 text-lg">
            A dedicated professional with a passion for leadership and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">Professional Background</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a certified shift manager with extensive experience in team leadership, operational improvements, and customer service excellence. My journey combines hands-on management experience with ongoing IT education, positioning me uniquely at the intersection of operations and technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing my IT degree while maintaining excellence in my management role, I bring a unique perspective that combines practical leadership skills with technical knowledge.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-secondary">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-primary h-5 w-5" />
                    <span className="text-gray-600">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education Timeline */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education Journey
              </h4>
              <div className="space-y-4">
                {educationHistory.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      edu.status === 'current' ? 'bg-primary' : 
                      edu.status === 'completed' ? 'bg-accent' : 'bg-gray-400'
                    }`}></div>
                    <div>
                      <h5 className="font-semibold text-secondary">{edu.title}</h5>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      <p className="text-gray-500 text-xs">{edu.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <Languages className="mr-2 h-5 w-5" />
                Languages
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language, index) => (
                  <div key={index} className="text-center bg-white rounded-lg p-3">
                    <Languages className="text-primary mx-auto mb-2" size={20} />
                    <div className="font-semibold text-secondary">{language}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
