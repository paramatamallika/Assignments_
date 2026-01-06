import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Feedback Form</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Textarea
            placeholder="Feedback"
            value={formData.feedback}
            onChange={(e) =>
              setFormData({ ...formData, feedback: e.target.value })
            }
          />

          <Button type="submit">Submit</Button>
        </form>

        {submittedData && (
          <div className="border-t pt-3">
            <p><b>Name:</b> {submittedData.name}</p>
            <p><b>Email:</b> {submittedData.email}</p>
            <p><b>Feedback:</b> {submittedData.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
