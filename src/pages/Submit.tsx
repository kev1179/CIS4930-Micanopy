import { useState, FormEvent, useRef } from "react";
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

type FormData = {
  name: string;
  email: string;
  title: string;
  description: string;
  year: string;
  files: FileList | null;
};

function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    title: "",
    description: "",
    year: "",
    files: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    field: keyof FormData,
    value: string | FileList | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: e.target.files,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(formData);

      toast.success(
        "Photos submitted successfully! Thank you for your contribution.",
        {
          className:
            "bg-amber-100 text-amber-900 border border-amber-300 font-serif",
          duration: 4000,
        }
      );

      setFormData({
        name: "",
        email: "",
        title: "",
        description: "",
        year: "",
        files: null,
      });
      setStep(1);
    } catch (error) {
      toast.error("Failed to submit photos. Please try again later.", {
        className:
          "bg-amber-100 text-amber-900 border border-amber-300 font-serif",
        duration: 4000,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const errors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) {
          errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
          errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = "Please enter a valid email address";
        }
        break;
      case 2:
        if (!formData.title.trim()) {
          errors.title = "Photo title is required";
        }
        if (!formData.description.trim()) {
          errors.description = "Description is required";
        }
        break;
      case 3:
        if (!formData.files || formData.files.length === 0) {
          errors.files = "Please select at least one photo";
        } else if (formData.files.length > 5) {
          errors.files = "Maximum 5 photos allowed";
        }
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-amber-900 font-serif">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="e.g. 'John Doe'"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
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
                  placeholder="e.g. 'john.doe@example.com'"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-amber-900 font-serif">
                Photo Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="e.g. 'Old Micanopy School'"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
                className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
              />
              {formErrors.title && (
                <p className="text-red-500 text-sm">{formErrors.title}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="year" className="text-amber-900 font-serif">
                Year Taken (if known)
              </Label>
              <Input
                id="year"
                type="number"
                placeholder="YYYY"
                value={formData.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
                className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-amber-900 font-serif"
              >
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="e.g. 'This photo was taken at the old Micanopy School in 1950.'"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                required
                rows={5}
                className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
              />
              {formErrors.description && (
                <p className="text-red-500 text-sm">{formErrors.description}</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="files" className="text-amber-900 font-serif">
                Upload Photos <span className="text-red-500">*</span>
              </Label>
              <Input
                id="files"
                type="file"
                multiple
                onChange={handleFileChange}
                className="cursor-pointer bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                required
              />
              <p className="text-sm text-amber-700 mt-1 font-serif">
                Maximum 5 photos. Acceptable formats: JPG, PNG
              </p>
              {formErrors.files && (
                <p className="text-red-500 text-sm">{formErrors.files}</p>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-serif text-amber-900">
                  Personal Information
                </h3>
                <p className="text-amber-800">Name: {formData.name}</p>
                <p className="text-amber-800">Email: {formData.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-amber-900">
                  Photo Details
                </h3>
                <p className="text-amber-800">Title: {formData.title}</p>
                <p className="text-amber-800">
                  Year: {formData.year || "Not specified"}
                </p>
                <p className="text-amber-800">
                  Description: {formData.description}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-amber-900">Photos</h3>
                <p className="text-amber-800">
                  {formData.files
                    ? `${formData.files.length} photos selected`
                    : "No photos selected"}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
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
            Submit Photos
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        <Card className="bg-amber-100 border-amber-300 shadow-lg rounded-none">
          <CardHeader className="border-b border-amber-300">
            <CardTitle className="text-2xl font-serif text-amber-900">
              Share your historical photos
            </CardTitle>
            <CardDescription className="text-amber-900 font-serif">
              We'd love to see your photos of Micanopy! Please fill out the form
              below to share your images with us.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center ${
                    stepNumber < 4 ? "flex-1" : ""
                  }`}
                >
                  <div
                    className={`size-8 rounded-full flex items-center justify-center relative ${
                      stepNumber <= step
                        ? "bg-amber-800 text-amber-100"
                        : "bg-amber-200 text-amber-800"
                    }`}
                  >
                    <span>{stepNumber}</span>
                  </div>
                  {stepNumber < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        stepNumber < step ? "bg-amber-800" : "bg-amber-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}

              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={(e) => prevStep(e)}
                    className="bg-amber-200 text-amber-900 hover:bg-amber-300 border border-amber-300 font-serif"
                  >
                    Previous
                  </Button>
                )}
                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={(e) => nextStep(e)}
                    className="ml-auto bg-amber-800 text-amber-100 hover:bg-amber-700 border border-amber-700 font-serif"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-amber-800 text-amber-100 hover:bg-amber-700 border border-amber-700 font-serif"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Photos"}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Submit;
