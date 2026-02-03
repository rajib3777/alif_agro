export default function SectionTitle({ kicker, title, right }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div>
        {kicker && <div className="text-xs font-bold uppercase tracking-wider text-emerald-800/80">{kicker}</div>}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
      </div>
      {right ? <div className="hidden sm:block">{right}</div> : null}
    </div>
  );
}