import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Muhammad Shahrul Iqbal Bin Mohd Ehwan",
    role: "Frontend Developer & Backend Developer",
    bio: "Focused on building clean UI and learning modern web development with Next.js.",
  },
];

const skills = ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Zod", "Recharts"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <section className="mx-auto max-w-5xl space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            About
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600">
            This page introduces the people, skills, and learning journey behind
            this Next.js practice project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium text-blue-600">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Skills & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white border px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Want to know more?
          </h2>
          <p className="text-slate-600">
            Explore more pages or get in touch through the contact form.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact-form">
              <Button>Contact Us</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}