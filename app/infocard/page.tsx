import InfoCard from "../components/InfoCard";

export default function InfoCardPage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Info Card Page</h1>

      <InfoCard
        title="Web Development"
        description="We build modern websites using Next.js."
      />

      <InfoCard
        title="UI Design"
        description="We create clean and responsive interfaces."
      />
    </main>
  );
}