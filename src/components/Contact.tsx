export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              Get in Touch
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to start your journey?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Book a free consultation with our education and migration experts.
              We'll assess your profile and guide you on the best pathway
              forward.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 flex items-center justify-center text-brand-400 shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-medium text-white">Office Address</p>
                  <p className="text-slate-400 text-sm">
                    123 Education Plaza, Migration Street<br />
                    Sydney, NSW 2000, Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 flex items-center justify-center text-brand-400 shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-slate-400 text-sm">+61 2 9876 5432</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 flex items-center justify-center text-brand-400 shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-slate-400 text-sm">
                    info@anamikaeducation.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"
              >
                camera
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors"
              >
                in
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! We will contact you shortly.');
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+61 4xx xxx xxx"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your education or migration goals..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-lg hover:shadow-brand-500/40 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
