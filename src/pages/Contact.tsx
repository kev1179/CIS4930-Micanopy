import { useState, FormEvent } from "react";
import { submitContactForm } from "@/lib/api";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await submitContactForm(formData);

      toast.success("Message sent successfully! We'll get back to you soon.", {
        className:
          "bg-amber-100 text-amber-900 border border-amber-300 font-serif",
        duration: 4000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        className:
          "bg-amber-100 text-amber-900 border border-amber-300 font-serif",
        duration: 4000,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(45deg,#f3d5b5_10%,transparent_10%,transparent_90%,#f3d5b5_90%)] bg-[size:20px_20px]"></div>
      </div>
      <div className="max-w-2xl mx-auto px-4 relative py-20">
        <div className="text-center my-12">
          <h1 className="text-4xl font-serif text-amber-900 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        <Card className="bg-amber-100 border-amber-300 shadow-lg rounded-none">
          <CardHeader className="border-b border-amber-300">
            <CardTitle className="text-2xl font-serif text-amber-900">
              Send us a message
            </CardTitle>
            <CardDescription className="text-amber-900 font-serif">
              We'd love to hear from you! Please fill out the form below to
              contact us.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-amber-900 font-serif">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-amber-900 font-serif">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-amber-900 font-serif">
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={`bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none ${
                    formErrors.subject ? "border-red-500" : ""
                  }`}
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm">{formErrors.subject}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-amber-900 font-serif">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={5}
                  className={`bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-800 text-amber-100 hover:bg-amber-700 border border-amber-700 font-serif text-lg uppercase tracking-widest"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
