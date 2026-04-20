import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Responsive Design",
    description: "Layout yang adapt untuk phone, tablet, dan desktop.",
    href: "/responsive",
  },
  {
    title: "Contact Form",
    description: "Form dengan validation guna Zod, React Hook Form, dan shadcn.",
    href: "/contact-form",
  },
  {
    title: "Charts",
    description: "Area, Bar, Line, Pie, Radar, Radial, dan Tooltip charts.",
    href: "/charts",
  },
  {
    title: "Services",
    description: "Latihan komponen reusable dan props.",
    href: "/services",
  },
  {
    title: "Profile",
    description: "Belajar input, state, dan paparan data user.",
    href: "/profile",
  },
  {
    title: "Counter",
    description: "Asas interactivity dengan useState dan button click.",
    href: "/counter",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16 space-y-12">
        <div className="text-center space-y-5">
          <p className="inline-block rounded-full border px-4 py-1 text-sm text-slate-600 bg-white">
            Next.js Practice Project
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Build, Learn, and Practice with Next.js
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
            Ini ialah ruang latihan saya untuk belajar Next.js, shadcn/ui,
            responsive layout, form validation, charts, components, dan banyak
            lagi.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/charts">
              <Button size="lg">Explore Charts</Button>
            </Link>
            <Link href="/contact-form">
              <Button size="lg" variant="outline">
                Try Contact Form
              </Button>
            </Link>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Pages Built</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">10+</p>
              <p className="text-sm text-slate-600 mt-2">
                Banyak page latihan untuk routing, components, charts, dan forms.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-500">shadcn/ui</p>
              <p className="text-sm text-slate-600 mt-2">
                Guna button, card, input, textarea, charts, dan komponen lain.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">Zod</p>
              <p className="text-sm text-slate-600 mt-2">
                Form validation yang lebih kemas dan type-safe.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              What I Built
            </h2>
            <p className="text-slate-600">
              Beberapa page utama yang anda boleh explore sekarang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">
                    {feature.description}
                  </p>
                  <Link href={feature.href}>
                    <Button variant="secondary" className="w-full">
                      Open Page
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 text-white px-6 py-10 md:px-10 md:py-14 text-center space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Keep Practicing, Keep Building
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Setiap page dalam project ini bantu saya faham konsep Next.js dengan
            lebih jelas melalui latihan sebenar.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/services">
              <Button variant="secondary">View Services</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline">Go to Profile</Button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}