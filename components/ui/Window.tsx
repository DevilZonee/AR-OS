import Glass from "./Glass";

interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export default function Window({
  title,
  children,
}: WindowProps) {
  return (
    <Glass className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <h2 className="font-semibold">{title}</h2>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      <div className="p-6">
        {children}
      </div>
    </Glass>
  );
}