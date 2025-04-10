import { useState, FormEvent } from "react";
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

function Submit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log({ name, email, title, description, year, files });

      toast.success(
        "Photos submitted successfully! Thank you for your contribution.",
        {
          className:
            "bg-amber-100 text-amber-900 border border-amber-300 font-serif",
          duration: 4000,
        }
      );

      setName("");
      setEmail("");
      setTitle("");
      setDescription("");
      setYear("");
      setFiles(null);
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-amber-900 font-serif">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-amber-900 font-serif">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title" className="text-amber-900 font-serif">
                  Photo Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year" className="text-amber-900 font-serif">
                  Year Taken (if known)
                </Label>
                <Input
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-amber-900 font-serif"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={5}
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="files" className="text-amber-900 font-serif">
                  Upload Photos
                </Label>
                <Input
                  id="files"
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  className="cursor-pointer bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500 rounded-none"
                  required
                />
                <p className="text-sm text-amber-700 mt-1 font-serif">
                  Maximum 5 photos. Acceptable formats: JPG, PNG
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-800 text-amber-100 hover:bg-amber-700 border border-amber-700 font-serif text-lg uppercase tracking-widest"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Photos"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Submit;
