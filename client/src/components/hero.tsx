import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import profilePhoto from "@assets/397871372_1022138495599817_94860_1751767626715.jpg";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Arbin_Maharjan_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary">
                Hi, I'm <span className="text-primary">Arbin</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Certified Shift Manager & IT Student
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trustworthy professional with expertise in quality assurance, operational improvements, and team management. Currently pursuing IT education while delivering exceptional customer service and leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={downloadResume}
                className="border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white text-center">
              <div className="w-40 h-40 mx-auto mb-4 relative">
                <img 
                  src={profilePhoto} 
                  alt="Arbin Maharjan" 
                  className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Profile</h3>
              <p className="text-white/90">Queanbeyan, ACT</p>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="font-bold text-lg">2+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">7+</div>
                  <div className="text-sm text-white/80">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
