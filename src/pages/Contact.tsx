import { useState, FormEvent, useEffect } from "react";
import { submitContactForm } from "@/lib/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false); 

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Form validation logic
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Input change handler
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Form submission logic
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await submitContactForm(formData);
      toast.success("Message sent successfully! We'll get back to you soon.", {
        className: "bg-amber-100 text-amber-900 border border-amber-300 font-serif", 
        duration: 4000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
    } catch (error) {
      toast.error("Message sent successfully! We'll get back to you soon.", {
        className: "bg-amber-100 text-amber-900 border border-amber-300 font-serif", 
        duration: 4000,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const VintageSeparator = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
      <div className="text-amber-200 text-3xl font-serif">⚜</div>
      <div className="w-24 h-1 bg-amber-200 mx-4"></div>
    </div>
  );

  return (
    <div className="flex flex-col bg-amber-50 min-h-screen">
      <div className="flex-grow w-full px-4 pt-24 pb-10 flex flex-col items-center">
        <h1 className="text-4xl font-serif font-bold mb-6 text-amber-900 text-center" style={{ textShadow: "1px 1px 2px rgba(120,53,15,0.2)" }}>
           Contact Us
        </h1>
        <div className="w-40 h-1 bg-amber-800 mx-auto mb-6"></div>
        <p className="text-xl text-amber-800 font-serif max-w-3xl mx-auto text-center mb-10">
            Have questions or want to contribute? Send us a message!
        </p>
        <VintageSeparator className="mb-12" />

        {/* Form */}
        <div className="w-full max-w-2xl">
            <div
                className="bg-white border-2 border-amber-300 overflow-hidden shadow-lg group"
            >
                <div className="p-6 sm:p-8 relative">
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>

                    <div className="mb-6 text-center border-b border-amber-200 pb-4">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mb-2">
                            Send us a message
                        </h2>
                        <p className="text-amber-800 font-serif text-sm sm:text-base">
                            We'd love to hear from you! Please fill out the form below.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-amber-900 font-serif font-semibold">
                                    Name <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className={`bg-amber-50/80 border-amber-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-400 rounded-none ${formErrors.name ? "border-red-500" : ""}`}
                                    aria-invalid={!!formErrors.name}
                                    aria-describedby={formErrors.name ? "name-error" : undefined}
                                />
                                {formErrors.name && (<p id="name-error" className="text-red-600 text-sm font-serif">{formErrors.name}</p>)}
                            </div>
                            {/* Email Input */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-amber-900 font-serif font-semibold">
                                    Email <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className={`bg-amber-50/80 border-amber-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-400 rounded-none ${formErrors.email ? "border-red-500" : ""}`}
                                    aria-invalid={!!formErrors.email}
                                    aria-describedby={formErrors.email ? "email-error" : undefined}
                                />
                                {formErrors.email && (<p id="email-error" className="text-red-600 text-sm font-serif">{formErrors.email}</p>)}
                            </div>
                        </div>
                        {/* Subject Input */}
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-amber-900 font-serif font-semibold">
                                Subject <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                id="subject"
                                value={formData.subject}
                                onChange={(e) => handleInputChange("subject", e.target.value)}
                                className={`bg-amber-50/80 border-amber-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-400 rounded-none ${formErrors.subject ? "border-red-500" : ""}`}
                                aria-invalid={!!formErrors.subject}
                                aria-describedby={formErrors.subject ? "subject-error" : undefined}
                            />
                            {formErrors.subject && (<p id="subject-error" className="text-red-600 text-sm font-serif">{formErrors.subject}</p>)}
                        </div>
                        {/* Message Input */}
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-amber-900 font-serif font-semibold">
                                Message <span className="text-red-600">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                rows={5}
                                className={`bg-amber-50/80 border-amber-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-400 rounded-none ${formErrors.message ? "border-red-500" : ""}`}
                                aria-invalid={!!formErrors.message}
                                aria-describedby={formErrors.message ? "message-error" : undefined}
                            />
                            {formErrors.message && (<p id="message-error" className="text-red-600 text-sm font-serif">{formErrors.message}</p>)}
                        </div>
                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full mt-4 px-8 py-3 bg-amber-800 text-amber-100 border-2 border-double border-amber-200 rounded-none hover:bg-amber-700 transition-colors text-base font-serif uppercase tracking-widest shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>

      </div>

      <div className="h-16 bg-amber-800 flex items-center justify-center mt-auto w-full">
        <VintageSeparator />
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-800 text-amber-100 p-3 border-2 border-double border-amber-300 shadow-lg z-50 hover:bg-amber-700 transition-colors"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-xs font-serif tracking-wide block leading-none">TOP</span>
        </button>
      )}
    </div>
  );
}

export default Contact;