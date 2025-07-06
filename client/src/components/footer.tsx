import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Arbin Maharjan</h3>
          <p className="text-gray-300 mb-6">Certified Shift Manager & IT Student</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:arbinmaharjan995@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+61413378133" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arbin-m-1572621a6/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/LC-PoH" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Arbin Maharjan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
