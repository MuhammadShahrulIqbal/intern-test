import InfoCard from "../components/InfoCard";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            Latihan Komponen Reusable dan Props
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600">
            Page ini menunjukkan bagaimana satu komponen boleh digunakan semula
            berkali-kali dengan props yang berbeza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard
            title="Reusable Components"
            description="Satu komponen boleh digunakan semula di banyak tempat dengan code yang lebih kemas."
          />
          <InfoCard
            title="Props"
            description="Props digunakan untuk menghantar data ke dalam komponen seperti title dan description."
          />
          <InfoCard
            title="Card Layout"
            description="Latihan menyusun maklumat dalam card supaya paparan lebih cantik dan teratur."
          />
          <InfoCard
            title="React + Next.js Practice"
            description="Page ini membantu memahami asas komponen dalam project Next.js sebenar."
          />
        </div>
      </section>
    </main>
  );
}