export default function PromoCard({ title, body, img, accent = "emerald" }) {
  const accents = {
    emerald: "from-emerald-900/10 to-emerald-900/0",
    amber: "from-amber-500/15 to-amber-500/0",
    sky: "from-sky-500/15 to-sky-500/0",
  };
  return (
    <div className="card-paper overflow-hidden">
      <div className={"p-5 bg-gradient-to-b " + (accents[accent] || accents.emerald)}>
        <div className="flex items-start gap-4">
          <div className="shrink-0 h-14 w-14 rounded-2xl bg-white/70 border border-slate-900/10 flex items-center justify-center overflow-hidden">
            {img ? <img src={img} alt="" className="h-full w-full object-cover" /> : <span>🎁</span>}
          </div>
          <div>
            <div className="text-base font-extrabold text-slate-900">{title}</div>
            <div className="text-sm text-slate-600 mt-1">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}