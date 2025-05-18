import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const { ref, isVisible } = useIntersectionObserver();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill out all required fields.",
      });
      return;
    }

    // In a real application, you would send this data to a server
    // For now, we'll just simulate a successful submission

    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Your message has been sent successfully! I will get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-on-scroll">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-3xl animate-on-scroll">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Feel free to reach out using the contact
            information or form below.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="mb-8 animate-on-scroll">
                <h2 className="text-2xl font-semibold text-light mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out using any of the methods below. I'm
                  available for freelance work, full-time positions, and
                  interesting collaborations.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-light font-medium mb-1">Email</h3>
                      <p className="text-gray-400">
                        harshadkumawat339977@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-light font-medium mb-1">Phone</h3>
                      <p className="text-gray-400">+91 62641 97551</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-light font-medium mb-1">Location</h3>
                      <p className="text-gray-400">Indore, MP</p>
                      <p className="text-gray-400">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <h2 className="text-2xl font-semibold text-light mb-6">
                  Connect With Me
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Harshadkumawat"
                    className="w-12 h-12 bg-dark-light rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harshad-kumawat/"
                    className="w-12 h-12 bg-dark-light rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              ref={ref}
              className={`bg-dark-light p-8 rounded-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl font-semibold text-light mb-6">
                Send Me a Message
              </h2>

              {formStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.success
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                    placeholder="I'm interested in working with you on..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-dark py-16">
        <div className="container">
          <div className="bg-dark-light p-4 rounded-lg overflow-hidden h-80 animate-on-scroll">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.306189781262!2d75.85772511493294!3d22.71956878513256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e1c0a5e8f1a1%3A0x4a52c4e1714c234b!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1663289712162!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
