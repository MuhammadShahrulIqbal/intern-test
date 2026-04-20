type InfoCardProps = {
    title: string;
    description: string;
  };
  
  export default function InfoCard({ title, description }: InfoCardProps) {
    return (
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>
    );
  }