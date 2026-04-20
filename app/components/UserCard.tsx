type UserCardProps = {
    name: string;
    job: string;
  };
  
  export default function UserCard({ name, job }: UserCardProps) {
    return (
      <div style={{ border: "1px solid gray", padding: "16px", marginTop: "12px" }}>
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    );
  }