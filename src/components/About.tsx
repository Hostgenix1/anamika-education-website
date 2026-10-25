const stats = [
  { value: '500+', label: 'Students Placed' },
  { value: '20+', label: 'Partner Universities' },
  { value: '6', label: 'Destination Countries' },
  { value: '100%', label: 'Visa Success Focus' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              About Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Your Trusted Partner in Education &amp; Migration
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Anamika Education &amp; Migration, we simplify the journey of
              studying abroad and migrating to a new country. Our experienced
              counselors provide end-to-end support — from selecting the right
              course and university to visa processing and post-arrival
              settlement.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With deep knowledge of global education systems and immigration
              policies, we help students and professionals make informed
              decisions and achieve their international goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-brand-50 border border-brand-100"
              >
                <div className="text-3xl font-bold text-brand-700">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
