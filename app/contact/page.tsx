"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <div className="h-40 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />

      <div className="container mx-auto px-4 -mt-20">
        <Card className="border border-border/50 shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[2fr_3fr]">
              {/* Left Section - Info */}
              <div className="bg-gradient-to-br from-primary to-secondary p-10 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <h2 className="text-4xl font-bold mb-8 font-outfit">
                  Contact Information
                </h2>

                <div className="space-y-8 text-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-bold font-outfit">Location</h3>
                      <p className="font-outfit">
                        Kashipur, Uttarakhand, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-bold font-outfit">Email</h3>
                      <p className="font-outfit">surajgiri@55446gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-bold font-outfit">Phone</h3>
                      <p className="font-outfit">+91 9536990114</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="p-10 text-lg">
                <h2 className="text-3xl font-bold mb-6 font-outfit">
                  Send a Message
                </h2>

                {submitted && (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 text-base">
                    <p className="font-outfit">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-base font-medium font-outfit"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="font-outfit text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-base font-medium font-outfit"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Your email address"
                        required
                        className="font-outfit text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-base font-medium font-outfit"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="font-outfit text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium font-outfit"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry"
                      rows={6}
                      required
                      className="font-outfit text-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-outfit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending....." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
