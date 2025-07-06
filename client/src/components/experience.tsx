import { CheckCircle, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Certified Shift Supervisor",
      company: "Hungry Jack's",
      location: "Kambah, ACT",
      period: "Dec 2022 - Present",
      status: "current",
      responsibilities: [
        "Evaluated performance and maintained agile, sustainable operations",
        "Improved operational procedures to increase productivity while controlling costs",
        "Assigned tasks and responsibilities to team members efficiently",
        "Reduced process bottlenecks through training and coaching"
      ]
    },
    {
      title: "All Rounder",
      company: "Yarralumla Gallery and Oaks Brasserie",
      location: "Yarralumla, Canberra",
      period: "Dec 2022 - Present",
      status: "current",
      responsibilities: [
        "Greeted guests ensuring professional first impressions",
        "Managed table bookings and maximized table turnover",
        "Delivered exceptional customer service and resolved queries professionally",
        "Collaborated effectively during busy periods"
      ]
    },
    {
      title: "Crew Member",
      company: "Waves Car Wash",
      location: "Phillip, ACT",
      period: "Sep 2022 - Aug 2023",
      status: "completed",
      responsibilities: [
        "Demonstrated strong multitasking abilities with multiple orders",
        "Improved customer satisfaction through prompt service",
        "Engaged in sales activities and upselling services",
        "Collaborated in fast-paced environment"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-primary';
      case 'completed':
        return 'bg-gray-400';
      default:
        return 'bg-accent';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'current':
        return <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Current</span>;
      case 'completed':
        return <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm">Completed</span>;
      default:
        return <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">Active</span>;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Work Experience</h2>
          <p className="text-gray-600 text-lg">
            A progressive career journey showcasing growth and diverse expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${getStatusColor(exp.status)}`}></div>
                  <div className="ml-16 bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-gray-600 text-sm flex items-center mt-1">
                          <MapPin className="mr-1 h-3 w-3" />
                          {exp.location}
                        </p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(exp.status)}
                        <p className="text-gray-600 text-sm mt-1 flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
