function Contact() {
  const contacts = [
    {
      href: 'https://mail.google.com/mail/?view=cm&to=beyondbiotic@gmail.com',
      label: 'Email',
      value: 'beyondbiotic@gmail.com',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
    },
    {
      href: 'tel:+918209000105',
      label: 'Phone',
      value: '+91 82090 00105',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493-3.76 1.88a11.042 11.042 0 005.516 5.516l1.88-3.76 4.493 1.498A1 1 0 0119 14.72V18a2 2 0 01-2 2C9.163 20 4 14.837 4 8.5V5z" />
      ),
    },
    {
      href: 'https://www.google.com/maps/search/Jaipur,+Rajasthan,+India',
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Reach out to collaborate and build the future of preventive wellness together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contacts.map(({ href, label, value, icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Location' || label === 'Email' ? '_blank' : undefined}
              rel={label === 'Location' || label === 'Email' ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-100 group-hover:bg-cyan-500 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                <svg className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icon}
                </svg>
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{label}</h4>
              <p className="text-slate-500 text-sm group-hover:text-cyan-600 transition-colors duration-300">{value}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;
