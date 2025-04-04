import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };

  return (
    <div className="bg-amber-50 min-h-screen relative">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('/images/old-paper.jpg')] bg-cover"></div>
      </div>
      <div className="max-w-2xl mx-auto px-4 relative min-h-screen flex flex-col justify-center py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-amber-900 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        <Card className="bg-amber-100 border-amber-300 shadow-lg">
          <CardHeader className="border-b border-amber-300">
            <CardTitle className="text-2xl font-serif text-amber-900">
              Send us a message
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-amber-900 font-serif">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
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
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-amber-900 font-serif">
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-amber-900 font-serif">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="bg-amber-50 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-800 text-amber-100 hover:bg-amber-700 border border-amber-700 font-serif text-lg uppercase tracking-widest"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
