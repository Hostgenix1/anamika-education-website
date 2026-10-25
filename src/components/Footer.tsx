export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-brand-700 font-bold text-xl tracking-tight">
            <span className="rounded bg-brand-100 px-2 py-0.5 text-brand-700 text-xs font-semibold uppercase">
              AE
            </span>
            Anamika Education &amp; Migration
          </div>
          <p className="text-slate-600 text-sm">
            Helping students and professionals achieve their international
            education and migration goals.
          </p>
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Anamika Education &amp; Migration.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
