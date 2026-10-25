export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-100 opacity-50 blur-[120px]" />
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-100 opacity-50 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6 uppercase tracking-wider">
            Trusted by students worldwide
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Study Abroad &amp; Migrate with
            <br />
            <span className="text-brand-600">Confidence</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Expert education counseling, university admissions, and migration
            services to help you build your future overseas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white text-lg font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-lg font-semibold rounded-xl text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-4 focus:ring-slate-100"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
