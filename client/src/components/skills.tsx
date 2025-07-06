import { Users, Laptop, Handshake, Award } from "lucide-react";

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
    { name: "First Aid", icon: "🚑" },
    { name: "Fire Training", icon: "🔥" },
    { name: "Food Safety Supervisor", icon: "🍽️" },
    { name: "ServSafe International", icon: "🏆" },
    { name: "BMT / Shift Running Excellence", icon: "⭐" },
    { name: "Foundation Of Shift Management", icon: "🎯" },
    { name: "Training & Mentoring", icon: "👥" }
  ];

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
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold text-secondary text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
