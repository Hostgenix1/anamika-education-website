const services = [
  {
    title: 'Student Counseling',
    description:
      'Personalized guidance to help you choose the right course, university, and destination based on your goals and profile.',
    icon: '🎓',
  },
  {
    title: 'University Admissions',
    description:
      'End-to-end application support for top universities in Australia, Canada, UK, USA, and New Zealand.',
    icon: '🏫',
  },
  {
    title: 'Visa Processing',
    description:
      'Complete visa application assistance, document preparation, and interview preparation for student and skilled visas.',
    icon: '🛂',
  },
  {
    title: 'Skilled Migration',
    description:
      'Pathways to permanent residency through skilled migration programs, points assessment, and occupation lists.',
    icon: '🗺️',
  },
  {
    title: 'IELTS / PTE Coaching',
    description:
      'Language test preparation support and resources to help you achieve the scores required for admission and visas.',
    icon: '📚',
  },
  {
    title: 'Pre-Departure Support',
    description:
      'Assistance with accommodation, travel, insurance, and settling into your new country.',
    icon: '✈️',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Comprehensive support from course selection to settlement abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
