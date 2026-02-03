import logo from "../assets/logo_alif.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Alif Agro Services"
        className="h-11 w-11 rounded-2xl object-contain bg-white/70 border border-slate-900/10 shadow-sm"
      />
    </div>
  );
}