type WelcomeProps = {
    name: string;
  };
  
  export default function Welcome({ name }: WelcomeProps) {
    return <h2>Welcome, {name}</h2>;
  }