import Glass from "./Glass";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <Glass className="p-6">
      {children}
    </Glass>
  );
}