import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Delay showing contact info for better UX
    const timeout = setTimeout(() => {
      setShowContact(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary z-0"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="animate-on-scroll">
            <h5 className="text-gray-300 mb-2">Hi There!</h5>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-light">
              I am <span className="text-primary">Developer</span>
              <span className="text-primary animate-pulse">|</span>
            </h1>
            <div className="text-xl text-gray-300 mb-8 h-8">
              <TypeAnimation
                sequence={[
                  "I make the complex simple.",
                  1500,
                  "I build web applications.",
                  1500,
                  "I create user experiences.",
                  1500,
                ]}
                repeat={Infinity}
              />
            </div>
            <div className="flex gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Contact Me <ArrowRight size={18} className="inline ml-1" />
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects
              </Link>
            </div>

            {/* Contact info */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-1000 ${
                showContact ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Email */}
              <div className="flex items-center gap-2 text-gray-300 break-words">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="break-all">
                  harshadkumawat339977@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 6264197551</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>Indore, MP</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-slow blur-xl"></div>
              <img
                src="/assets/Harshadkumawat.png"
                alt="Developer Profile"
                className="absolute inset-0 object-cover object-center rounded-full w-full h-full z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
