export default function StatBar({ stats }) {
  return (
    <div className="bg-white border border-line rounded-card max-w-content mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-line overflow-hidden">
      {stats.map((s, i) => (
        <div key={i} className="flex-1 flex items-center gap-3 p-5">
          <span className="w-10 h-10 flex items-center justify-center rounded-chip bg-chip-teal text-lg">
            {s.icon}
          </span>
          <div>
            <p className="font-heading font-extrabold text-lg">{s.number}</p>
            <p className="text-muted text-[12px]">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
